import * as React from "react";
import { Route } from "react-router";
import { base_path, path_name_machine } from "../config/statics";
import TableMachine from "../views/manteiners/table/table-machine.view";

const MachineTablesRoutes: React.FC = () => {
	return (
		<>
			{Object.values(path_name_machine)
				.map((path) => `/${base_path.machine}/${path}`)
				.map((path_url) => (
					<Route key={path_url} exact path={path_url}>
						<TableMachine />
					</Route>
				))}
		</>
	);
};

export default MachineTablesRoutes;
