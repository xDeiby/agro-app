import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import { useParams } from "react-router";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";
import { path_name } from "../../config/statics/path_names";

const CertifiedEntities: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    return id ? (
        <Form
            message="Formulario Entidades Certificadas"
            pathname={path_name.certified_entities}
            logo={Logo}
            id_entity={id}
            currentEntity={EntityRelated.CERTIFIED_ENTITY}
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
    ) : (
        <Form
            message="Formulario Entidades Certificadas"
            pathname={path_name.certified_entities}
            logo={Logo}
            currentEntity={EntityRelated.CERTIFIED_ENTITY}
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
