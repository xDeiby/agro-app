// import './App.css';

import * as React from "react";
import Menu from "./components/menu";
import Button from "./components/menu/button/Button";
import { AiOutlineCheck } from "react-icons/ai";
import { IconContext } from "react-icons";

const App: React.FunctionComponent = () => {
    return (
        <div className="app">
            <Menu />

            <Button pit="default">
                <IconContext.Provider
                    value={{ color: "blue", className: "global-class-name" }}
                >

                    <div>
                        <AiOutlineCheck />
                    </div>
                </IconContext.Provider>
                Boton
            </Button>
        </div>
    );
};

export default App;
