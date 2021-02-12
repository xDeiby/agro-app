/* eslint-disable @typescript-eslint/no-explicit-any */
import { EntityRelated } from "@trifenix/agro-data";
import { EntityMetadata } from "@trifenix/mdm";
import { getEntityMetadata } from "./wea";

type KeyFields<T> = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [K in keyof T]: T[K] extends { [key: string]: infer U } ? K : never;
}[keyof T];

export interface IFieldDefined<T> {
    field: keyof T;
    header: string;
}

export default function getFieldsName<T>(entity: EntityRelated): IFieldDefined<T>[] {
    const entity_metadata = getEntityMetadata(entity);
    const fields = Array<IFieldDefined<T>>();

    for (const key in entity_metadata) {
        const key_dict = key as KeyFields<EntityMetadata>;

        if (entity_metadata[key_dict] instanceof Object && key !== "menus") {
            Object.keys(entity_metadata[key_dict]).forEach((num_key: any) => {
                const field = entity_metadata[key_dict][num_key];
                !["seasonId", "geographicalPoints", "clientId"].includes(field.nameProp) &&
                    fields.push({ field: field.nameProp as keyof T, header: field.info.title });
            });
        }
    }

    return fields;
}
