import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import QuerysView from "../../components/mapTableFunction/mapTableFunction";

const CertifiedEntitiesTable: React.FC = () => {
    return (
        <div>
            Tabla de Certificados de entidades
            <QuerysView typeEntities={EntityRelated.CERTIFIED_ENTITY}> </QuerysView>
        </div>
    );
};

export default CertifiedEntitiesTable;
