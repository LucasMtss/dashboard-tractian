import { createGlobalStyle } from 'styled-components';
import { colors } from 'styles/colors';

export const GlobalStyles = createGlobalStyle`
    :root {
        --green: ${colors.green};
        --red: ${colors.red};
        --yellow: ${colors.yellow};
        --black: ${colors.black};
        --white: ${colors.white};
        --light-gray: ${colors.lightGray};
        --gray: ${colors.gray};
        --middle-gray: ${colors.middleGray};
        --dark-gray: ${colors.darkGray};
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        color: var(--graphite);
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        -webkit-font-smoothing: antialised;
        background-color: #1E1D1D;
    }

    body, input, textarea, button, span, h1 {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    * {
    scrollbar-width: thin;
    scrollbar-color:  var(--dark-gray) var(--white);
    }
      /* Works on Chrome, Edge, and Safari */
    ::-webkit-scrollbar {
      width: 0.3125rem;
      height: 0.6125rem;
    }

    ::-webkit-scrollbar-track {
      background: var(--middle-gray);
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--light-gray);
      border-radius: 1.25rem;
    }
`;
