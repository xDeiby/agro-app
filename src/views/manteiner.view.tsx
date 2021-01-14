import * as React from "react";
import Form from "../components/forms";
import Logo from "../config/logos/aresa.e3676c3d.png";
import Label from "../components/label/index";

const Manteiner: React.FC = () => {
    return (
        <div className="manteiner">
            <Form
                message="Formulario Sector"
                logo={Logo}
                fields={[
                    { name: "name_sector", type: "text" },
                    { name: "wea1", type: "email" },
                ]}
            ></Form>
        </div>
    );
};

export default Manteiner;
