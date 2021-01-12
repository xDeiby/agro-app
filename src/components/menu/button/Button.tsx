import React, { MouseEventHandler } from "react";
import StyledButton, { TypeButton } from "./styled.Boton";

interface IPropertys {
    color?: string;
    typeButton: TypeButton;
    width?: string;
    fontSize?: string;
    paddingf?: string;
    backgroundColor?: string;
    className?: string;
    children?: React.ReactNode;
}
interface IMouseEvents {
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export type IButton = IPropertys & IMouseEvents;

const Boton: React.FC<IButton> = (props) => {
    const { children } = props;

    return <StyledButton {...props}>{children}</StyledButton>;
};

export default Boton;
