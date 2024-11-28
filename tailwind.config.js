/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "light": {
          "primary": "#415F91",
          "surfaceTint": "#415F91",
          "onPrimary": "#FFFFFF",
          "primaryContainer": "#D6E3FF",
          "onPrimaryContainer": "#001B3E",
          "secondary": "#565F71",
          "onSecondary": "#FFFFFF",
          "secondaryContainer": "#DAE2F9",
          "onSecondaryContainer": "#131C2B",
          "tertiary": "#705575",
          "onTertiary": "#FFFFFF",
          "tertiaryContainer": "#FAD8FD",
          "onTertiaryContainer": "#28132E",
          "error": "#BA1A1A",
          "onError": "#FFFFFF",
          "errorContainer": "#FFDAD6",
          "onErrorContainer": "#410002",
          "background": "#F9F9FF",
          "onBackground": "#191C20",
          "surface": "#F9F9FF",
          "onSurface": "#191C20",
          "surfaceVariant": "#E0E2EC",
          "onSurfaceVariant": "#44474E",
          "outline": "#74777F",
          "outlineVariant": "#C4C6D0",
          "shadow": "#000000",
          "scrim": "#000000",
          "inverseSurface": "#2E3036",
          "inverseOnSurface": "#F0F0F7",
          "inversePrimary": "#AAC7FF",
          "primaryFixed": "#D6E3FF",
          "onPrimaryFixed": "#001B3E",
          "primaryFixedDim": "#AAC7FF",
          "onPrimaryFixedVariant": "#284777",
          "secondaryFixed": "#DAE2F9",
          "onSecondaryFixed": "#131C2B",
          "secondaryFixedDim": "#BEC6DC",
          "onSecondaryFixedVariant": "#3E4759",
          "tertiaryFixed": "#FAD8FD",
          "onTertiaryFixed": "#28132E",
          "tertiaryFixedDim": "#DDBCE0",
          "onTertiaryFixedVariant": "#573E5C",
          "surfaceDim": "#D9D9E0",
          "surfaceBright": "#F9F9FF",
          "surfaceContainerLowest": "#FFFFFF",
          "surfaceContainerLow": "#F3F3FA",
          "surfaceContainer": "#EDEDF4",
          "surfaceContainerHigh": "#E7E8EE",
          "surfaceContainerHighest": "#E2E2E9"
      },
      },
      screens: {
        'sm': '768px'
      },
      keyframes: {
        pulseAnimation: {
          '0%':  {
              transform: 'scale(.5, .5)',
              opacity: '.5'
          },
          '100%':  {
            transform: 'scale(2.5, 2.5)',
            opacity: '0'
          }
        }
      },
      // animation: {
      //   buttonPulseAnimate: 'pulseAnimation 4s ease-in-out infinite'
      // }
    },
  },
  plugins: [],
  "tailwindCSS.includeLanguages": {
    "javascript": "javascript",
    "html": "HTML"
  },
  "editor.quickSuggestions": {
    "strings": true
  }
}

