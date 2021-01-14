import styled from "styled-components";

interface IContainer {
    display?: string;
    flexDirection?: string;
    padding?: string;
    position?: string;
}

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

interface IStyledLabel {
    color?: string;
    fontWeight?: string;
    opacity?: string;
    order?: string;
    paddingLeft?: string;
    pointerEvents?: string;
    textShadow?: string;
    textTransform?: string;
    transformOrigin?: string;
    transform?: string;
    transition?: string;
}

export const StyledContainerLabel = styled.div<IContainer>`
    display: ${(pr) => (pr.display ? pr.display : "flex")};
    flex-direction: ${(pr) => (pr.flexDirection ? pr.flexDirection : "column")};
    padding: ${(pr) => (pr.padding ? pr.padding : "25")}px;
    position: ${(pr) => (pr.position ? pr.position : "relative")};
`;

export const StyledLabel = styled.label<IStyledLabel>`
    color: ${(pr) => (pr.color ? pr.color : "#999")};
    font-weight: ${(pr) => (pr.fontWeight ? pr.fontWeight : "500")};
    opacity: ${(pr) => (pr.opacity ? pr.opacity : "0.5")};
    order: ${(pr) => (pr.order ? pr.order : "1")};
    padding-left: ${(pr) => (pr.paddingLeft ? pr.paddingLeft : "2")}px;
    text-shadow: ${(pr) => (pr.textShadow ? pr.textShadow : "1px 1px #999")};
    transform-origin: ${(pr) =>
        pr.transformOrigin ? pr.transformOrigin : "left top"};
    transition: ${(pr) => (pr.transition ? pr.transition : "400ms ease all")};
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

    &:focus + ${StyledLabel} {
        color: #32b24d;
        opacity: 1;
        transform: scale(0.8) translate3d(0, 5px, 0);
    }
`;
