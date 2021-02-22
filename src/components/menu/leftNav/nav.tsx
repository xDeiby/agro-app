import React from "react";
import { base_path, path_name } from "../../../config/statics";
import Item from "../item";
import { Ul } from "./nav.styled";
interface INav {
	open: boolean;
}

const Nav: React.FC<INav> = ({ open }) => {
	return (
		<Ul open={open}>
			<div>{<Item name="Inicio" TypeMenus={"burger"} />}</div>
			{/* <div>
				<li>
					{
						<Item
							TypeMenus={"burger"}
							name="Ordenes"
							subMenus={[
								{ name: "Pre-Ordenes" },
								{ name: "Fenologicas" },
								{ name: "No Fenologicas" },
							]}
						/>
					}
				</div>
			</div> */}
			<div>{<Item name="Monitoreo" TypeMenus={"burger"} />}</div>
			<div>
				{
					<Item
						TypeMenus={"burger"}
						name="Mantenedores"
						subMenus={[
							{
								name: "Parcelas",
								url: `/${base_path.manteiner}/${path_name.plotlands}`,
							},
							{
								name: "Cuarteles",
								url: `/${base_path.manteiner}/${path_name.barracks}`,
							},
							{
								name: "Sectores",
								url: `/${base_path.manteiner}/${path_name.sectors}`,
							},
							{
								name: "Ingrediente Activo",
								url: `/${base_path.manteiner}/${path_name.active_ingredients}`,
							},
							{
								name: "Especies",
								url: `/${base_path.manteiner}/${path_name.species}`,
							},
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
				}
			</div>
			<div>{<Item name="Usuarios" TypeMenus={"burger"} />}</div>
		</Ul>
	);
};

export default Nav;
