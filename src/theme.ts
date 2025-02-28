import { createTheme } from "@mui/material";

export const colors = {
  black: "#000000",
  white: "#FFFFFF",
  grey: "#e0e0e0",

  green100: "#DDFFF7",
  green200: "#9DF7E5",
  green300: "#218380",

  yellow100: "#EAF2D7",
  yellow200: "#F4E4BA",
  yellow300: "#FBB13C",

  salmon100: "#E5A9A9",
  salmon200: "#FFA69E",
  salmon300: "#EE9293",

  pink100: "#EFCFE3",
  pink200: "#EA9AB2",
  pink300: "#E27396",
  pink400: "#D81159",

  purple100: "#D66BA0",
  purple200: "#AF4D98",
  purple300: "#8F2D56",
  purple400: "#861657",
};

export const theme = createTheme({
  palette: {
    common: {
      ...colors,
      black: colors.black,
      white: colors.white,
    },
    grey: {
      50: colors.grey,
    },
    primary: {
      main: colors.green300,
      light: colors.green200,
      dark: colors.green100,
    },
    secondary: {
      main: colors.purple300,
      light: colors.purple200,
      dark: colors.purple100,
    },
    error: {
      main: colors.salmon300,
      light: colors.salmon200,
      dark: colors.salmon100,
    },
    warning: {
      main: colors.yellow300,
      light: colors.yellow200,
      dark: colors.yellow100,
    },
    info: {
      main: colors.pink300,
      light: colors.pink200,
      dark: colors.pink100,
    },
    success: {
      main: colors.green300,
      light: colors.green200,
      dark: colors.green100,
    },
  },
});
