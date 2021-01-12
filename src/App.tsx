import * as React from "react";
import Button from "./components/menu/button/Button";
import styled from "styled-components";
import { LogIn } from "@styled-icons/boxicons-regular/LogIn";
import { CancelCircle } from "@styled-icons/icomoon/CancelCircle";
import { CheckCircle } from "@styled-icons/boxicons-regular/CheckCircle";
import { User } from "@styled-icons/fa-solid/User";
import { Add } from "@styled-icons/material-rounded/Add";
import { Delete } from "@styled-icons/material-outlined/Delete";
import MenuView from "./views/menu.view";
import fondo from "./config/images/dashboard.jpg";

const styloIcon = {
    marginRight: 5,
};
const pete = () => {
    console.log("Probando");
};
const App: React.FunctionComponent = () => {
    return (
        <div className="app">
            <Menu />

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
            <Button typeButton="usuario">
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
            <header
                // Provisorio
                style={{
                    backgroundImage: `url(${fondo})`,
                    height: "500px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <MenuView />
            </header>
        </div>
    );
};

export default App;
