import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import QuerysView from "../../components/mapTableFunction/mapTableFunction";
import { path_name } from "../../config/statics";

const CertifiedEntitiesTable: React.FC = () => {
    return (
        <div>
            Tabla de Certificados de entidades
            <QuerysView typeEntities={EntityRelated.CERTIFIED_ENTITY} entys={path_name.certified_entities}>
                {" "}
            </QuerysView>
        </div>
    );
};

export default CertifiedEntitiesTable;
