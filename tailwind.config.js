/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            'black': '#2d2d2d',
            'blue': '#004aad',
            'light-grey': '#9E9E9E',
            'lighter-grey': '#F2F4FB',
            'yellow-primer': '#ffd801',
            'yellow-secondary': '#f7b603'
         }
      },
   },
   plugins: [
      require('daisyui'),
   ],
   daisyui: {
      themes: []
   }
}

