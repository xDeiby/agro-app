// import './App.css';

import * as React from "react";
import Menu from "./components/menu";
import Button from "./components/menu/button/Button";

const App: React.FunctionComponent = () => {
    return (
        <div className="app">
            <Menu />
            <Button pit="default">Boton</Button>
        </div>
    );
};

export default App;
