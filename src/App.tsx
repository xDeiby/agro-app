import * as React from "react";
import Menu from "./components/menu";
import Button from "./components/menu/button/Button";
import { BiCheck, BiXCircle, BiQuestionMark } from "react-icons/bi";

const App: React.FunctionComponent = () => {
    return (
        <div className="app">
            <Menu />
            <Button pit="default">
                DEFAULT
                <BiQuestionMark size="15px" />
            </Button>
            <Button pit="accept">
                ACEPTAR <BiCheck size="15px" />
            </Button>
            <Button pit="deny">
                RECHAZAR <BiXCircle size="15px" />
            </Button>
        </div>
    );
};

export default App;
