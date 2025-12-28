# KhurjaX - Khurja ka Digital Hub

Welcome to KhurjaX, the digital platform connecting businesses, creators, gamers, and job seekers in Khurja, Uttar Pradesh.

## Overview

KhurjaX is a comprehensive local directory and community platform designed specifically for Khurja. The platform serves multiple purposes:

- **Business Directory**: Connect with local businesses across various categories
- **Creator Hub**: Showcase and discover local content creators
- **Gaming Community**: Connect with gamers and find gaming opportunities
- **Job Board**: Find employment opportunities in the local area
- **Khurja Special**: Highlight the famous pottery and ceramic industry of Khurja

## Features

### Business Directory
- Browse businesses by category (Kirana, Medical, Electronics, etc.)
- Contact businesses directly via WhatsApp
- Filter by business type

### Creator Hub
- Discover local Instagram creators, YouTubers, and gaming content creators
- View follower counts and connect with creators
- Filter by creator type

### Gaming Community
- Connect with local gamers
- Find upcoming tournaments
- Locate gaming cafes in the area
- Filter by game type (BGMI, Free Fire, COD, PC Games)

### Job Board
- Find local job opportunities
- Filter by job type (Factory, Office, Part-time, Helper)
- Direct contact with employers

### Khurja Special
- Explore pottery and ceramic shops
- Find ceramic factories and wholesale dealers
- Discover job opportunities in the ceramic industry

## Pages

- `index.html` - Home page with hero section and category overview
- `businesses.html` - Business directory with filtering options
- `creators.html` - Creator showcase with filtering options
- `gaming.html` - Gaming community section
- `jobs.html` - Job listings with filtering options
- `khurja-special.html` - Special section for Khurja's pottery and ceramics
- `contact.html` - Contact page with form and information
- `css/style.css` - Stylesheet for the entire site
- `js/data.js` - JavaScript data and functionality
- `README.md` - This documentation file

## Technology Stack

- HTML5
- CSS3
- JavaScript (ES6)
- Responsive Design
- Mobile-First Approach

## Responsive Design

The website is fully responsive and works on all devices from mobile phones to desktop computers.

## How to Use

1. Clone or download this repository
2. Open `index.html` in a web browser
3. Navigate through the different sections using the navigation menu
4. Use the filter options on each page to narrow down your search

## Running a local server (recommended)

Modern browsers block `fetch()` when pages are opened via the `file://` protocol. To ensure the dynamic loader works (so edits to pages like `gaming.html` appear inside `index2.html`), serve the site over HTTP from your machine.

PowerShell (Windows) — from the project folder (`d:\edit`):

```powershell
python -m http.server 8000
# Then open http://localhost:8000/index2.html
```

If you don't have Python installed, you can use Node.js (if available):

```powershell
npx serve -s . -l 8000
# Then open http://localhost:8000/index2.html
```

Both commands start a simple static server on port 8000. After starting the server, open the URL in your browser — the loader will be able to fetch updated pages and you'll see live changes.

## Contact

For more information about KhurjaX, contact us via the contact page on the website.

---

*KhurjaX - Connecting the community of Khurja*