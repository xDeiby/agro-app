import * as React from "react";
import { Route } from "react-router";
import { base_path, path_name_machine } from "../config/statics";
import TableSimple from "../views/manteiners/table/tableSimple-entities.view";

const MachineTablesRoutes: React.FC = () => {
	return (
		<>
			{Object.values(path_name_machine)
				.map((path) => `/${base_path.machine}/${path}`)
				.map((path_url) => (
					<Route key={path_url} exact path={path_url}>
						<TableSimple />
					</Route>
				))}
		</>
	);
};

export default MachineTablesRoutes;
