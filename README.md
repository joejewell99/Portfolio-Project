# My Portfolio Project

This is my personal software engineering portfolio website, built with React and Vite. It presents my background, technical skills, education, featured projects, CV, and contact details in one responsive web application.

## Purpose

This project is designed to act as my online portfolio for software engineering opportunities. It gives visitors a quick way to:

- Learn about my current focus as a Computer Science student and aspiring full-stack developer.
- View my technical skills across languages, frameworks, databases, web technologies, and development tools.
- Read about my education, university modules, coursework, and project experience.
- Browse my project case studies with screenshots, technology lists, feature summaries, reflections, and GitHub links.
- Download my CV from the website.
- Send me a contact message through the contact form or use my LinkedIn, GitHub, and email links.

## Main Features

- **Single-page portfolio layout** with Home, About, Experience, Projects, and Contact sections.
- **Responsive React components** for the header, hero section, project cards, project detail pages, and contact form.
- **Project case studies** for my portfolio website, ad auction dashboard, TCP network storage system, and JavaFX Tetrecs game.
- **Screenshot galleries** with a full-screen image viewer for project images.
- **Downloadable CV** stored in the `public` folder.
- **EmailJS contact form** so visitors can send messages directly from the site.
- **Vite development workflow** for fast local development and production builds.

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- EmailJS
- ESLint

## Getting Started

### Prerequisites

Install Node.js and npm before running the project.

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print a local URL in the terminal, usually:

```txt
http://localhost:5173/
```

Open that URL in your browser to use the portfolio locally.

## How To Use The Website

When the site is running, visitors can:

1. Use the top navigation bar to jump between sections.
2. Click **Download CV** or **CV** to open my resume PDF.
3. Scroll to **Projects** and click a project card to open its case study page.
4. Click project screenshots to open the image viewer.
5. Use the back button on a project detail page to return to the main portfolio.
6. Use the contact form to send me a message, or use the LinkedIn, GitHub, and email links in the contact section.

## Contact Form Setup

The contact form uses EmailJS. To enable message sending, create a `.env.local` file in the project root with these values:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

An example is provided in `.env.example`.

Use `EMAILJS_TEMPLATE.md` as a guide when creating the EmailJS template. The website sends these template variables:

- `from_name`
- `from_email`
- `subject`
- `message`
- `to_email`

If the EmailJS values are missing, the site will still run, but the contact form will show an error when someone tries to send a message.

## Available Scripts

```bash
npm run dev
```

Starts the local Vite development server.

```bash
npm run build
```

Builds the production version of the site into the `dist` folder.

```bash
npm run preview
```

Serves the production build locally so you can preview it before deployment.

```bash
npm run lint
```

Runs ESLint across the project.

## Project Structure

```txt
public/
  SoftwareEngResume.pdf        My resume, available through the website
  project-images/              Screenshots used by the project case studies
src/
  assets/                      Images and icons imported by React components
  components/                  Portfolio sections and reusable UI components
  App.jsx                      Main application layout and project page routing state
  main.jsx                     React entry point
  index.css                    Global styling
package.json                   Dependencies and npm scripts
vite.config.js                 Vite configuration
```

## Deployment

To deploy the website, build the project first:

```bash
npm run build
```

Then deploy the generated `dist` folder to a static hosting provider such as Netlify, Vercel, GitHub Pages, AWS S3/CloudFront, or another web host that supports static sites.
