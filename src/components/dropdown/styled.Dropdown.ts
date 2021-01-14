import styled from "styled-components";

interface IStyledInput {
    borderRadius?: string;
    display?: string;
    fontSize?: string;
    lineHeight?: string;
    textShadow?: string;
    border?: string;
    borderTop?: string;
    borderBottom?: string;
    color?: string;
    flex?: string;
    order?: string;
    textTransform?: string;
    padding?: string;
}
export const StyledList = styled.datalist`
    color: #000;
`;
export const StyledInput = styled.input<IStyledInput>`
    border-radius: ${(pr) => (pr.borderRadius ? pr.borderRadius : "0")};
    display: ${(pr) => (pr.display ? pr.display : "flex")};
    font-size: ${(pr) => (pr.fontSize ? pr.fontSize : "100%")}px;
    line-height: ${(pr) => (pr.lineHeight ? pr.lineHeight : "25px")};
    text-shadow: ${(pr) => (pr.textShadow ? pr.textShadow : "none")};
    padding: ${(pr) => (pr.padding ? pr.padding : "0.5")}px;
    border: ${(pr) => (pr.border ? pr.border : "0")};
    border-bottom: ${(pr) =>
        pr.borderBottom ? pr.borderBottom : "1px solid rgba(0, 0, 0, 0.5)"};
    color: ${(pr) => (pr.color ? pr.color : "black")};
    flex: ${(pr) => (pr.flex ? pr.flex : "1 1 auto")};
    order: ${(pr) => (pr.order ? pr.order : "2")};
    text-transform: ${(pr) =>
        pr.textTransform ? pr.textTransform : "capitalize"};
    &:focus {
        outline: 0;
    }

    &:not(:focus) {
        opacity: 0.75;
        border-top: transparent;
        border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    }
`;
