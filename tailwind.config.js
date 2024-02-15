import {colors} from './src/styles/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontFamily: {
        heading: "Roboto_700Bold",
        subtitle: "Roboto_500Medium",
        body: "Roboto_400Regular"
      }
    },
  },
  plugins: [],
}