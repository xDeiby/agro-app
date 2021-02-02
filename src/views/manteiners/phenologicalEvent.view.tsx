import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import { useParams } from "react-router";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";
import { path_name } from "../../config/statics/path_names";

const PhenologicalEvents: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return id ? (
        <Form
            message="Formulario Eventos Fenologicos"
            pathname={path_name.phenological_events}
            logo={Logo}
            id_entity={id}
            currentEntity={EntityRelated.PHENOLOGICAL_EVENT}
            fields={[
                {
                    label: "Nombre Evento Fenologico",
                    name: "name",
                    placeholder: "Escribir Nombre",
                    type: "text",
                },
                {
                    label: "Abreviación del Evento",
                    name: "abbreviation",
                    placeholder: "Escribir una Abreviación",
                    type: "text",
                },
            ]}
        />
    ) : (
        <Form
            message="Formulario Eventos Fenologicos"
            pathname={path_name.phenological_events}
            logo={Logo}
            currentEntity={EntityRelated.PHENOLOGICAL_EVENT}
            fields={[
                {
                    label: "Nombre Evento Fenologico",
                    name: "name",
                    placeholder: "Escribir Nombre",
                    type: "text",
                },
                {
                    label: "Abreviación del Evento",
                    name: "abbreviation",
                    placeholder: "Escribir una Abreviación",
                    type: "text",
                },
            ]}
        />
    );
};

export default PhenologicalEvents;
