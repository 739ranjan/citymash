# CityMash Hostinger Deployment Guide

This project is a single Node.js app:

- Frontend: Vite + React
- Backend: `server.mjs`
- Contact form mailer: SMTP via `nodemailer`

Because the contact form uses the Node server, this project must be deployed on a Hostinger plan that supports running a Node.js application.

## 1. Confirm the right Hostinger plan

Use a Hostinger plan that explicitly supports one of these:

- Node.js Hosting
- Web App Hosting
- Managed Node.js Hosting
- Cloud hosting with Node.js app support
- VPS hosting

Do not use:

- static-only hosting
- basic shared hosting without Node.js app support
- website builder only plans

## 2. Prepare the project locally

Open the project folder:

```bash
cd citymash_client1
```

Install dependencies:

```bash
npm install
```

Build once locally to confirm the app is healthy:

```bash
npm run build
```

## 3. Create production environment variables

Create a `.env` file in the project root.

Example:

```env
PORT=8787
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@yourdomain.com
SMTP_PASS=your_real_smtp_password
CONTACT_TO_EMAIL=info@yourdomain.com
CONTACT_FROM_EMAIL=CityMash Website <info@yourdomain.com>
```

Important:

- `server.mjs` reads `.env` from the project root
- `VITE_API_URL` is not needed for this deployment
- do not commit your real `.env`

## 4. Make sure your email account exists first

Before deploying, create the mailbox you want to use in Hostinger Email or your mail provider:

- `info@yourdomain.com`

Then confirm the SMTP details from your mail provider dashboard:

- SMTP host
- SMTP port
- SMTP username
- SMTP password
- SSL/TLS requirement

## 5. Push the project to GitHub

Hostinger’s Node/Web App flow commonly deploys from GitHub, so keep the project in a Git repository.

If needed:

```bash
git init
git add .
git commit -m "Prepare CityMash for Hostinger deployment"
```

Then push to GitHub.

## 6. Create the app on Hostinger

In Hostinger:

1. Open hPanel.
2. Go to the Node.js Hosting or Web App Hosting area.
3. Create a new application.
4. Connect your GitHub repository or upload the project if that option is provided.
5. Select the `citymash_client1` project/repository.

## 7. Configure build and start commands

Use these commands:

Build command:

```bash
npm install && npm run build
```

Start command:

```bash
npm start
```

The `start` script runs:

```bash
node server.mjs
```

## 8. Add environment variables in Hostinger

In the Hostinger app environment settings, add:

- `PORT`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

Use the same values you tested locally.

## 9. Deploy the app

After the repository, commands, and env variables are set:

1. Trigger deployment.
2. Wait for build to finish.
3. Open the generated app URL.

Check:

- homepage loads
- images load
- contact form submits

## 10. Connect your domain

In Hostinger:

1. Open the deployed application.
2. Add your custom domain such as `citymash.in` or `www.citymash.in`.
3. Point DNS records as instructed by Hostinger.
4. Wait for DNS propagation.
5. Enable SSL if it is not already auto-enabled.

## 11. Test the contact form

After deployment:

1. Open the live website.
2. Submit the contact form.
3. Confirm the success message appears.
4. Confirm the email arrives at `CONTACT_TO_EMAIL`.
5. Reply to the received mail and verify it goes to the visitor email through `replyTo`.

## 12. If the form fails

Check these first:

- `.env` values are added correctly in Hostinger
- SMTP password is correct
- SMTP host and port are correct
- the sender mailbox exists
- the deployed app is using `npm start`
- the Hostinger plan supports Node.js apps

## 13. Notes specific to this project

- API URL is local to the same app through `/api/contact`
- `VITE_API_URL` is not required
- the frontend and SMTP mail handler are deployed together
- `server.mjs` serves both the built frontend and the contact API

## 14. Local run commands

For local development:

```bash
npm run dev:server
npm run dev:client
```

For local production-style testing:

```bash
npm run build
npm start
```

## 15. Quick deployment checklist

- correct Hostinger plan selected
- mailbox created
- SMTP credentials verified
- `.env` values ready
- GitHub repo connected
- build command set
- start command set
- environment variables added in Hostinger
- deploy completed
- contact form tested successfully
