import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: 'icomoon';
    src:  url('/fonts/icomoon.eot');
    src:  url('/fonts/icomoon.eot#iefix') format('embedded-opentype'),

      url('/fonts/icomoon.woff') format('woff'),
      url('/fonts/icomoon.svg#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-facebook:before {
    content: "\ea90";
  }
  .icon-instagram:before {
    content: "\ea92";
  }
  .icon-twitter:before {
    content: "\ea96";
  }
  .icon-youtube:before {
    content: "\ea9d";
  }

`;
