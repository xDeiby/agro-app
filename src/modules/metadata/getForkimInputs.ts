import { mdm } from "@trifenix/agro-data";
import { EntityBaseSearch, EntityMetadata, GeoPointTs, KindProperty } from "@trifenix/mdm";

export interface IProperty {
    value: string | number | boolean | Date;
    label: string;
    type: KindProperty | null;
}
type EntityKey = keyof EntityBaseSearch<GeoPointTs>;

export function getFormikInputs(entity: EntityBaseSearch<GeoPointTs>): IProperty[] {
    const properties = Array<IProperty>();

    console.log(entity);

    for (const prop in entity) {
        const key_property = prop as EntityKey;

        if (Array.isArray(entity[key_property])) {
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
    const entity_metadata = getEntityMetadata(entity);
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

    if (property.label && property.value) property.type = entitieKeyToKindProperty(key_property);

    return property;
}

export function entitieKeyToKindProperty(key: EntityKey): KindProperty | null {
    switch (key) {
        case "sug":
            return KindProperty.SUGGESTION;
        case "str":
            return KindProperty.STR;
        case "bl":
            return KindProperty.BOOL;
        case "dt":
            return KindProperty.DATE;
        case "enm":
            return KindProperty.ENUM;
        case "num32":
            return KindProperty.NUM32;
        case "num64":
            return KindProperty.NUM64;
        case "dbl":
            return KindProperty.DBL;
        case "geo":
            return KindProperty.GEO;
        default:
            return null;
    }
}

export const getEntityMetadata = (entity: EntityBaseSearch<GeoPointTs>): EntityMetadata =>
    mdm.indexes.filter((meta_entity) => meta_entity.index === entity.index)[0];

// type EntityKey<T> = {
//     [K in keyof T]: T[K] extends (infer U)[] ? U : never;
// }[keyof T];

// type EntityKey2<T> = {
//     [K in keyof T]: T[K] extends (infer U) ? U : never
// }[keyof T]

// type T0 = EntityKey<EntityBaseSearch>;
// type T1 = EntityKey2<EntityBaseSearch>;
