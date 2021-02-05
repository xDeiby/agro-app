import * as React from "react";
import { StyledTable, StyledTd, StyledTh } from "./styled.Table";
import { EntityRelated, StringRelated } from "@trifenix/agro-data";
import { useState } from "react";
import AgroSearch from "../../services/azure-search/indexs-instances/AgroSearch";
import { base_path, path_name } from "../../config/statics";

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
    entys: path_name;
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
            <StyledTable key={Math.random()}>
                <tr>
                    <StyledTh>Nombre</StyledTh>
                    <StyledTh>Link</StyledTh>
                </tr>
                {nombre?.map((pete, a) => {
                    return (
                        <tr key={Math.random()}>
                            <StyledTd>{pete}</StyledTd>
                            <StyledTd>
                                <a href={`/${base_path.manteiner}/${props.entys}/${id_enty[a]}`}>Editar</a>
                            </StyledTd>
                        </tr>
                    );
                })}
            </StyledTable>
        </div>
    );
};
export default QuerysView;
