import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import { useParams } from "react-router";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";
import { path_name } from "../../config/statics/path_names";

const Seasons: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return id ? (
        <Form
            message="Formulario temporada"
            pathname={path_name.seasons}
            logo={Logo}
            id_entity={id}
            currentEntity={EntityRelated.SEASON}
            fields={[
                {
                    label: "Nombre de temporada",
                    name: "name",
                    placeholder: "Escribe el nombre",
                    type: "text",
                },
            ]}
            datePicker={[
                {
                    label: "Temporada",
                    name: "idTemporada",
                    placeholder: "Selecciona una Especia",
                    startDate: "inicioTemporada",
                    endDate: "finTemporada",
                },
            ]}
        />
    ) : (
        <Form
            message="Formulario temporada"
            pathname={path_name.seasons}
            logo={Logo}
            currentEntity={EntityRelated.SEASON}
            fields={[
                {
                    label: "Nombre de temporada",
                    name: "name",
                    placeholder: "Escribe el nombre",
                    type: "text",
                },
            ]}
            datePicker={[
                {
                    label: "Temporada",
                    name: "idTemporada",
                    placeholder: "Selecciona una Especia",
                    startDate: "inicioTemporada",
                    endDate: "finTemporada",
                },
            ]}
        />
    );
};

export default Seasons;
