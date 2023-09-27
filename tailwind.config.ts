import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

    },
    fontFamily: {
      'Ibarra': ['"Ibarra Real Nova"', 'serif']
    }

  },
  plugins: [],
} satisfies Config;
