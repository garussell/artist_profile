import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { max: '639px'},
      md: '767px',
      lg: '1023px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        bowlby: ["Bowlby One SC", "sans-serif"],
        viga: ["Viga", "sans-serif"],
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-55%)" },
        },
      },
      typography: (theme: (path: string) => string) => ({
        DEFAULT: {
          css: {
            'h1, h2, h3, h4, h5, h6, p, li, strong': {
              color: theme('colors.foreground'),
            },
            h1: {
              fontSize: theme('fontSize.8xl'),
            },
            h2: {
              fontSize: theme('fontSize.6xl'),
            },
            h3: {
              fontSize: theme('fontSize.4xl'),
            },
            h4: {
              fontSize: theme('fontSize.3xl'),
            },
            h5: {
              fontSize: theme('fontSize.2xl'),
            },
            h6: {
              fontSize: theme('fontSize.xl'),
            },
            p: {
              fontFamily: theme('fontFamily.viga'),
              fontWeight: theme('fontWeight.normal'),
            },
            li: {
              fontSize: theme('fontSize.2xl'),
            },
          },
        },
        fullwidth: {
          css: {
            maxWidth: 'none',
            width: '100%',
          },
        },
        sm: {
          css: {
            'h1': {
              fontSize: theme('fontSize.5xl'),
            },
            'h2': {
              fontSize: theme('fontSize.4xl'),
            },
            'h3': {
              fontSize: theme('fontSize.3xl'),
            },
          },
        },
        md: {
          css: {
            'h1': {
              fontSize: theme('fontSize.6xl'),
            },
            'h2': {
              fontSize: theme('fontSize.4xl'),
            },
          },
        },
        lg: {
          css: {
            'h1': {
              fontSize: theme('fontSize.8xl'),
            },
            'h2': {
              fontSize: theme('fontSize.6xl'),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
export default config;
