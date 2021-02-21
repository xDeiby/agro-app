import React, { useState } from "react";
import { StyledContainer, StyledBox } from "./styled.List";
import { EntityRelated, StringRelated } from "@trifenix/agro-data";
import { WithListProps } from "../../HightOrderComponent/lists/types";
import Modal from "../modal";
import { AddToQueue, EditAlt } from "@styled-icons/boxicons-regular";
import TableSelectManteiner from "../table/tableSelect";
import { Eye } from "@styled-icons/fa-solid";

export interface ListProps {
	entity: EntityRelated;
	buttonName: string;
	entity_rel?: EntityRelated;
}

const List: React.FC<ListProps & WithListProps> = ({ data }) => {
	const all_barracks =
		data
			?.map(({ rel }) =>
				rel
					.filter(({ index }: any) => index === EntityRelated.BARRACK)
					.map((entity: any) => entity.id)
			)
			.flat() || [];

	const [newPreorden, setNewPreorder] = useState<string[]>([]);
	console.log(newPreorden);

	return (
		<StyledContainer>
			{data?.map((row: any) => (
				<ElementList key={row.id} row={row} ignore_barracks={all_barracks} />
			))}

			<Modal buttonIcon={AddToQueue} buttonName="Nueva Preorden">
				<TableSelectManteiner
					currentEntity={EntityRelated.BARRACK}
					selects={newPreorden}
					chageSelects={setNewPreorder}
					ids={all_barracks}
				/>
			</Modal>
		</StyledContainer>
	);
};

const ElementList: React.FC<{ row: any; ignore_barracks: string[] }> = ({
	row,
	ignore_barracks,
}) => {
	const [selectBarracks, setSelectBarracks] = React.useState<string[]>(
		row.rel[EntityRelated.BARRACK]
			? row.rel
					.filter((property: any) => property.index === EntityRelated.BARRACK)
					.map((entity: any) => entity.id)
			: []
	);

	return (
		<StyledBox key={row.id}>
			{row.sug.find((property: any) => property.index === StringRelated.GENERIC_NAME).value ||
				row.str.find((property: any) => property.index === StringRelated.GENERIC_NAME)
					.value}
			<div style={{ display: "flex", flexDirection: "row" }}>
				<Modal buttonIcon={Eye} buttonName="Ver">
					{JSON.stringify(row)}
				</Modal>
				<Modal buttonIcon={EditAlt} buttonName="Editar">
					<TableSelectManteiner
						currentEntity={EntityRelated.BARRACK}
						selects={selectBarracks}
						chageSelects={setSelectBarracks}
						ids={ignore_barracks.filter((id: string) => !selectBarracks.includes(id))}
					/>
				</Modal>
			</div>
		</StyledBox>
	);
};

export default List;
