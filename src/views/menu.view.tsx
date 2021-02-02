import * as React from "react";
import Menu from "../components/menu";
import Item from "../components/menu/item";
import MenuItem from "../components/menu/menu-item";
import logoAresa from "../config/logos/aresa.e3676c3d.png";
import { base_path, path_name } from "../config/statics";

const MenuView: React.FunctionComponent = () => {
    return (
        <Menu>
            <img src={logoAresa} alt="Logo de Aresa" width={150} style={{ cursor: "pointer", marginLeft: "30px" }} />
            <MenuItem>
                <Item name="Inicio" active={false} />
                <Item
                    name="Ordenes"
                    subMenus={[
                        { name: "Pre-Ordenes", url: `/${base_path.manteiner}/${path_name.barracks}` },
                        /*  { name: "Fenologicas" },
                        { name: "No Fenologicas" }, */
                    ]}
                />
                <Item name="Monitoreo" />
                <Item
                    name="Mantenedores"
                    subMenus={[
                        { name: "Parcelas", url: `/${base_path.manteiner}/${path_name.plotlands}` },
                        { name: "Cuarteles", url: `/${base_path.manteiner}/${path_name.barracks}` },
                        { name: "Sectores", url: `/${base_path.manteiner}/${path_name.sectors}` },
                        { name: "Ingrediente Activo", url: `/${base_path.manteiner}/${path_name.active_ingredients}` },
                        { name: "Especies", url: `/${base_path.manteiner}/${path_name.species}` },
                        {
                            name: "Eventos Fenologicos",
                            url: `/${base_path.manteiner}/${path_name.phenological_events}`,
                        },
                        { name: "Variedades", url: `/${base_path.manteiner}/${path_name.varietys}` },
                        { name: "Temporadas", url: `/${base_path.manteiner}/${path_name.seasons}` },
                        {
                            name: "Categoria de Ingredientes",
                            url: `/${base_path.manteiner}/${path_name.category_ingredients}`,
                        },
                        {
                            name: "Entidades certificadas",
                            url: `/${base_path.manteiner}/${path_name.certified_entities}`,
                        },
                        { name: "Portainjertos", url: `/${base_path.manteiner}/${path_name.rootstocks}` },
                        {
                            name: "Objetivo de la aplicacion",
                            url: `/${base_path.manteiner}/${path_name.application_targets}`,
                        },
                        // { name: "Mercados Objetivos" },
                    ]}
                />
            </MenuItem>
            USER
        </Menu>
    );
};

export default MenuView;
