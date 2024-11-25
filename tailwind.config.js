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
         }
      },
   },
   plugins: [],
}

