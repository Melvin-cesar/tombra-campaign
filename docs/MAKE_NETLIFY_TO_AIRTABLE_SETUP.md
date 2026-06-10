# Make: Netlify Forms to Airtable Setup

This guide explains how to send Tombra 2027 website submissions from Netlify Forms into Airtable through Make.

Flow:

`Netlify Forms -> Make custom webhook -> Router -> Airtable`

Netlify remains the capture and backup layer. Airtable becomes the campaign-friendly dashboard for daily review and follow-up.

## Before You Start

Create the Airtable base described in `docs/AIRTABLE_DASHBOARD_SETUP.md` first:

- Base: `Tombra 2027 Campaign Dashboard`
- Tables: `Volunteers`, `Community Concerns`, `Contact Messages`

Do not add Airtable API keys, Make webhook URLs, or private credentials to the website code.

## 1. Create a Make Scenario

1. Open Make.
2. Create a new scenario.
3. Add the first module: `Webhooks`.
4. Choose `Custom webhook`.
5. Create a new webhook named `Tombra 2027 Netlify Forms`.
6. Copy the webhook URL.

Keep the scenario open. Make may wait for a sample submission so it can detect the payload fields.

## 2. Add the Webhook URL in Netlify

1. Open the Netlify site dashboard for `tombra2027.com`.
2. Go to `Forms`.
3. Open form submission notifications.
4. Add an outgoing webhook notification.
5. Paste the Make custom webhook URL.
6. Apply it to all three forms:
   - `volunteer-form`
   - `community-concern-form`
   - `contact-form`

If Netlify only allows one form at a time in the selected screen, create the same outgoing webhook notification for each form.

## 3. Send a Test Submission

Submit one test entry from each live website form:

- `/volunteer` for `volunteer-form`
- `/community` for `community-concern-form`
- `/contact` for `contact-form`

Return to Make and confirm the webhook receives sample data. Netlify webhook payloads may wrap submitted values inside a `data` or `payload` object depending on the notification format. Use Make's detected sample to choose the correct field paths.

Expected website fields:

| Form | Expected fields |
| --- | --- |
| `volunteer-form` | `fullName`, `phone`, `email`, `lga`, `ward`, `community`, `volunteerRole`, `available`, `consent`, `sourceSite`, `campaign`, `formType`, `submittedFrom` |
| `community-concern-form` | `fullName`, `phone`, `lga`, `ward`, `community`, `issueCategory`, `description`, `consent`, `sourceSite`, `campaign`, `formType`, `submittedFrom` |
| `contact-form` | `fullName`, `phone`, `email`, `reason`, `message`, `consent`, `sourceSite`, `campaign`, `formType`, `submittedFrom` |

## 4. Route by Form Name

Add a `Router` module after the webhook with three routes.

Use the Netlify form name field to choose the route. Depending on the webhook payload, this may appear as one of:

- `form_name`
- `form-name`
- `name`
- `data.form-name`
- `payload.form_name`

Recommended route filters:

| Route | Filter |
| --- | --- |
| Volunteers | Form name equals `volunteer-form`, or `formType` equals `volunteer` |
| Community Concerns | Form name equals `community-concern-form`, or `formType` equals `community-concern` |
| Contact Messages | Form name equals `contact-form`, or `formType` equals `contact` |

Using `formType` as a fallback makes the scenario more resilient if Netlify changes the wrapper field name but still sends form fields correctly.

## 5. Map Volunteer Submissions

On the Volunteers route, add an Airtable module:

Module: `Airtable -> Create a record`

Base: `Tombra 2027 Campaign Dashboard`

Table: `Volunteers`

Field mapping:

| Airtable field | Netlify / Make value |
| --- | --- |
| Full Name | `fullName` |
| Phone | `phone` |
| Email | `email` |
| LGA | `lga` |
| Ward | `ward` |
| Community | `community` |
| Volunteer Role | `volunteerRole` |
| Availability | `available` |
| Consent | Convert `consent` present/value to checked |
| Source Site | `sourceSite`, fallback `tombra2027.com` |
| Campaign | `campaign`, fallback `Tombra 2027` |
| Form Type | `formType`, fallback `volunteer` |
| Submitted From | `submittedFrom` |
| Status | `New` |
| Assigned To | Leave blank |
| Notes | Leave blank |
| Submitted At | Make execution time or Airtable created time |

## 6. Map Community Concern Submissions

On the Community Concerns route, add an Airtable module:

Module: `Airtable -> Create a record`

Base: `Tombra 2027 Campaign Dashboard`

Table: `Community Concerns`

Field mapping:

| Airtable field | Netlify / Make value |
| --- | --- |
| Full Name | `fullName` |
| Phone | `phone` |
| LGA | `lga` |
| Ward | `ward` |
| Community | `community` |
| Issue Category | `issueCategory` |
| Concern / Message | `description` |
| Consent | Convert `consent` present/value to checked |
| Source Site | `sourceSite`, fallback `tombra2027.com` |
| Campaign | `campaign`, fallback `Tombra 2027` |
| Form Type | `formType`, fallback `community-concern` |
| Submitted From | `submittedFrom` |
| Status | `New` |
| Assigned To | Leave blank |
| Follow-up Notes | Leave blank |
| Submitted At | Make execution time or Airtable created time |

## 7. Map Contact Form Submissions

On the Contact Messages route, add an Airtable module:

Module: `Airtable -> Create a record`

Base: `Tombra 2027 Campaign Dashboard`

Table: `Contact Messages`

Field mapping:

| Airtable field | Netlify / Make value |
| --- | --- |
| Full Name | `fullName` |
| Phone | `phone` |
| Email | `email` |
| Reason | `reason` |
| Message | `message` |
| Consent | Convert `consent` present/value to checked |
| Source Site | `sourceSite`, fallback `tombra2027.com` |
| Campaign | `campaign`, fallback `Tombra 2027` |
| Form Type | `formType`, fallback `contact` |
| Submitted From | `submittedFrom` |
| Status | `New` |
| Notes | Leave blank |
| Submitted At | Make execution time or Airtable created time |

## 8. Avoid Duplicate Records

Netlify and Make can occasionally retry webhook delivery. To reduce duplicates:

1. If the Netlify payload includes a unique submission ID, add it to Airtable as `Netlify Submission ID`.
2. Before each Airtable `Create a record` module, add an Airtable `Search records` module.
3. Search for an existing record where `Netlify Submission ID` equals the incoming ID.
4. Only create a record if the search returns no match.

If Netlify does not provide a stable submission ID in the webhook payload, use a softer duplicate check:

- Volunteers: same `Phone` plus same `Submitted At` minute or same `Full Name`
- Community Concerns: same `Phone`, `Issue Category`, and `Concern / Message`
- Contact Messages: same `Phone` or `Email` plus same `Message`

This softer approach is helpful but not perfect, so keep Netlify as the backup source.

## 9. Test the Full Scenario

1. Turn the Make scenario on.
2. Submit one fake test record through each website form.
3. Confirm Netlify receives each submission.
4. Confirm Make receives each webhook.
5. Confirm Airtable creates one record in the correct table.
6. Confirm the default `Status` is `New`.
7. Confirm `Source Site`, `Campaign`, `Form Type`, and `Submitted From` are populated.

Use fake test data only, such as:

- `Test Volunteer`
- `Test Concern`
- `Test Contact`

Delete test records from Airtable when validation is finished, or keep them in a filtered test view.

## 10. Troubleshooting Missing Fields

If a field is missing in Airtable:

- Confirm the form is detected in Netlify Forms.
- Confirm the outgoing webhook notification is attached to the correct Netlify form.
- Open Make's webhook sample and check whether the value is nested under `data`, `payload`, or another wrapper.
- Re-run the webhook sample after submitting a fresh form entry.
- Confirm the Airtable field type accepts the incoming value. For example, single select values must match allowed options.
- Confirm the Make route is not filtering the submission into the wrong branch.
- Confirm the website's static Netlify form definitions include the field name.

If consent does not appear checked:

- Check what value Netlify sends for checked checkboxes. It may be `on`, `true`, `Yes`, or another present value.
- In Make, convert any present consent value to a checked Airtable checkbox.

If submissions appear in Netlify but not Make:

- Confirm the outgoing webhook notification is enabled.
- Confirm the Make scenario is turned on.
- Submit a new test record after enabling the scenario.
- Check Make scenario history for errors.

If submissions appear in Make but not Airtable:

- Reconnect the Airtable module.
- Confirm the base and table names match the Airtable setup.
- Check required Airtable fields and single select options.
- Review Make scenario history for the failed Airtable operation.
