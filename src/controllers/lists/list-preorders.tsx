import { EntityRelated, StringRelated } from "@trifenix/agro-data";
import { withList } from "../../HightOrderComponent/lists/withList";
import { searchInstance } from "../../services/azure-search/indexs-instances/AgroSearch";

import React, { useState } from "react";
import { WithListProps } from "../../HightOrderComponent/lists/types";
import { AddToQueue, EditAlt } from "@styled-icons/boxicons-regular";
import { Eye } from "@styled-icons/fa-solid";
import CrudManteinerRequest from "../../services/api/manteiner.service";
import Loading from "../../components/loading/Loading";
import TableSelectManteiner from "../../components/table/tableSelect";
import Modal from "../../components/modal";

import styled from "styled-components";
import Boton from "../../components/buttons/button/Button";
import Input from "../../components/input";

export const StyledContainer = styled.div`
	margin: 0 auto;
	padding: 64px 64px;
	max-width: 90%;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
	border-radius: 10px 10px 0 0;
`;

export const StyledBox = styled.div`
	margin: 10px 0;
	padding: 16px;
	border-radius: 4px;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
	&:hover {
		background-color: #36c76c;
		color: #ffff;
	}
`;

export interface ListProps {
	entity: EntityRelated;
	buttonName: string;
	entity_rel?: EntityRelated;
	id?: string;
}

const List: React.FC<ListProps & WithListProps> = ({ data, id }) => {
	const all_barracks =
		Array.from(
			new Set(
				data
					?.map(({ rel }) =>
						rel
							.filter(({ index }: any) => index === EntityRelated.BARRACK)
							.map((entity: any) => entity.id)
					)
					.flat()
			)
		) || [];

	const [newPreorden, setNewPreorder] = useState<string[]>([]);
	const [nameNewPreorder, setNameNewPreorder] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	const savePreorder = async () => {
		setLoading(true);
		const new_preorder = {
			name: nameNewPreorder,
			orderFolderId: id as string,
			preOrderType: 0,
			barrackIds: newPreorden,
		};

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const put = await CrudManteinerRequest.POST(new_preorder, "pre_orders");
		setLoading(false);
		location.reload();
	};

	return (
		<StyledContainer>
			{data?.map((row: any) => (
				<ElementList key={row.id} row={row} ignore_barracks={all_barracks} />
			))}

			<Loading isLoading={loading}>
				<Modal buttonIcon={AddToQueue} buttonName="Nueva Preorden">
					<>
					<div style={{width:"91%", margin:"auto", textAlign:"left"}}>
						<Input width="50%" widthWrapper="50%" type="text"
							value={nameNewPreorder}
							onChange={(e:any) => setNameNewPreorder(e.target.value)}/>
					</div>
						<TableSelectManteiner
							currentEntity={EntityRelated.BARRACK}
							selects={newPreorden}
							chageSelects={setNewPreorder}
							folder_id={id as string}
							ids={all_barracks}
						/>
						<div style={{width:"91%", margin:"auto", textAlign:"end"}}>
							<Boton typeButton = "save" onClick={() => savePreorder()}>Guardar</Boton>
						</div>

					</>
				</Modal>
			</Loading>
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

	const [name, setName] = useState<string>(
		row.sug.find((val: any) => val.index === StringRelated.GENERIC_NAME).value
	);

	const [loading, setLoading] = useState(false);

	console.log(name);

	const savePreorder = async () => {
		setLoading(true);
		const new_preorder = {
			name: name,
			orderFolderId: row.rel.find((entity: any) => entity.index === 24).id,
			preOrderType: 0,
			barrackIds: selectBarracks,
		};

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const put = await CrudManteinerRequest.PUT(new_preorder, "pre_orders", row.id);

		setLoading(false);
		location.reload();
	};

	return (
		<StyledBox key={row.id}>
			{row.sug.find((property: any) => property.index === StringRelated.GENERIC_NAME).value ||
				row.str.find((property: any) => property.index === StringRelated.GENERIC_NAME)
					.value}
			<div style={{ display: "flex", flexDirection: "row" }}>
				<Modal buttonIcon={Eye} buttonName="Ver">
					{JSON.stringify(row)}
				</Modal>
				<Loading isLoading={loading}>
					<Modal buttonIcon={EditAlt} buttonName="Editar">
						<>
						<div style={{width:"91%", margin:"auto", textAlign:"left"}}>
							<Input width="50%"
								type="text"
								value={name}
								onChange={(e:any) => setName(e.target.value)}
							/>
						</div>
							<TableSelectManteiner
								currentEntity={EntityRelated.BARRACK}
								selects={selectBarracks}
								folder_id={
									row.rel.find(
										(property: any) =>
											property.index === EntityRelated.ORDER_FOLDER
									).id
								}
								chageSelects={setSelectBarracks}
								ids={ignore_barracks.filter(
									(id: string) => !selectBarracks.includes(id)
								)}
							/>
							<div style={{width:"91%", margin:"auto", textAlign:"end"}}>
								<Boton typeButton = "save" onClick={() => savePreorder()}>Guardar</Boton>
							</div>
						</>
					</Modal>
				</Loading>
			</div>
		</StyledBox>
	);
};

const ListPreorders = withList({
	getItems: async (entity: EntityRelated, entity_rel: EntityRelated, id: string) => {
		const entities = (await searchInstance.getRelIn(entity, entity_rel, id)).data;

		return entities;
	},
})(List);

export default ListPreorders;
