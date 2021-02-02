import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import { useParams } from "react-router";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";
import { path_name } from "../../config/statics/path_names";

const Sector: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return id ? (
        <Form
            message="Formulario Sector"
            pathname={path_name.sectors}
            logo={Logo}
            id_entity={id}
            currentEntity={EntityRelated.SECTOR}
            fields={[
                {
                    label: "Nombre Sector",
                    name: "name",
                    placeholder: "Escribe el nombre",
                    type: "text",
                },
            ]}
        />
    ) : (
        <Form
            message="Formulario Sector"
            pathname={path_name.sectors}
            logo={Logo}
            currentEntity={EntityRelated.SECTOR}
            fields={[
                {
                    label: "Nombre Sector",
                    name: "name",
                    placeholder: "Escribe el nombre",
                    type: "text",
                },
            ]}
        />
    );
};

export default Sector;
