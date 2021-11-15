import { createTheme } from '@mui/material';
import { green, grey, red } from '@mui/material/colors';
import React from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[500]
    },
    secondary: {
      main: green[500]
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    fontSize: 14,
    main: {
      color: 'red',
    },
    error: {
      color: 'red',
      fontWeight: 'bold',
    }
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: grey[500]
        }
      }
    }
  }
});

export default theme;

declare module '@mui/material/styles' {
  interface TypographyVariants {
    main: React.CSSProperties;
    error: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    main?: React.CSSProperties;
    error?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    main: true;
    error: true;
    h3: true;
  }
}
