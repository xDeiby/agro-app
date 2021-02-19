import * as React from "react";
import { ManteinerRoutes, HomeRoute, TablesRoutes, SpecificPreorderRoute } from "../routes";

const Views: React.FC = () => {
	return (
		<>
			<HomeRoute />
			<ManteinerRoutes />
			<TablesRoutes />
			<SpecificPreorderRoute />
		</>
	);
};

export default Views;
