import React from "react";
import { TypeAlert, StyledAlert } from "./styled.Alerts";
import { CheckCircle } from "@styled-icons/boxicons-regular/CheckCircle";
import { CancelCircle } from "@styled-icons/icomoon/CancelCircle";
import { Warning } from "@styled-icons/icomoon/Warning";
export interface IPropsAlert {
    typeAlert: TypeAlert;
    border?: string;
    backgroundColor?: string;
    boxShadow?: string;
    color?: string;
    textShadow?: string;
    transition?: string;
    cursor?: string;
    width?: string;
    heigth?: string;
    padding?: string;
    fontSize?: string;
    children?: React.ReactNode;
}

const styloIcon = {
    marginRight: 30,
};

const Alert: React.FC<IPropsAlert> = (props) => {
    const { children } = props;
    switch (props.typeAlert) {
        case "succesful":
            return (
                <StyledAlert {...props}>
                    <CheckCircle size="35px" style={styloIcon} />
                    {children}
                </StyledAlert>
            );

        case "error":
            return (
                <StyledAlert {...props}>
                    <CancelCircle size="30px" style={styloIcon} />
                    {children}
                </StyledAlert>
            );
        case "warning":
            return (
                <StyledAlert {...props}>
                    <Warning size="30px" style={styloIcon} />
                    {children}
                </StyledAlert>
            );

        default:
            return <StyledAlert {...props}>{children}</StyledAlert>;
    }
};

export default Alert;
