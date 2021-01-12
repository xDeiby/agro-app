//import StyledLabel from "./styled.Label";
import React from "react";
import { StyledLabel, StyledInput } from "./styled.Label";

interface IPropsInput {
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

interface IPropsLabel {
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

export type IFloatingLabel = IPropsInput & IPropsLabel;

const Label: React.FunctionComponent<IFloatingLabel> = (props) => {
    return <StyledLabel {...props}></StyledLabel>;
};

export default Label;
