import * as React from "react";
import Button from "../components/button/Button";
import { LogIn } from "@styled-icons/boxicons-regular/LogIn";
import { CancelCircle } from "@styled-icons/icomoon/CancelCircle";
import { CheckCircle } from "@styled-icons/boxicons-regular/CheckCircle";
import { User } from "@styled-icons/fa-solid/User";
import { Add } from "@styled-icons/material-rounded/Add";
import { Delete } from "@styled-icons/material-outlined/Delete";

const styloIcon = {
    marginRight: 5,
};
const pete = () => {
    console.log("Probando");
};

const Test: React.FunctionComponent = () => {
    return (
        <>
            <Button typeButton="accept" onClick={pete}>
                <CheckCircle size="21px" style={styloIcon} />
                Aceptar
            </Button>
            <Button typeButton="deny">
                <CancelCircle size="19px" style={styloIcon} />
                Cancelar
            </Button>

            <Button typeButton="login">
                <LogIn size="20px" style={styloIcon} />
                Login
            </Button>
            <Button typeButton="user">
                <User size="20px" style={styloIcon} />
                Usuario
            </Button>
            <Button typeButton="accept">
                <Add size="20px" style={styloIcon} />
                Agregar
            </Button>
            <Button typeButton="deny">
                <Delete size="20px" style={styloIcon} />
                Borrar
            </Button>
        </>
    );
};

export default Test;
