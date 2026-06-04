# Deploy and Share

This project is ready for GitHub Pages or Vercel.

## Option 1: Deploy with GitHub Pages

1. Push this folder to a GitHub repository.
2. In the GitHub repo, open Settings.
3. Go to Pages.
4. Under Build and deployment, set Source to GitHub Actions.
5. Push to the `main` branch, or run the `Deploy to GitHub Pages` workflow manually.

GitHub will publish a public URL after the workflow finishes.

If the repo is named `your-username.github.io`, the site will publish at:

```text
https://your-username.github.io/
```

For any other repo name, it will publish at:

```text
https://your-username.github.io/repo-name/
```

## Option 2: Deploy with Vercel CLI

```bash
npm install
npx vercel login
npx vercel
```

Follow the prompts. Vercel will give you a public preview URL.

For a production URL:

```bash
npx vercel --prod
```

## Option 3: Deploy through the Vercel website

1. Create a GitHub repository for this folder.
2. Push this project to GitHub.
3. In Vercel, choose New Project.
4. Import the GitHub repository.
5. Keep the detected framework as Next.js.
6. Deploy.

## Local Preview

```bash
npm install
npm run build
npm start
```

Then open `http://localhost:3000`.
