/* eslint-disable @typescript-eslint/no-explicit-any */
import { EntityRelated, mdm } from "@trifenix/agro-data";
import { EntityBaseSearch, EntityMetadata, GeoPointTs } from "@trifenix/mdm";

export interface IProperty {
    value: string | number | boolean | Date;
    label: string;
    // type: KindProperty | null;
}

type EntityKey = keyof EntityBaseSearch<GeoPointTs>;

export function getPropertys(entity: EntityBaseSearch<GeoPointTs>): IProperty[] {
    const properties = Array<IProperty>();

    console.log(entity);

    for (const prop in entity) {
        const key_property = prop as EntityKey;

        if (Array.isArray(entity[key_property])) {
            // * TypeScript no entiende que es un arreglo, siendo que esta condicionado para serlo.
            const property = (entity[key_property] as []).map((prop: any) =>
                getDataProperty(key_property, entity, prop.index)
            );

            property.filter((elem) => Object.values(elem).length).length && properties.push(...property);
        }
    }

    console.log(properties);
    return properties;
}

export function getDataProperty(
    key_property: EntityKey,
    entity: EntityBaseSearch<GeoPointTs>,
    index_property: number
): IProperty {
    const entity_metadata = getEntityMetadata(entity.index);
    const property = {} as IProperty;

    switch (key_property) {
        case "sug":
        case "str":
            property.label = entity_metadata.stringData[index_property].nameProp;
            property.value = entity[key_property].filter((prop) => prop.index === index_property)[0].value;
            break;
        case "bl":
            property.label = entity_metadata.boolData[index_property].nameProp;
            property.value = entity[key_property].filter((prop) => prop.index === index_property)[0].value;
            break;

        case "dt":
            property.label = entity_metadata.dateData[index_property].nameProp;
            property.value = entity[key_property].filter((prop) => prop.index === index_property)[0].value;
            break;

        case "enm":
            property.label = entity_metadata.enumData[index_property].nameProp;
            property.value = entity[key_property].filter((prop) => prop.index === index_property)[0].value;
            break;

        case "num64":
        case "num32":
            property.label = entity_metadata.numData[index_property].nameProp;
            property.value = entity[key_property].filter((prop) => prop.index === index_property)[0].value;
            break;

        case "dbl":
            property.label = entity_metadata.doubleData[index_property].nameProp;
            property.value = entity[key_property].filter((prop) => prop.index === index_property)[0].value;
            break;
        // case "geo":
    }

    return property;
}

export const getEntityMetadata = (entity: EntityRelated): EntityMetadata =>
    mdm.indexes.filter((meta_entity) => meta_entity.index === entity)[0];
