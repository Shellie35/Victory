import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        church: {
          navy:      '#1E3A5F',
          cream:     '#F7F5F0',
          gold:      '#C8A45D',
          gray:      '#6B6B6B',
          olive:     '#6E7F5B',
          navyLight: '#2E5480',
          goldLight: '#D9BC85',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans:  ['var(--font-inter)', 'sans-serif'],
        lora:  ['var(--font-lora)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
