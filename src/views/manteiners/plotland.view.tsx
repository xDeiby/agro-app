import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import { useParams } from "react-router";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";
import { path_name } from "../../config/statics/path_names";

const Plotlands: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return id ? (
        <Form
            message="Formulario Parcelas"
            pathname={path_name.plotlands}
            logo={Logo}
            currentEntity={EntityRelated.PLOTLAND}
            fields={[
                {
                    label: "Nombre Parcela",
                    name: "name",
                    placeholder: "Escribir Nombre",
                    type: "text",
                },
            ]}
            dropdowns={[
                {
                    label: "Sector",
                    name: "idSector",
                    placeholder: "Selecciona un Sector",
                    entity: EntityRelated.SECTOR,
                    options: [
                        { label: "sector 1", value: "sector 1" },
                        { label: "sector 2", value: "sector 2" },
                        { label: "sector 3", value: "sector 3" },
                    ],
                },
            ]}
        />
    ) : (
        <Form
            message="Formulario Parcelas"
            pathname={path_name.plotlands}
            logo={Logo}
            id_entity={id}
            currentEntity={EntityRelated.PLOTLAND}
            fields={[
                {
                    label: "Nombre Parcela",
                    name: "name",
                    placeholder: "Escribir Nombre",
                    type: "text",
                },
            ]}
            dropdowns={[
                {
                    label: "Sector",
                    name: "idSector",
                    placeholder: "Selecciona un Sector",
                    entity: EntityRelated.SECTOR,
                    options: [
                        { label: "sector 1", value: "sector 1" },
                        { label: "sector 2", value: "sector 2" },
                        { label: "sector 3", value: "sector 3" },
                    ],
                },
            ]}
        />
    );
};

export default Plotlands;
