import * as React from "react";
import MenuView from "./views/menu.view";
import fondo from "./config/images/dashboard.jpg";
import { BrowserRouter } from "react-router-dom";
import Views from "./views";
const App: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
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
    );
};

export default App;
