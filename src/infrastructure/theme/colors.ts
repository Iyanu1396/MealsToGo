type ColorPalette = {
  primary?: string;
  secondary?: string;
  muted?: string;
  tertiary?: string;
  quaternary?: string;
  disabled?: string;
  error?: string;
  success?: string;
  inverse?: string;
};

type Colors = {
  brand: Pick<ColorPalette, "primary" | "secondary" | "muted">;
  ui: Required<Pick<ColorPalette, "primary" | "secondary" | "tertiary" | "quaternary" | "disabled" | "error" | "success">>;
  bg: Pick<ColorPalette, "primary" | "secondary">;
  text: Required<Pick<ColorPalette, "primary" | "secondary" | "disabled" | "inverse" | "error" | "success">>;
};

export const colors: Colors = {
  brand: {
    primary: "#2182BD",
    secondary: "#5282BD",
    muted: "#C6DAF7",
  },
  ui: {
    primary: "#262626",
    secondary: "#757575",
    tertiary: "#F1F1F1",
    quaternary: "#FFFFFF",
    disabled: "#DEDEDE",
    error: "#D0421B",
    success: "#138000",
  },
  bg: {
    primary: "#FFFFFF",
    secondary: "#F1F1F1",
  },
  text: {
    primary: "#262626",
    secondary: "#757575",
    disabled: "#9C9C9C",
    inverse: "#FFFFFF",
    error: "#D0421B",
    success: "#138000",
  },
};
