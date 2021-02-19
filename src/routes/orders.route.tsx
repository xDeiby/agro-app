import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import { Route } from "react-router";
import List from "../components/list";
import { base_path, order_pathname } from "../config/statics";
import OrderFolderTable from "../controllers/tables/preorders/orderFolder-table";

const TablesRoutes: React.FC = () => {
	return (
		<>
			{/* Carpeta de PreOrders */}
			<Route exact path={`/${base_path.order}/${order_pathname.order_folder}`}>
				<OrderFolderTable entity={EntityRelated.ORDER_FOLDER} />
			</Route>

			{/* Lista de Preordenes */}
			<Route exact path={`/${base_path.order}/${order_pathname.preorder}/:id`}>
				{/* 
					TODO: Cambiar
				*/}
				<List />
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

export default TablesRoutes;
