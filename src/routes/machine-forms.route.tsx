import * as React from "react";
import { Route } from "react-router";
import { base_path, path_name_machine } from "../config/statics";
import FormMachine from "../views/manteiners/forms/form-machine";

const routes = Object.values(path_name_machine).map((path) => `/${base_path.machine}/${path}`);

const MachineFormsRoute: React.FC = () => {
	return (
		<Route
			exact
			path={[
				...routes.map((route) => `${route}/add`),
				...routes.map((route) => `${route}/:id`),
			]}
		>
			<FormMachine />
		</Route>
	);
};

export default MachineFormsRoute;
