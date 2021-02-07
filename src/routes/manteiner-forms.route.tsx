import * as React from "react";
import { Route } from "react-router";
import { base_path, path_name } from "../config/statics";
import FormManteiner from "../views/manteiners/forms/form-manteiner";

const routes = Object.values(path_name).map((path) => `/${base_path.manteiner}/${path}`);

const ManteinerFormsRoute: React.FC = () => {
	return (
		<Route
			exact
			path={[
				...routes.map((route) => `${route}/add`),
				...routes.map((route) => `${route}/:id`),
			]}
		>
			<FormManteiner />
		</Route>
	);
};

export default ManteinerFormsRoute;
