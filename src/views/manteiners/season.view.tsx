import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import { useParams } from "react-router";
import Form from "../../components/forms/form";
import Logo from "../../config/logos/aresa.e3676c3d.png";

const Seasons: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // ! Importante
    // TODO: Analizar este caso
    return <Form currentEntity={EntityRelated.TARGET} logo={Logo} message={"Objetivos de aplicacion"} currentId={id} />;
};

export default Seasons;
