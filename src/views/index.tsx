import * as React from "react";
import { ManteinerRoutes, HomeRoute, TablesRoutes } from "../routes";

const Views: React.FC = () => {
	return (
		<>
			<HomeRoute />
			<ManteinerRoutes />
			<TablesRoutes />
		</>
	);
};

export default Views;
