import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import { Route } from "react-router";
import { base_path, order_pathname } from "../config/statics";
import ListPreorders from "../controllers/lists/list-preorders";
import OrderFolderTable from "../controllers/tables/preorders/orderFolder-table";
import FormManteiner from "../views/manteiners/forms/form-manteiner";

const OrdersRoutes: React.FC = () => {
	return (
		<>
			{/* Carpeta de Preordenes */}
			<Route exact path={`/${base_path.order}/${order_pathname.order_folder}`}>
				<OrderFolderTable currentEntity={EntityRelated.ORDER_FOLDER} pathname={"aaa"} />
			</Route>

			<Route
				exact
				path={[
					`/${base_path.order}/${order_pathname.order_folder}/add`,
					`/${base_path.order}/${order_pathname.order_folder}/:id`,
				]}
			>
				<FormManteiner />
			</Route>

			{/* Lista de Preordenes */}
			<Route exact path={`/${base_path.order}/${order_pathname.preorder}/:id`}>
				{/* 
					TODO: Cambiar
				*/}
				<ListPreorders
					entity={EntityRelated.PREORDER}
					entity_rel={EntityRelated.ORDER_FOLDER}
					buttonName={"Editar"}
				/>
			</Route>

			{/* Ordenes Fenologicas */}
			<Route exact path={`/${base_path.order}/${order_pathname.phenological}`}>
				fenologicas
			</Route>

			{/* Ordenes No Fenologicas */}
			<Route exact path={`/${base_path.order}/${order_pathname.no_phenological}`}>
				no-fenologicas
			</Route>
		</>
	);
};

export default OrdersRoutes;
