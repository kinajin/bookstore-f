import { createGlobalStyle } from "styled-components";
import "sanitize.css";
import { ThemeName } from "./theme";

interface Props {
  themeName: ThemeName;
}

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
    }

    h1{
        margin: 0;
    }


    *{
        color: ${({ themeName }: Props) =>
          themeName === "light" ? "black" : "white"};
    }

`;
