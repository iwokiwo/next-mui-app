import { createTheme } from "@mui/material/styles";
import { Plus_Jakarta_Sans } from "next/font/google";

export const plus = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const baselightTheme = createTheme({
  direction: "ltr",
  palette: {
    primary: {
      main: "#5D87FF",
      light: "#ECF2FF",
      dark: "#4570EA",
    },
    secondary: {
      main: "#49BEFF",
      light: "#E8F7FF",
      dark: "#23afdb",
    },
    success: {
      main: "#13DEB9",
      light: "#E6FFFA",
      dark: "#02b3a9",
      contrastText: "#ffffff",
    },
    info: {
      main: "#539BFF",
      light: "#EBF3FE",
      dark: "#1682d4",
      contrastText: "#ffffff",
    },
    error: {
      main: "#FA896B",
      light: "#FDEDE8",
      dark: "#f3704d",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#FFAE1F",
      light: "#FEF5E5",
      dark: "#ae8e59",
      contrastText: "#ffffff",
    },
    grey: {
      100: "#F2F6FA",
      200: "#EAEFF4",
      300: "#DFE5EF",
      400: "#7C8FAC",
      500: "#5A6A85",
      600: "#2A3547",
    },
    text: {
      primary: "#2A3547",
      secondary: "#5A6A85",
    },
    action: {
      disabledBackground: "rgba(73,82,88,0.12)",
      hoverOpacity: 0.02,
      hover: "#f6f9fc",
    },
   // divider: "#e5eaef",
  },
  typography: {
    fontFamily: plus.style.fontFamily,
    h1: {
      fontWeight: 600,
      fontSize: "2.25rem",
      lineHeight: "2.75rem",
      fontFamily: plus.style.fontFamily,
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
      fontFamily: plus.style.fontFamily,
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: "1.75rem",
      fontFamily: plus.style.fontFamily,
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.3125rem",
      lineHeight: "1.6rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: "1.6rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "1.2rem",
    },
    button: {
      textTransform: "capitalize",
      fontWeight: 400,
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.334rem",
    },
    body2: {
      fontSize: "0.75rem",
      letterSpacing: "0rem",
      fontWeight: 400,
      lineHeight: "1rem",
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiPaper-elevation9, .MuiPopover-root .MuiPaper-elevation": {
          boxShadow:
            "rgb(145 158 171 / 60%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px !important",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
        },
      },
    },
  },
});

export const colors = {
  primary: {
    main: 'rgba(255, 95, 0, 1)',
    o75: 'rgba(255, 95, 0, 0.75)',
    o50: 'rgba(255, 95, 0, 0.50)',
    o25: 'rgba(255, 95, 0, 0.25)'
  },
  secondary: {
    main: 'rgba(255, 95, 0, 1)',
    o75: 'rgba(255, 95, 0, 0.75)',
    o50: 'rgba(255, 95, 0, 0.50)',
    o25: 'rgba(255, 95, 0, 0.25)'
  },
  tertiary: {
    main: 'rgba(112, 212, 75, 1)',
    o75: 'rgba(112, 212, 75, 0.75)',
    o50: 'rgba(112, 212, 75, 0.50)',
    o25: 'rgba(112, 212, 75, 0.25)'
  },
  text: {
    primary: 'rgb(234,236,238,1)',
    o75: 'rgba(234,236,238,0.75)',
    o50: 'rgba(234,236,238,0.50)',
    o25: 'rgba(234,236,238, 0.25)'
  },
  error: {
    primary: 'rgba(177, 32, 40, 1)',
    o75: 'rgba(177, 32, 40, 0.75)',
    o50: 'rgba(177, 32, 40, 0.50)',
    o25: 'rgba(177, 32, 40, 0.25)'
  },
  warning: {
    primary: 'rgba(255, 199, 0, 1)',
    o75: 'rgba(255, 199, 0, 0.75)',
    o50: 'rgba(255, 199, 0, 0.50)',
    o25: 'rgba(255, 199, 0, 0.25)'
  },
  info: {
    primary: 'rgba(42, 94, 157, 1)',
    o75: 'rgba(42, 94, 157, 0.75)',
    o50: 'rgba(42, 94, 157, 0.50)',
    o25: 'rgba(42, 94, 157, 0.25)'
  },
  success: {
    primary: 'rgba(5, 150, 105, 1)',
    o75: 'rgba(5, 150, 105, 0.75)',
    o50: 'rgba(5, 150, 105, 0.50)',
    o25: 'rgba(5, 150, 105, 0.25)'
  },
  border: {
    primary: '#EAE7F0'
  },
  body: {
    primary: 'white',
    secondary: '#F8F8F8'
  },
  magnolia: 'rgba(234, 231, 240, 1)',
  cultured: 'rgba(248, 248, 248, 1)'
}


export { baselightTheme };
