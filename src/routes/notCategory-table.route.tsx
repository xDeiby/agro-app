import * as React from "react";
import { Route } from "react-router";
import { base_path, path_name_not_category } from "../config/statics";
import TableNotCategory from "../views/manteiners/table/table-notCategory.view";
const NotCategoryTablesRoutes: React.FC = () => {
	return (
		<>
			{Object.values(path_name_not_category)
				.map((path) => `/${base_path.not_category}/${path}`)
				.map((path_url) => (
					<Route key={path_url} exact path={path_url}>
						<TableNotCategory />
					</Route>
				))}
		</>
	);
};

export default NotCategoryTablesRoutes;
