import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *, :after, :before {
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-family: ${({ theme }) => theme.fonts.text};
        color: ${({ theme }) => theme.colors.black};
        overflow-x: hidden;
        font-size: 14px;
        background-image: ${({ theme }) => `radial-gradient(circle at 0 0, white, ${theme.colors.light})`};
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        @media screen and (min-width: 768px) {
            font-size: 16px;
        }
        @media screen and (min-width: 1440px) {
            font-size: 18px;
        }
    }
    p,
    li,
    a {
        font-family: inherit;
        font-size: inherit;
        line-height: 1.5;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .heading-text {
        font-family: ${({ theme }) => theme.fonts.heading};
        font-weight: ${({ theme }) => theme.fontWeights.regular};;
    }
    a {
        text-decoration: none;
        color:  ${({ theme }) => theme.colors.black};
    }
    img {
        display: block;
        max-width: 100%;
        max-height: 100%;
        user-select: none;
        height: auto;
        width: auto;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
    ul {
        margin: 0;
        padding: 0;
        &.show-bullets {
            padding-left: 15px;
            li {
                list-style-type: disc;
            }
        }
        li {
            list-style-type: none;
        }
    }
    input,
    textarea,
    select {
        outline: none;
        background: none;
        border: 0px;
        color: ${({ theme }) => theme.colors.black};
        box-shadow: none;
        margin: 0;
        border-radius: 0;
        -webkit-appearance: textfield;
        font-family: ${({ theme }) => theme.fonts.text};
        &:-moz-placeholder,
        &:-moz-placeholder,
        &::-ms-input-placeholder {
            font-family: ${({ theme }) => theme.fonts.text};
        }
    }
    
    a,button {
        cursor: pointer;
    }

    @keyframes mainMenu {
        from {
            height: 0;
        }
        to {
            height: 100%;
        }
    }
    @keyframes slideIn {
        0% {
            width: 0;

        }
        100% {
            width: 100%;
        }
    }

    #nprogress {
        .bar {
            background: ${({ theme }) => theme.colors.primary};
            height: 4px;
        }
        .peg {
            box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary}, 0 0 5px ${({ theme }) => theme.colors.primary};
        }
        .spinner {
            display: none;
        }
    }
`;
