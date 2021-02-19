import React from "react";
import { Edit } from "@styled-icons/boxicons-regular";
import ButtonLineal from "../buttons/button-lineal";
import { StyledContainer, StyledBox } from "./styled.List";
import AgroSearch from "../../services/azure-search/indexs-instances/AgroSearch";
import { EntityRelated, StringRelated } from "@trifenix/agro-data";
import { useState } from "react";

export const elements = ["Especie 1", "Especie 2", "Especie 3", "Especie 4", "Especie 5"];

const List: React.FC = () => {
	const [nombre, setNombre] = useState<string[][]>();
	React.useEffect(() => {
		async function fetchGetentities() {
			const busqueda = new AgroSearch();
			const entities = (await busqueda.getEntities(EntityRelated.COSTCENTER)).data;
			const res = entities.map((result) =>
				result.str
					.filter((lol) => lol.index === StringRelated.GENERIC_NAME)
					.map((valor) => valor.value)
			);
			setNombre(res);
		}
		fetchGetentities();
	}, []);

	const listElement = nombre?.map((element) => {
		return (
			<StyledBox key={Math.random()}>
				{element}
				<ButtonLineal typeButton="danger" icon={Edit} size="small">
					Editar
				</ButtonLineal>
			</StyledBox>
		);
	});

	return (
		<div>
			<StyledContainer>{listElement}</StyledContainer>
		</div>
	);
};

export default List;
