import * as React from "react";
import {
	ManteinerRoutes,
	HomeRoute,
	TablesRoutes,
	MachineRoutes,
	TableMachineRoutes,
	NotCategoryFormsRoute,
	TableNotCategoryRoutes,
} from "../routes";

const Views: React.FC = () => {
	return (
		<>
			<HomeRoute />
			<ManteinerRoutes />
			<TablesRoutes />
			<MachineRoutes />
			<TableMachineRoutes />
			<TableNotCategoryRoutes />
			<NotCategoryFormsRoute />
		</>
	);
};

export default Views;
