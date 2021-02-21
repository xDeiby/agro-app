import * as React from "react";
import { Route } from "react-router";
import { base_path, path_name_not_category } from "../config/statics";
import TableSimple from "../views/manteiners/table/tableSimple-entities.view";
const NotCategoryTablesRoutes: React.FC = () => {
	return (
		<>
			{Object.values(path_name_not_category)
				.map((path) => `/${base_path.not_category}/${path}`)
				.map((path_url) => (
					<Route key={path_url} exact path={path_url}>
						<TableSimple />
					</Route>
				))}
		</>
	);
};

export default NotCategoryTablesRoutes;
