# Tombra Mohammed Campaign Website

Static campaign website for Tombra Mohammed, Young Progressives Party (YPP) candidate for Bayelsa West Senatorial District.

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
```

This project uses Next.js static export. The production output is generated in:

```bash
out
```

## Netlify Deployment

1. Create or open a Netlify account.
2. Create a new Netlify site from the GitHub repository.
3. Use these build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: `22`
4. Deploy the site.
5. Open Netlify Forms after the first deploy and confirm these forms are detected:
   - `volunteer-form`
   - `community-concern-form`
   - `contact-form`

The same settings are also stored in `netlify.toml`.

## Campaign Details

Update campaign contact details, social links, and the final public domain in:

```bash
lib/campaignDetails.ts
```

Leave any unknown value as an empty string. The site hides empty contact and social fields instead of showing fake details.

After the final domain is ready, update `finalDomain` so canonical URLs, sitemap, robots.txt, and social sharing metadata use the production domain.

## News and Media Content

Update homepage update cards, media gallery copy, agenda pillars, issue categories, and volunteer options in:

```bash
lib/content.ts
```

Images currently live in:

```bash
public/campaign
```

Do not replace real campaign photos with placeholders. Add new approved campaign images to `public/campaign` and reference them from `lib/content.ts`.

## Analytics

Analytics are optional and controlled with environment variables. The site will still build and run if these are empty.

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN=
```

Add either value in Netlify Site settings under Environment variables, then redeploy.

