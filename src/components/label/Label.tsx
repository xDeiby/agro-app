import React from "react";
import { StyledLabel, StyledInput, StyledContainerLabel } from "./styled.Label";

interface IPropsContainerLabel {
    display?: string;
    flexDirection?: string;
    padding?: string;
    position?: string;
}

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
    children?: React.ReactNode;
}

export type IFloatingLabel = IPropsLabel & IPropsInput & IPropsContainerLabel;

const Label: React.FC<IFloatingLabel> = (props) => {
    const { children } = props;

    return (
        <StyledContainerLabel>
            <StyledInput />
            <StyledLabel>{children}</StyledLabel>
        </StyledContainerLabel>
    );
};

export default Label;
