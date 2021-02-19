import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import { useParams } from "react-router";
import { searchInstance } from "../../services/azure-search/indexs-instances/AgroSearch";
import { Modal } from "./modal";
import Table from "./table";

// interface ISpecificPreorderProps {}

const SpecificPreorder: React.FunctionComponent = (props) => {
	const { id } = useParams<{ id: string }>();

	const [preorders, setPreorders] = React.useState<any[]>([]);
	const [openModal, setOpenModal] = React.useState<boolean>(false);

	React.useEffect(() => {
		const getPreorders = async () => {
			const preorders2 = await searchInstance.getRelIn(
				EntityRelated.PREORDER,
				EntityRelated.ORDER_FOLDER,
				id
			);

			setPreorders(preorders2.data);

			console.log(preorders, "aki");
		};

		getPreorders();
	}, []);

	return (
		<div>
			{preorders.map((wea) => (
				<li key={wea.id}>
					{wea.sug[0].value}
					<Modal button="Editar">
						<Table
							currentEntity={1}
							selectDefault={wea.rel
								.filter((we: any) => we.index === 1)
								.map((a: any) => a.id)}
						/>
					</Modal>
				</li>
			))}{" "}
			<Modal button="Agregar">
				<Table currentEntity={1} selectDefault={[]} />
			</Modal>
		</div>
	);
};

export default SpecificPreorder;
