# Mohamed EL HADDATI - Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing my projects, skills, and experience as a full-stack developer.

## 🚀 Features

- **Smooth Animations**: Scroll-based reveal animations for engaging user experience
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Dark Theme**: Modern dark UI with blue accent colors
- **Interactive Elements**: Hover effects and smooth transitions throughout
- **Contact Form**: Integrated with EmailJS for direct communication
- **Fast Loading**: Optimized with Vite for lightning-fast performance

## 🛠️ Built With

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **EmailJS** - Email service for contact form
- **ESLint** - Code linting and formatting

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/MohamedElHaddati/react-portfolio.git
cd react-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 📧 Contact Form Setup

To use the contact form, you'll need to set up EmailJS:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the credentials in `src/components/sections/Contact.jsx`:
   - Service ID
   - Template ID
   - Public Key

## 📂 Project Structure

```
my-portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── sections/    # Page sections (Home, About, Projects, Contact)
│   │   ├── Navbar.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── LoadingScreen.jsx
│   │   └── RevealOnScroll.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Customization

### Update Personal Information

- Edit text content in `src/components/sections/`
- Update social links in `src/components/sections/Home.jsx`
- Modify skills in `src/components/sections/About.jsx`
- Add/remove projects in `src/components/sections/Projects.jsx`

### Theme Colors

Modify Tailwind classes throughout components to change the color scheme. Current theme uses:
- Primary: `blue-500` (#3b82f6)
- Secondary: `cyan-400` (#22d3ee)
- Background: `#0a0a0a`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

This project can be deployed on:
- **Netlify** (recommended)
- Vercel
- GitHub Pages
- Any static hosting service

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mohamed EL HADDATI**

- GitHub: [@MohamedElHaddati](https://github.com/MohamedElHaddati)
- LinkedIn: [Mohamed EL HADDATI](https://www.linkedin.com/in/elhaddati/)
- Email: mohamed.elhaddati@gmail.com

## 🙏 Acknowledgments

- Icons from [Heroicons](https://heroicons.com/) and custom SVGs
- Fonts from [Google Fonts](https://fonts.google.com/)
- Inspiration from modern portfolio designs

---

⭐ Star this repo if you like it!