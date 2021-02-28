import { mdm } from "@trifenix/agro-data";
import {
	order_pathname,
	path_name,
	path_name_machine,
	path_name_not_category,
} from "../../config/statics/path_names";

export const getPaginationManteinerModel = (): any => {
	const pagination_model = {} as any;
	mdm.indexes
		.filter((wea: any) =>
			[
				...Object.values(path_name),
				...Object.values(order_pathname),
				...Object.values(path_name_machine),
				...Object.values(path_name_not_category),
			].includes(wea.pathName)
		)
		.forEach((nose) => {
			pagination_model[nose.index] = {};
		});

	return pagination_model;
};

export const getPaginationManteinerModelTotal = (): any => {
	const pagination_model = {} as any;
	mdm.indexes
		.filter((wea: any) =>
			[
				...Object.values(path_name),
				...Object.values(order_pathname),
				...Object.values(path_name_machine),
				...Object.values(path_name_not_category),
			].includes(wea.pathName)
		)
		.forEach((nose) => {
			pagination_model[nose.index] = 0;
		});

	return pagination_model;
};
