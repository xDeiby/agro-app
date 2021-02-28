import { GeographyPoint } from "@azure/search-documents";
import { EntityRelated, StringRelated } from "@trifenix/agro-data";
import { EntityBaseSearch } from "@trifenix/mdm";
import { searchInstance } from "../../services/azure-search/indexs-instances/AgroSearch";
import { getEntityMetadata } from "./parseRequest";

/**
 * Gets rel entities
 * @param entity Entidad de la vamos a extraer sus Rels en la metadata
 * @returns Array de index's de las entidades que contiene entity
 */
export default function getRelEntities(entity: EntityRelated): EntityRelated[] | number[] {
	const metadata = getEntityMetadata(entity).relData;

	return Object.values(metadata)
		.map((property) => property.realIndex)
		.reduce(
			(indexs: number[], index) =>
				index !== EntityRelated.SEASON
					? [...indexs, indexs.includes(index) ? EntityRelated.POLLINATOR : index]
					: indexs,
			[]
		);
}

export function getRelName({ str, sug }: EntityBaseSearch<GeographyPoint>): string {
	const value = (
		str.find((elem) => elem.index === StringRelated.GENERIC_NAME) ||
		sug.find((elem) => elem.index === StringRelated.GENERIC_NAME)
	)?.value;

	return value as string;
}
export function getRelLabel(entity: EntityRelated, index: EntityRelated): string {
	const metadata = getEntityMetadata(entity);

	return Object.values(metadata.relData).filter((entitie) => entitie.realIndex === index)[0]
		.nameProp;
}

export interface IPropertyForm {
	label: string;
	value: string;
}

export interface IDropdownOptions {
	[key: string]: IPropertyForm[];
}

export async function getRelOptions(
	entities: EntityRelated[],
	currentEntity: EntityRelated
): Promise<IDropdownOptions> {
	const metadata = getEntityMetadata(currentEntity).relData;

	const result = await Promise.all(
		entities.map(
			async (index) => (await searchInstance.getEntities(index, ["str", "index", "id"])).data
		)
	);

	const all_entities = result.flat();

	const all_options = entities.reduce((options: IDropdownOptions, index) => {
		const key_index = metadata[index].nameProp;
		const current_entities = all_entities.filter(
			(entity) =>
				entity.index ===
				(index === EntityRelated.POLLINATOR ? EntityRelated.VARIETY : index)
		);

		options[key_index] = current_entities.length
			? current_entities.map((entity) => ({
					value: entity.id,
					label: getRelName(entity),
			  }))
			: [];

		return options;
	}, {});

	return all_options;
}
