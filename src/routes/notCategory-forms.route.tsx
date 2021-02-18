import * as React from "react";
import { Route } from "react-router";
import { base_path, path_name_not_category } from "../config/statics";
import FormNotCategory from "../views/manteiners/forms/form-notCategory";

const routes = Object.values(path_name_not_category).map(
	(path) => `/${base_path.not_category}/${path}`
);

const NotCategoryFormsRoute: React.FC = () => {
	return (
		<Route
			exact
			path={[
				...routes.map((route) => `${route}/add`),
				...routes.map((route) => `${route}/:id`),
			]}
		>
			<FormNotCategory />
		</Route>
	);
};

export default NotCategoryFormsRoute;
