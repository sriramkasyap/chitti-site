import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @font-face {
    font-family: 'American Typewriter';
    src: url('/fonts/AmericanTypewriter-Bold.eot');
    src: url('/fonts/AmericanTypewriter-Bold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/AmericanTypewriter-Bold.woff2') format('woff2'),
        url('/fonts/AmericanTypewriter-Bold.woff') format('woff'),
        url('/fonts/AmericanTypewriter-Bold.svg#AmericanTypewriter-Bold') format('svg');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'American Typewriter';
    src: url('/fonts/AmericanTypewriter-Light.eot');
    src: url('/fonts/AmericanTypewriter-Light.eot?#iefix') format('embedded-opentype'),
        url('/fonts/AmericanTypewriter-Light.woff2') format('woff2'),
        url('/fonts/AmericanTypewriter-Light.woff') format('woff'),
        url('/fonts/AmericanTypewriter-Light.svg#AmericanTypewriter-Light') format('svg');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'American Typewriter';
    src: url('/fonts/AmericanTypewriter.eot');
    src: url('/fonts/AmericanTypewriter.eot?#iefix') format('embedded-opentype'),
        url('/fonts/AmericanTypewriter.woff2') format('woff2'),
        url('/fonts/AmericanTypewriter.woff') format('woff'),
        url('/fonts/AmericanTypewriter.svg#AmericanTypewriter') format('svg');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}
`;
