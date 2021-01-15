import * as React from "react";
import MenuView from "./views/menu.view";
import fondo from "./config/images/dashboard.jpg";
import { BrowserRouter } from "react-router-dom";
import Views from "./views";
import Button from "./components/button/Button";
import Alert from "./components/alerts/Alerts";
import Label from "./components/label/Label";
import Dropdown from "./components/dropdown/Dropdown";

const App: React.FunctionComponent = () => {
    return (
        <BrowserRouter basename="/">
            <Button typeButton="accept">Aceptar</Button>
            <Button typeButton="deny">Cancelar</Button>
            <Button typeButton="login">Login</Button>
            <Button typeButton="user">Usuario</Button>
            <Button typeButton="add">Agregar</Button>
            <Button typeButton="delete">Borrar</Button>
            <Alert typeAlert="succesful">
                {" "}
                Se ha realizado con exito la alerta{" "}
            </Alert>

            <Label>NOMBRE Y APELLIDOS</Label>
            <Dropdown
                options={[
                    "React",
                    "Angular",
                    "Vue JS",
                    "Vanilla javascript",
                    "pete cris",
                ]}
            ></Dropdown>
            <Dropdown
                options={[
                    "nacho pete",
                    "claudio pete",
                    "yo pete",
                    "Vanilla javascript",
                    "pete cris",
                ]}
            ></Dropdown>

            <header
                // Provisorio
                style={{
                    backgroundImage: `url(${fondo})`,
                    height: "300px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }}
            >
                <MenuView />
            </header>
            <div className="react-body">
                <Views />
            </div>
            <footer
                style={{
                    position: "fixed",
                    left: "0px",
                    bottom: "0px",
                    display: "block",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    width: "100%",
                    padding: "10px",
                    color: "white",
                }}
            >
                AQUI FOOTER (Provisorio)
            </footer>
        </BrowserRouter>
    );
};

export default App;
