# Basti Ki Pathshala Foundation

A clean, modern, responsive one-page website for **Basti Ki Pathshala Foundation**, a non-profit dedicated to empowering underprivileged children through quality education and life-skills development.

## Features

- Modern, mobile-first responsive design
- Semantic HTML5 with clear heading hierarchy
- Sticky navbar with scroll-aware styling and active-link highlighting
- Scroll-reveal animations
- Program cards, impact statistics, and volunteer contact sections
- Client-side validated volunteer application form (demo submission)
- Newsletter subscription form
- Footer with social links, quick links, and newsletter signup

## Tech Stack

- Vanilla HTML5, CSS3, JavaScript (no build step, no `node_modules`)
- [Bootstrap 5.3](https://getbootstrap.com) via CDN
- [Font Awesome 6](https://fontawesome.com) via CDN
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via Google Fonts

## Getting Started

Simply open `index.html` in a browser, or serve the folder statically:

```bash
# with Python
python -m http.server 8080

# with Node
npx serve .
```

## Project Structure

```
.
├── index.html          # Single-page site
├── css/
│   └── style.css       # Design system & styles
├── js/
│   └── script.js       # Nav, animations, form handling
└── logo.png            # Brand logo
```

## Notes

- The volunteer and newsletter forms are front-end demos — wire them to your backend or a form service to capture submissions.
- Replace the placeholder contact details (address, phone, email) with your organisation's real information if needed.

## Credits

Designed and developed by [@thesajidalam](https://github.com/thesajidalam)