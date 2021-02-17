import * as React from "react";
import Boton from "../components/buttons/button";
import Menu from "../components/menu";
import Burger from "../components/menu/burger/burger";
import Item from "../components/menu/item";
import MenuItem from "../components/menu/menu-item";
import { base_path, path_name } from "../config/statics";

const MenuView: React.FunctionComponent = () => {
	return (
		<Menu>
			{/* <img
				src={logoAresa}
				alt="Logo de Aresa"
				width={150}
				style={{ cursor: "pointer", marginLeft: "30px" }}
			/> */}
			<MenuItem>
				<Item name="Inicio" active={true} TypeMenus={"menu"} />
				<Item
					TypeMenus={"menu"}
					name="Ordenes"
					subMenus={[
						{ name: "Pre-Ordenes" },
						{ name: "Fenologicas" },
						{ name: "No Fenologicas" },
					]}
				/>
				<Item name="Monitoreo" TypeMenus={"menu"} />
				<Item
					TypeMenus={"menu"}
					name="Mantenedores"
					subMenus={[
						{ name: "Parcelas", url: `/${base_path.manteiner}/${path_name.plotlands}` },
						{
							name: "Cuarteles",
							url: `/${base_path.manteiner}/${path_name.barracks}`,
						},
						{ name: "Sectores", url: `/${base_path.manteiner}/${path_name.sectors}` },
						{
							name: "Ingrediente Activo",
							url: `/${base_path.manteiner}/${path_name.active_ingredients}`,
						},
						{ name: "Especies", url: `/${base_path.manteiner}/${path_name.species}` },
						{
							name: "Mercados Objetivos",
							url: `/${base_path.manteiner}/${path_name.application_targets}`,
						},
						{
							name: "Entidades Certificadas",
							url: `/${base_path.manteiner}/${path_name.certified_entities}`,
						},
						{
							name: "Portainjertos",
							url: `/${base_path.manteiner}/${path_name.rootstocks}`,
						},
						{
							name: "Eventos Fenologicos",
							url: `/${base_path.manteiner}/${path_name.phenological_events}`,
						},
					]}
				/>
			</MenuItem>
			<Boton typeButton="user"> Usuario</Boton>
			<Burger />
		</Menu>
	);
};

export default MenuView;
