# Tutoring Website — First Version

## Files
- index.html — the complete website
- styles.css — design and responsive layout
- script.js — navigation, enrolment form and resource notices

## Before publishing
Search for and replace:
- "Your Name"
- "your@email.com"
- "@yourusername"
- subjects/grades
- the About text
- the Calendly URL

## Make booking functional
1. Create a free Calendly account.
2. Create your introductory meeting event.
3. Copy its public booking URL.
4. Replace `https://calendly.com/` in index.html with your URL.

## Make enrolment functional
The current enrolment button opens the user's email app using a mailto link.
For a no-code form that stores submissions, replace the form with a Google Form or Formspree endpoint.

## Publish free
Recommended: Netlify or Vercel.
For Netlify: drag the whole folder into Netlify's deploy area.
For Vercel: import/upload the project and deploy.
You'll receive a free subdomain such as yourname.netlify.app or yourname.vercel.app.
