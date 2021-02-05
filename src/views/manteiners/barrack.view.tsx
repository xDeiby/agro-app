import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import { useParams } from "react-router";
import Form from "../../components/forms/form";
import Logo from "../../config/logos/aresa.e3676c3d.png";

const Barracks: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <Form currentEntity={EntityRelated.BARRACK} logo={Logo} message={"Objetivos de aplicacion"} currentId={id} />
    );
};

export default Barracks;
