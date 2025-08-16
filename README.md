# ACPL Construction Company Website

A modern, professional construction company website featuring a stunning hero section with high-quality animations that represent construction excellence.

## Features

- **Modern Hero Section**: Animated construction elements including cranes, buildings, and blueprints
- **Responsive Design**: Mobile-first approach with smooth animations
- **Professional Color Palette**: Deep blues, steel grays, and construction yellow
- **Smooth Animations**: Built with Framer Motion for fluid, engaging user experience
- **Fixed Navigation**: Sleek navbar with smooth scrolling and mobile menu
- **Accessibility**: Focus states, semantic HTML, and keyboard navigation support

## Technology Stack

- React 18.2.0
- Styled Components for styling
- Framer Motion for animations
- Modern CSS with CSS-in-JS
- Responsive design with CSS Grid and Flexbox

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ACPL
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Fixed navigation component
│   └── HeroSection.js     # Main hero section with animations
├── App.js                 # Main application component
├── index.js               # Application entry point
└── index.css              # Global styles and CSS reset
```

## Design Features

### Color Palette
- **Primary Blue**: #0f172a (Deep Navy)
- **Secondary Blue**: #1e293b (Steel Blue)
- **Accent Yellow**: #fbbf24 (Construction Yellow)
- **Neutral Gray**: #64748b (Steel Gray)
- **Text Colors**: #ffffff (White), #cbd5e1 (Light Gray)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive sizing** using clamp() for optimal readability

### Animations
- **Entrance animations** with staggered timing
- **Hover effects** on interactive elements
- **Floating particles** for dynamic background
- **Smooth transitions** between states

## Customization

### Colors
Modify the color variables in the styled components to match your brand colors.

### Content
Update the hero section content in `HeroSection.js`:
- Main headline
- Tagline
- Call-to-action button text

### Navigation
Modify the navigation items in `Navbar.js` to match your site structure.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized animations using Framer Motion
- Efficient CSS-in-JS with Styled Components
- Responsive images and lazy loading ready
- Minimal bundle size

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact the development team.