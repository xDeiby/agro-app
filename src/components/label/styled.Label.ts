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
    borderBottom?: string;
    color?: string;
    flex?: string;
    order?: string;
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
    font-weight: ${(pr) => (pr.fontWeight ? pr.fontWeight : "normal")};
    opacity: ${(pr) => (pr.opacity ? pr.opacity : "0.75")};
    order: ${(pr) => (pr.order ? pr.order : "1")};
    padding-left: ${(pr) => (pr.paddingLeft ? pr.paddingLeft : "2")}px;
    pointer-events: ${(pr) => (pr.pointerEvents ? pr.pointerEvents : "none")};
    text-shadow: ${(pr) => (pr.textShadow ? pr.textShadow : "none")};
    text-transform: ${(pr) =>
        pr.textTransform ? pr.textTransform : "capitalize"};
    transform-origin: ${(pr) =>
        pr.transformOrigin ? pr.transformOrigin : "left top"};
    transform: ${(pr) =>
        pr.transform ? pr.transform : "scale(1) translate3d(0, 22px, 0);"};
    transition: ${(pr) => (pr.transition ? pr.transition : "200ms ease all")};
`;

export const StyledInput = styled.input<IStyledInput>`
    border-radius: ${(pr) => (pr.borderRadius ? pr.borderRadius : "0")};
    display: ${(pr) => (pr.display ? pr.display : "flex")};
    font-size: ${(pr) => (pr.fontSize ? pr.fontSize : "100%")}px;
    line-height: ${(pr) => (pr.lineHeight ? pr.lineHeight : "25px")};
    text-shadow: ${(pr) => (pr.textShadow ? pr.textShadow : "none")};
    border: ${(pr) => (pr.border ? pr.border : "0")};
    border-bottom: ${(pr) =>
        pr.borderBottom ? pr.borderBottom : "1px solid rgba(0, 0, 0, 0.15)"};
    color: ${(pr) => (pr.color ? pr.color : "#3949ab")};
    flex: ${(pr) => (pr.flex ? pr.flex : "1 1 auto")};
    order: ${(pr) => (pr.order ? pr.order : "2")};
    &:focus {
        outline: 0;
    }

    &:not(:focus) {
        color: transparent;
    }

    &:focus + ${StyledLabel} {
        color: #3949ab;
        opacity: 1;
        transform: scale(0.8) translate3d(0, 5px, 0);
    }
`;
