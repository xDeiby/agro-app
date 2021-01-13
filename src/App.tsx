import * as React from "react";
import MenuView from "./views/menu.view";
import fondo from "./config/images/dashboard.jpg";
import Test from "./views/test.view";

const App: React.FunctionComponent = () => {
    return (
        <div className="app">
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
                <Test />
            </header>
        </div>
    );
};

export default App;
