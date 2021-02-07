/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GeographyPoint } from "@azure/search-documents";
import { EntityRelated, mdm, StringRelated } from "@trifenix/agro-data";
import { EntityBaseSearch, EntityMetadata } from "@trifenix/mdm";
import AgroSearch from "../../services/azure-search/indexs-instances/AgroSearch";

type PropertyKeys<T> = {
	[K in keyof T]: T[K] extends (infer U)[] ? K : never;
}[keyof T];

/**
 * Parses request
 * @template T Estructura a la cual se va a parsear el objeto
 * @param object Estructura base del objeto de Azure Search
 * @returns Retorna el objeto parseado a T
 */
export default function parseRequest<T extends { id: string }>(
	object: EntityBaseSearch<GeographyPoint>
): T {
	const parseObj: T = {} as T;

	// type Types = PropertyTypes<EntityBaseSearch>;
	// * Solo se definen las propiedades de interes

	parseObj.id = object.id;
	for (const K in object) {
		const key = K as PropertyKeys<EntityBaseSearch<GeographyPoint>>;

		if (Array.isArray(object[key])) {
			object[key].forEach((property: any) => {
				parseObj[getNameProperty<T>(key, object, property.index)] =
					key === "rel" ? property.id : property.value;
			});
		}
	}

	return parseObj;
}

export async function parseRequestComplete<T extends { id: string }>(
	object: EntityBaseSearch<GeographyPoint>,
	search: AgroSearch
): Promise<T> {
	const parseObj: T = {} as T;

	// type Types = PropertyTypes<EntityBaseSearch>;
	// * Solo se definen las propiedades de interes

	parseObj.id = object.id;
	for (const K in object) {
		const key = K as PropertyKeys<EntityBaseSearch<GeographyPoint>>;

		if (Array.isArray(object[key])) {
			if (key !== "rel") {
				object[key].forEach((property: any) => {
					parseObj[getNameProperty<T>(key, object, property.index)] = property.value;
				});
			} else {
				const result = await Promise.all(
					object[key]
						.filter((property) => property.index !== EntityRelated.SEASON)
						.map(
							async (property) =>
								(
									await search.getSpecificEntitie(
										property.index === 23 ? 21 : property.index,
										property.id,
										["str", "index"]
									)
								).data[0]
						)
				);

				result.forEach((wea) => {
					parseObj[getNameProperty<T>(key, object, wea.index)] = wea.str.filter(
						(prop) => prop.index === StringRelated.GENERIC_NAME
					)[0].value as any;
				});
			}
		}
	}

	return parseObj;
}

/**
 * Gets name property
 * @template T Estructura del objeto
 * @param key_property El campo o key del objeto
 * @param entity Entidad que interesa en la metadata
 * @param index_property El numero de la propiedad
 * @returns Retorna una propiedad del objeto T
 */
export function getNameProperty<T>(
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
