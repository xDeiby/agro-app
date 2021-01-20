import * as React from "react";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";

const CertifiedEntities: React.FC = () => {
    return (
        <Form
            message="Formulario Entidades Certificadas"
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
