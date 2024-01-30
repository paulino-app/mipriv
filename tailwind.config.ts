import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
      },
      colors: {
        'priv-blue': '#4F6EDF',
        'priv-green': '#25B79F',
        'priv-red': '#FF005C',
        'priv-yellow': '#F2B951',
        'priv-purlple': '#8E91F4',
        'priv-base': '#191827',
        'priv-container': '#212034',
        'priv-container-dark': '#191827',
        'priv-container-light': '#232236',
        'priv-gray': '#AAAFBE',
        'priv-dark-gray': '#2F2D47'
      }
    },
  },
  plugins: [],
}
export default config
