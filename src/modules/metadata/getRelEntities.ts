import { GeographyPoint } from "@azure/search-documents";
import { EntityRelated, mdm, StringRelated } from "@trifenix/agro-data";
import { EntityBaseSearch } from "@trifenix/mdm";
import AgroSearch from "../../services/azure-search/indexs-instances/AgroSearch";
import { getEntityMetadata } from "./parseRequest";

/**
 * Gets rel entities
 * @param entity Entidad de la vamos a extraer sus Rels en la metadata
 * @returns Array de index's de las entidades que contiene entity
 */
export default function getRelEntities(entity: EntityRelated): EntityRelated[] {
	const metadata = getEntityMetadata(entity).relData;

	return Object.values(metadata)
		.map((property) => property.realIndex)
		.filter((index) => index !== EntityRelated.SEASON);
}

export function getRelName({ str }: EntityBaseSearch<GeographyPoint>): string {
	// if (entity.index === EntityRelated.POLLINATOR) entity.index = EntityRelated.VARIETY;

	const value = str.filter((elem) => elem.index === StringRelated.GENERIC_NAME)[0].value;

	return value;
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
	search: AgroSearch,
	currentEntity: EntityRelated
): Promise<IDropdownOptions> {
	const metadata = getEntityMetadata(currentEntity).relData;

	const result = await Promise.all(
		entities.map(
			async (index) => (await search.getEntities(index, ["str", "index", "id"])).data
		)
	);

	const wea = result.flat();
	console.log(mdm.indexes.filter((wea) => wea.index === 1));

	const options = wea.reduce((acc: IDropdownOptions, re) => {
		const key_index = metadata[re.index].nameProp;
		if (!acc[key_index]) acc[key_index] = [];

		const option = {
			value: re.id,
			label: re.str.filter((property) => property.index === StringRelated.GENERIC_NAME)[0]
				.value,
		};
		!acc[key_index].find((prop) => prop.value === option.value) && acc[key_index].push(option);

		return acc;
	}, {});

	return options;

	// console.log(rels.map((options, count) => all_options[getRelLabel(entities[count], )] getRelName(options[0])));

	// console.log(rels);
}
