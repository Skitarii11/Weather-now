import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    body {
        background-color: #DCE5FF;
        color: hsl(183, 100%, 15%);
        font-size: 18px;
        font-family: 'Space Mono', monospace;
        margin:0;
        padding:0;
    }

    * {
        box-sizing:border-box;
    }
`