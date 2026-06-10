# Airtable Campaign Dashboard Setup

This document describes the recommended Airtable base for campaign form submissions from tombra2027.com. Netlify should remain the form capture and backup layer. Airtable should be the campaign-friendly place where the candidate and team review, assign, and follow up on submissions.

## Base

Base name: `Tombra 2027 Campaign Dashboard`

Recommended tables:

- `Volunteers`
- `Community Concerns`
- `Contact Messages`

## Website Form Metadata

Each Netlify form submission includes these hidden metadata fields:

| Website field | Value | Purpose |
| --- | --- | --- |
| `sourceSite` | `tombra2027.com` | Identifies the website that captured the submission. |
| `campaign` | `Tombra 2027` | Identifies the campaign. |
| `formType` | `volunteer`, `community-concern`, or `contact` | Makes routing and Airtable filtering easier. |
| `submittedFrom` | Current page path, such as `/volunteer` | Shows which page the visitor submitted from. |

`submittedAt` should come from Netlify, Make, or Airtable automation time fields. Do not hardcode it in the client form unless a future integration specifically requires that.

## Table A: Volunteers

Source website form: `volunteer-form`

| Airtable field name | Field type | Description | Website form field | Recommended default |
| --- | --- | --- | --- | --- |
| Full Name | Single line text | Volunteer name. | `fullName` | None |
| Phone | Phone number | Primary phone number for campaign follow-up. | `phone` | None |
| Email | Email | Optional email address. | `email` | None |
| LGA | Single select | Local government area. | `lga` | None |
| Ward | Single line text | Ward provided by the volunteer. | `ward` | None |
| Community | Single line text | Community, town, or area. | `community` | None |
| Volunteer Role | Single select | How the person wants to help. | `volunteerRole` | None |
| Availability | Single select | Whether the person is available for campaign activities. | `available` | None |
| Consent | Checkbox | Consent to be contacted by the campaign. | `consent` | Checked when value is present |
| Source Site | Single line text | Website that captured the submission. | `sourceSite` | `tombra2027.com` |
| Campaign | Single line text | Campaign identifier. | `campaign` | `Tombra 2027` |
| Form Type | Single select | Submission type. | `formType` | `volunteer` |
| Submitted From | Single line text | Page path where the form was submitted. | `submittedFrom` | `/volunteer` |
| Status | Single select | Volunteer follow-up status. | Not from website | `New` |
| Assigned To | Collaborator or single line text | Team member responsible for follow-up. | Not from website | None |
| Notes | Long text | Internal campaign notes. | Not from website | None |
| Submitted At | Created time or date/time | Submission timestamp. | Netlify, Make, or Airtable timestamp | Created time |

Volunteer Status options:

- `New`
- `Contacted`
- `Confirmed`
- `Assigned`
- `Not Reachable`

## Table B: Community Concerns

Source website form: `community-concern-form`

| Airtable field name | Field type | Description | Website form field | Recommended default |
| --- | --- | --- | --- | --- |
| Full Name | Single line text | Name of the person submitting the concern. | `fullName` | None |
| Phone | Phone number | Primary phone number for follow-up. | `phone` | None |
| LGA | Single select | Local government area. | `lga` | None |
| Ward | Single line text | Ward related to the concern. | `ward` | None |
| Community | Single line text | Community, town, or area. | `community` | None |
| Issue Category | Single select | Category selected on the website. | `issueCategory` | None |
| Concern / Message | Long text | Submitted concern or issue description. | `description` | None |
| Consent | Checkbox | Consent to be contacted by the campaign. | `consent` | Checked when value is present |
| Source Site | Single line text | Website that captured the submission. | `sourceSite` | `tombra2027.com` |
| Campaign | Single line text | Campaign identifier. | `campaign` | `Tombra 2027` |
| Form Type | Single select | Submission type. | `formType` | `community-concern` |
| Submitted From | Single line text | Page path where the form was submitted. | `submittedFrom` | `/community` |
| Status | Single select | Review and follow-up status. | Not from website | `New` |
| Assigned To | Collaborator or single line text | Team member responsible for follow-up. | Not from website | None |
| Follow-up Notes | Long text | Internal follow-up notes. | Not from website | None |
| Submitted At | Created time or date/time | Submission timestamp. | Netlify, Make, or Airtable timestamp | Created time |

Community Concern Status options:

- `New`
- `Reviewed`
- `Assigned`
- `Followed Up`
- `Escalated`
- `Closed`

## Table C: Contact Messages

Source website form: `contact-form`

| Airtable field name | Field type | Description | Website form field | Recommended default |
| --- | --- | --- | --- | --- |
| Full Name | Single line text | Name of the person contacting the campaign. | `fullName` | None |
| Phone | Phone number | Primary phone number for follow-up. | `phone` | None |
| Email | Email | Optional email address. | `email` | None |
| Reason | Single line text | Reason for contacting the campaign. | `reason` | None |
| Message | Long text | Message to the campaign. | `message` | None |
| Consent | Checkbox | Consent to be contacted by the campaign. | `consent` | Checked when value is present |
| Source Site | Single line text | Website that captured the submission. | `sourceSite` | `tombra2027.com` |
| Campaign | Single line text | Campaign identifier. | `campaign` | `Tombra 2027` |
| Form Type | Single select | Submission type. | `formType` | `contact` |
| Submitted From | Single line text | Page path where the form was submitted. | `submittedFrom` | `/contact` |
| Status | Single select | Contact follow-up status. | Not from website | `New` |
| Notes | Long text | Internal campaign notes. | Not from website | None |
| Submitted At | Created time or date/time | Submission timestamp. | Netlify, Make, or Airtable timestamp | Created time |

Contact Status options:

- `New`
- `Replied`
- `Follow-up Needed`
- `Closed`

## Airtable Interface Recommendation

Interface name: `Campaign Command Centre`

Recommended pages:

- `Overview`
- `Volunteers`
- `Community Concerns`
- `Contact Messages`
- `Follow-up Needed`

### Overview

The overview page should give the candidate and campaign leads a quick operating picture:

- Total Volunteers
- New Volunteers
- Total Community Concerns
- New Community Concerns
- Total Contact Messages
- New Contact Messages
- Concerns by LGA
- Concerns by Issue Category
- Recent Submissions

Recommended layout:

- Use number cards for the totals and new-submission counts.
- Use charts or grouped summaries for concerns by LGA and issue category.
- Use a recent submissions list that combines the newest records from all three tables if possible. If Airtable Interface limitations make a combined list awkward, place three compact recent-record lists side by side.
- Add filters for `Status`, `LGA`, `Assigned To`, and `Submitted At` where relevant.

### Volunteers

Show a grid or record-review page for the `Volunteers` table. Make `Status`, `Assigned To`, and `Notes` easy to edit. Add quick filters for `New`, `Contacted`, and `Assigned`.

### Community Concerns

Show the `Community Concerns` table grouped by `Status` or `Issue Category`. Make `Assigned To` and `Follow-up Notes` easy to edit. Add filters for `LGA`, `Ward`, `Issue Category`, and `Status`.

### Contact Messages

Show the `Contact Messages` table with `New` and `Follow-up Needed` messages first. Make `Status` and `Notes` easy to edit.

### Follow-up Needed

Create a focused page that surfaces:

- Volunteers with status `New`, `Contacted`, or `Not Reachable`
- Community concerns with status `New`, `Assigned`, `Escalated`, or `Followed Up`
- Contact messages with status `New` or `Follow-up Needed`

This page should be used by the team during daily call, WhatsApp, and field follow-up sessions.
