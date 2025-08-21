// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,ts,astro}'],
  theme: { extend: {} },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
};
