import * as React from "react";
import {
	ManteinerRoutes,
	HomeRoute,
	TablesRoutes,
	MachineRoutes,
	TableMachineRoutes,
	NotCategoryFormsRoute,
	TableNotCategoryRoutes,
	OrdersRoutes,
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
			<OrdersRoutes />
		</>
	);
};

export default Views;
