/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GeographyPoint } from "@azure/search-documents";
import { EntityRelated, mdm, StringRelated } from "@trifenix/agro-data";
import { EntityBaseSearch, EntityMetadata } from "@trifenix/mdm";
import AgroSearch, {
	searchInstance,
} from "../../services/azure-search/indexs-instances/AgroSearch";

type PropertyKeys<T> = {
	[K in keyof T]: T[K] extends (infer U)[] ? K : never;
}[keyof T];

/**
 * Gets name property
 * @template T Estructura del objeto
 * @param key_property El campo o key del objeto
 * @param entity Entidad que interesa en la metadata
 * @param index_property El numero de la propiedad
 * @returns Retorna una propiedad del objeto T
 */
export function getMetaNameProperty<T>(
	key_property: PropertyKeys<EntityBaseSearch<GeographyPoint>>,
	entity: EntityBaseSearch<GeographyPoint>,
	index_property: number
): keyof T {
	const entity_metadata = getEntityMetadata(entity.index);

	switch (key_property) {
		case "sug":
		case "str":
			return entity_metadata.stringData[index_property].nameProp as keyof T;
		case "bl":
			return entity_metadata.boolData[index_property].nameProp as keyof T;

		case "dt":
			return entity_metadata.dateData[index_property].nameProp as keyof T;

		case "enm":
			return entity_metadata.enumData[index_property].nameProp as keyof T;

		case "num64":
		case "num32":
			return entity_metadata.numData[index_property].nameProp as keyof T;

		case "dbl":
			return entity_metadata.doubleData[index_property].nameProp as keyof T;
		case "geo":
			return entity_metadata.geoData[index_property].nameProp as keyof T;

		case "rel":
			return entity_metadata.relData[index_property].nameProp as keyof T;
	}
}

/**
 * Gets entity metadata
 * @param entity Entidad que se va a buscar en la metadata
 * @returns Retorna la metadata de la entidad
 */
export function getEntityMetadata(entity: EntityRelated): EntityMetadata {
	return mdm.indexes.filter((meta_entity) => meta_entity.index === entity)[0];
}

const parseRequest = async <T = any>(
	object: EntityBaseSearch<GeographyPoint>,
	relsId = true,
	relInfo?: EntityRelated[]
): Promise<T> => {
	let parseObj = { ...getSearchPropertys(object) };

	if (!relsId) {
		const entities = await Promise.all(
			object.rel.map(async (entity) => ({
				realIndex: entity.index,
				entity: (
					await searchInstance.getSpecificEntitie(
						// * Debido al puto pollinator
						entity.index === EntityRelated.POLLINATOR
							? EntityRelated.VARIETY
							: entity.index,
						entity.id
					)
				).data[0],
			}))
		);

		entities.forEach(
			({
				realIndex,
				entity,
			}: {
				realIndex: number;
				entity: EntityBaseSearch<GeographyPoint>;
			}) => {
				if (relInfo && relInfo.includes(realIndex)) {
					const wea = getSearchPropertys(entity);
					parseObj = { ...wea, ...parseObj };
				}

				parseObj[getMetaNameProperty<T>("rel", object, realIndex)] = entity.str.find(
					(property) => property.index === StringRelated.GENERIC_NAME
				)?.value;
			}
		);
	}

	return parseObj;
};

export const getSearchPropertys = <T = any>(
	object: EntityBaseSearch<GeographyPoint>,
	relIncludes = false
): any => {
	const parseObj = {} as any;

	parseObj.id = object.id;

	for (const K in object) {
		const key = K as PropertyKeys<EntityBaseSearch<GeographyPoint>>;

		if (Array.isArray(object[key]) && (key !== "rel" || relIncludes)) {
			object[key].forEach((property: any) => {
				const field = getMetaNameProperty<T>(key, object, property.index);
				parseObj[field]
					? (parseObj[field] = [parseObj[field], property.id].flat())
					: (parseObj[field] =
							relIncludes && key === "rel"
								? property.id
								: property.value instanceof Date
								? property.value.toString()
								: property.value);
			});
		}
	}

	return parseObj;
};

export default parseRequest;
