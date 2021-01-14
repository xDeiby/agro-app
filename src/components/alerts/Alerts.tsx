import React from "react";
import { StyledSucces } from "./styled.Alerts";
interface IPropsAlert {
    border?: string;
    backgroundColor?: string;
    boxShadow?: string;
    color?: string;
    textShadow?: string;
    transition?: string;
    cursor?: string;
}

const Alert: React.FC<IPropsAlert> = (props) => {
    return <StyledSucces {...props}></StyledSucces>;
};

export default Alert;
