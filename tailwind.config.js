module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    
    fontFamily: {
      primary: 'Playfair Display',
      signature:['Great Vibes'],
      body: 'Work Sans',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      content: {
        about: 'url("/src/assets/img/outline-text/about.svg")',
        portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
        services: 'url("/src/assets/img/outline-text/services.svg")',
        testimonials: 'url("/src/assets/img/outline-text/testimonials.svg")',
        contact: 'url("/src/assets/img/outline-text/contact.svg")',
      },
      colors: {
        primary: '#050402',
        secondary: '#1e293b',//'#64748b',/* '#0284c7', *//* '#1C1D24', */
        tertiary: '#131419',
        
        accent: {
          DEFAULT:'#1dabb8',/* #03fa6e', *//* '#ac6b34', */
          hover:  '#1dabb8',/* '#925a2b','#000000' */
        },
        
        paragraph: '#878e99',
      },
    },
  },
  plugins: [],
};
