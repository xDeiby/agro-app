import * as React from "react";
import { Route } from "react-router";
import { base_path, path_name } from "../config/statics";
import TableManteiner from "../views/manteiners/table/table-manteiner.view";

const TablesRoutes: React.FC = () => {
	return (
		<>
			{Object.values(path_name)
				.map((path) => `/${base_path.manteiner}/${path}`)
				.map((path_url) => (
					<Route key={path_url} exact path={path_url}>
						<TableManteiner />
					</Route>
				))}
		</>
	);
};

export default TablesRoutes;