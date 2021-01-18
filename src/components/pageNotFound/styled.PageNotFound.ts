import styled from "styled-components";

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

export const StyledSection = styled.section<ISection>`
    padding: 40px 0;
    background: #fff;
    column-count: 2;
`;

export const StyledDiv = styled.div<IDiv>`
    background-image: ${(pr) =>
        pr.backgroundImage ? pr.backgroundImage : "Logo"};
    height: ${(pr) => (pr.height ? pr.height : "")};
    background-position: ${(pr) =>
        pr.backgroundPosition ? pr.backgroundPosition : ""};
    text-align: ${(pr) => (pr.textAlign ? pr.textAlign : "")};
    font-family: ${(pr) => (pr.fontFamily ? pr.fontFamily : "")};
    margin-right: 300px;
    h1 {
        font-size: 40px;
        text-align: center right;
        margin-right: 30px;
    }
    h2 {
        font-size: 40px;
    }
    p {
        color: blue;
        font-family: "Brush Script MT";
        font-size: 30px;
    }
`;
