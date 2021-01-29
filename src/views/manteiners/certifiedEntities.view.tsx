import * as React from "react";
import { useLocation } from "react-router";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";

const CertifiedEntities: React.FC = () => {
    const path = useLocation().pathname.split("/")[2];
    return (
        <Form
            message="Formulario Entidades Certificadas"
            pathname={path}
            logo={Logo}
            fields={[
                {
                    label: "Nombre Entidad Certificada",
                    name: "name",
                    placeholder: "Escribir nombre",
                    type: "text",
                },
                {
                    label: "Abreviación Entidad",
                    name: "abbreviation",
                    placeholder: "Escribir una abreviación",
                    type: "text",
                },
            ]}
        />
    );
};

export default CertifiedEntities;
