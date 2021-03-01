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
	placeholder: string;
	required: boolean;
	// type: string;
}

export default function getFieldsName<T>(
	entity: EntityRelated,
	exceptField: KeyFields<EntityMetadata>[] = [],
	relsInfo?: EntityRelated[]
): IFieldDefined<T>[] {
	const entity_metadata = getEntityMetadata(entity);
	let fields = Array<IFieldDefined<T>>();

	const validate = (key: KeyFields<EntityMetadata>) => ["menus", ...exceptField].includes(key);

	for (const key in entity_metadata) {
		const key_dict = key as KeyFields<EntityMetadata>;

		if (entity_metadata[key_dict] instanceof Object && !validate(key_dict)) {
			Object.keys(entity_metadata[key_dict]).forEach((num_key: any) => {
				const field = entity_metadata[key_dict][num_key];
				if (relsInfo?.includes((field as any).realIndex)) {
					fields = [...fields, ...getFieldsName((field as any).realIndex, ["relData"])];
				} else {
					field.hasInput &&
						field.visible &&
						// field.nameProp !== "idSeason" &&
						fields.push({
							field: field.nameProp as keyof T,
							header: field.info.title,
							placeholder: field.info.description,
							required: field.required,
							// type: field.
						});
				}
			});
		}
	}

	return fields;
}
