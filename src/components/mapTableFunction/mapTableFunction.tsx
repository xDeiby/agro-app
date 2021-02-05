import * as React from "react";
import { EntityRelated, StringRelated } from "@trifenix/agro-data";
import { useState } from "react";
import AgroSearch from "../../services/azure-search/indexs-instances/AgroSearch";

type TypeEntities =
    | EntityRelated.BARRACK
    | EntityRelated.SEASON
    | EntityRelated.CATEGORY_INGREDIENT
    | EntityRelated.CERTIFIED_ENTITY
    | EntityRelated.PHENOLOGICAL_EVENT
    | EntityRelated.PLOTLAND
    | EntityRelated.ROOTSTOCK
    | EntityRelated.SEASON
    | EntityRelated.SECTOR
    | EntityRelated.SPECIE
    | EntityRelated.VARIETY
    | EntityRelated.INGREDIENT;

interface IMapTableFunction {
    typeEntities: TypeEntities;
}

const QuerysView: React.FC<IMapTableFunction> = (props) => {
    const [nombre, setNombre] = useState<string[][]>();
    const [id_enty, setId_enty] = useState<string[]>([]);
    React.useEffect(() => {
        async function fetchGetentities() {
            const busqueda = new AgroSearch();
            const entities = (await busqueda.getEntities(props.typeEntities)).data;

            const res = entities.map((result) =>
                result.str.filter((enty) => enty.index === StringRelated.GENERIC_NAME).map((valor) => valor.value)
            );
            setNombre(res);
            console.log(entities);

            const idEntities = entities.map((id_search) => id_search.id);
            setId_enty(idEntities);
            console.log(idEntities);
        }
        fetchGetentities();
    }, []);

    return (
        <div>
            <table key={Math.random()}>
                <tr>
                    <th>Nombre</th>
                    <th>Link</th>
                </tr>
                {nombre?.map((pete, a) => {
                    return (
                        <tr key={Math.random()}>
                            <td>{pete}</td>
                            <td>{id_enty[a]}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};
export default QuerysView;
