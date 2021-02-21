import { mdm } from "@trifenix/agro-data";
import { path_name } from "../../config/statics/path_names";

export const getPaginationManteinerModel = () => {
	const pagination_model = {} as any;
	mdm.indexes
		.filter((wea: any) => Object.values(path_name).includes(wea.pathName))
		.forEach((nose) => {
			pagination_model[nose.index] = {};
		});

	return pagination_model;
};

export const getPaginationManteinerModelTotal = () => {
	const pagination_model = {} as any;
	mdm.indexes
		.filter((wea: any) => Object.values(path_name).includes(wea.pathName))
		.forEach((nose) => {
			pagination_model[nose.index] = 0;
		});

	return pagination_model;
};
