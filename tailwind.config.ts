import plugin from "tailwindcss/plugin";
import aspectRatio from '@tailwindcss/aspect-ratio';
import { dtBreakpoint, mbBreakpoint, tbBreakpoint } from "./src/constants";
import type { Config } from "tailwindcss";
import Colors from "./src/themes";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx,svg}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'custom-auto': 'auto auto auto auto', // Tạo class tùy chỉnh
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: Colors.Primary,
        silver: Colors.Silver,
        textColor: Colors.TextColor,
        textColor2: Colors.TextColor2,
        LightPrimaryHover: Colors.LightPrimaryHover,
        borderColor: Colors.BorderColor,
        TextGrey: Colors.TextGrey,
        DeepPink: Colors.DeepPink,
        CobaltBlue: Colors.CobaltBlue,
        glitter: Colors.glitter,
        blueberry: Colors.blueberry,
        brilliantAzure: Colors.brilliantAzure,
        honeyDew: Colors.honeyDew,
        forestGreen: Colors.forestGreen,
        BorderTealDeer: Colors.BorderTealDeer,
        aliceBlue: Colors.aliceBlue,
        antiFlashWhite: Colors.antiFlashWhite,
        antiFlashWhite2: Colors.antiFlashWhite2,
      },
      screens: {
        'mb': mbBreakpoint,
        'tb': tbBreakpoint,
        'dt': dtBreakpoint,
      },
      fontSize: {
        'ss': '0.6rem'
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    aspectRatio,
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.lightPrimaryHoverBG': {
          backgroundColor: Colors.LightPrimaryHover,
          cursor: 'pointer',
          borderRadius: '8px'
        },
        '.borderBottom': {
          borderBottomWidth: '1px',
          borderColor: Colors.BorderColor,
        },
        '.absoluteCenter': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        '.centeredAbsolute': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '.centeredFixed': {
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '.flexCol': {
          display: 'flex',
          flexDirection: 'column'
        },
        '.fixedFlex': {
          flexGrow: '0',
          flexShrink: '0',
        },
        '.gradient-text': {
          WebkitTextFillColor: "transparent",
          background: "linear-gradient(90deg, #7bcfff, #03f)",
          WebkitBackgroundClip: "text",
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
export default config;
