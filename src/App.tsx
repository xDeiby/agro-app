import * as React from "react";
import Button from "./components/menu/button/Button";
import { BiCheck, BiXCircle, BiQuestionMark } from "react-icons/bi";
import Label from "./components/menu/label/Label";

const App: React.FunctionComponent = () => {
    return (
        <div className="app">
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

            <Label />
        </div>
    );
};

export default App;
