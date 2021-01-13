import * as React from "react";
import Button from "./components/button/Button";
import MenuView from "./views/menu.view";
import fondo from "./config/images/dashboard.jpg";
import StyledLabel from "./components/label/index";
import Alert from "./components/alerts/Alerts";
import { BrowserRouter } from "react-router-dom";
import Views from "./views";

const pete = () => {
    console.log("Probando");
};
const App: React.FunctionComponent = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Button typeButton="accept" onClick={pete}>
                    Aceptar
                </Button>
                <Button typeButton="deny">Cancelar</Button>
                <Button typeButton="login">Login</Button>
                <Button typeButton="user">Usuario</Button>
                <Button typeButton="add">Agregar</Button>
                <Button typeButton="delete">Borrar</Button>
                <Alert> </Alert>

                <StyledLabel>ejemplo3</StyledLabel>
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
                <body>
                    <Views />
                </body>
                <footer>wea</footer>
            </BrowserRouter>
        </div>
    );
};

export default App;
