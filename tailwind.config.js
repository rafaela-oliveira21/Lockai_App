/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        primary: "#000d4d",   
        secondary: "#0066FF", 
        terceary: "#001a66",
        background: "#000740",
      },
    },
  },
  plugins: [],
}