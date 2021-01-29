import * as React from "react";
import { useLocation } from "react-router";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";

const Seasons: React.FC = () => {
    const path = useLocation().pathname.split("/")[2];

    return (
        <Form
            message="Formulario temporada"
            pathname={path}
            logo={Logo}
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
