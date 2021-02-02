import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import { useParams } from "react-router";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";
import { path_name } from "../../config/statics/path_names";

const Varietys: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return id ? (
        <Form
            message="Formulario Variedades"
            pathname={path_name.varietys}
            logo={Logo}
            id_entity={id}
            currentEntity={EntityRelated.VARIETY}
            fields={[
                {
                    label: "Nombre Variedad",
                    name: "name",
                    placeholder: "Escribe un nombre",
                    type: "text",
                },
                {
                    label: "Abreviación Variedad",
                    name: "abbreviation",
                    placeholder: "Ingresa una Abreviación",
                    type: "text",
                },
            ]}
            dropdowns={[
                {
                    label: "Especie",
                    name: "idSpecie",
                    placeholder: "Selecciona una Especie",
                    entity: EntityRelated.SPECIE,
                    options: [
                        { label: "specie 1", value: "specie 1" },
                        { label: "specie 2", value: "specie 2" },
                        { label: "specie 3", value: "specie 3" },
                    ],
                },
            ]}
        />
    ) : (
        <Form
            message="Formulario Variedades"
            pathname={path_name.varietys}
            logo={Logo}
            currentEntity={EntityRelated.VARIETY}
            fields={[
                {
                    label: "Nombre Variedad",
                    name: "name",
                    placeholder: "Escribe un nombre",
                    type: "text",
                },
                {
                    label: "Abreviación Variedad",
                    name: "abbreviation",
                    placeholder: "Ingresa una Abreviación",
                    type: "text",
                },
            ]}
            dropdowns={[
                {
                    label: "Especie",
                    name: "idSpecie",
                    placeholder: "Selecciona una Especie",
                    entity: EntityRelated.SPECIE,
                    options: [
                        { label: "specie 1", value: "specie 1" },
                        { label: "specie 2", value: "specie 2" },
                        { label: "specie 3", value: "specie 3" },
                    ],
                },
            ]}
        />
    );
};

export default Varietys;
