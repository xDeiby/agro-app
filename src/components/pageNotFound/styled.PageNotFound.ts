import styled from "styled-components";
import "../../../src/index.css";

interface IDiv {
    backgroundImage?: string;
    height?: string;
    backgroundPosition?: string;
    textAlign?: string;
    fontFamily?: string;
}
interface ISection {
    padding?: string;
    background?: string;
    fontFamily?: string;
}

interface IImage {
    height?: string;
    width?: string;
    src?: string;
}
const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
};
const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
};

export const StyledSection = styled.section<ISection>`
    padding: 40px 0;
    background: #fff;
`;
export const StyledImage = styled.img<IImage>`
    src: ${(pr) => (pr.src ? pr.src : "")};
    height: ${(pr) => (pr.height ? pr.height : "450px")};
    width: ${(pr) => (pr.width ? pr.width : "450px")};
    @media ${device.mobileS} {
        max-width: 300px;
    }
    @media ${device.mobileM} {
        max-width: 400px;
    }
    @media ${device.mobileL} {
        max-width: 500px;
    }
    @media ${device.tablet} {
        max-width: 500px;
    }
    @media ${device.laptop} {
        max-width: 800px;
    }
    @media ${device.laptopL} {
        max-width: 1000px;
    }
    @media ${device.desktop} {
        max-width: 1400px;
    }
`;

export const StyledDiv = styled.div<IDiv>`
    background-image: ${(pr) => (pr.backgroundImage ? pr.backgroundImage : "")};
    height: ${(pr) => (pr.height ? pr.height : "")};
    background-position: ${(pr) =>
        pr.backgroundPosition ? pr.backgroundPosition : ""};
    text-align: ${(pr) => (pr.textAlign ? pr.textAlign : "")};
    font-family: ${(pr) => (pr.fontFamily ? pr.fontFamily : "")};
    margin: auto;

    @media ${device.mobileS} {
        max-width: 500px;
    }
    @media ${device.mobileM} {
        max-width: 500px;
    }
    @media ${device.mobileL} {
        max-width: 500px;
    }
    @media ${device.tablet} {
        max-width: 500px;
    }
    @media ${device.laptop} {
        max-width: 800px;
    }
    @media ${device.laptopL} {
        max-width: 1000px;
    }
    @media ${device.desktop} {
        max-width: 1400px;
    }

    h1 {
        font-size: 60px;
        text-align: center;
        font-family: "Arvo", serif;
    }
    h2 {
        font-size: 30px;
        font-family: "Arvo", serif;
    }
    p {
        color: black;
        font-family: "Arvo", serif;
        font-size: 20px;
        text-align: center;
    }
`;
