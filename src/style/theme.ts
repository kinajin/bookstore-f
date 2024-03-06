export type ThemeName = "light" | "dark";
type colorkeys = "primary" | "background" | "secondary";

export interface Theme {
  name: ThemeName;
  color: {
    [key in colorkeys]: string;
  };
}

export const light: Theme = {
  name: "light",
  color: {
    primary: "brown",
    background: "#f2f2f2", // light grey
    secondary: "#03dac6",
  },
};

export const dark: Theme = {
  name: "dark",
  color: {
    primary: "#bb86fc",
    background: "#121212", // dark grey
    secondary: "#03dac6",
  },
};
