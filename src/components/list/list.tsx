import { GeographyPoint } from "@azure/search-documents";
import { EntityRelated, StringRelated } from "@trifenix/agro-data";
import { EntityBaseSearch } from "@trifenix/mdm";
import * as React from "react";
import { useParams } from "react-router";
import { searchInstance } from "../../services/azure-search/indexs-instances/AgroSearch";

// TODO: Cambiar
interface IListProps {
	entity?: EntityRelated;
	entity_rel?: EntityRelated;
}

const List: React.FunctionComponent<IListProps> = () => {
	// const { entity, entity_rel } = props;
	const [loading, setLoading] = React.useState<boolean>(false);
	const [data, setData] = React.useState<EntityBaseSearch<GeographyPoint>[]>([]);

	const { id } = useParams<{ id: string }>();

	React.useEffect(() => {
		const getData = async () => {
			setLoading(true);
			const result = (
				await searchInstance.getRelIn(
					EntityRelated.PREORDER,
					EntityRelated.ORDER_FOLDER,
					id
				)
			).data;

			setData(result);
			console.log(result);

			setLoading(false);
		};

		console.log("AAAA");

		getData();
	}, []);

	return loading ? (
		<h1>loading...</h1>
	) : (
		<ul>
			{data.map((row) => (
				<li key={row.id}>
					{
						(row.sug.filter(
							(property) => property.index === StringRelated.GENERIC_NAME
						) ||
							row.str.filter(
								(property) => property.index === StringRelated.GENERIC_NAME
							))[0].value
					}
				</li>
			))}
		</ul>
	);
};

export default List;
