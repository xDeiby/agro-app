import * as React from "react";
import Menu from "../components/menu";
import Item from "../components/menu/item";
import MenuItem from "../components/menu/menu-item";
import logoAresa from "../config/logos/aresa.e3676c3d.png";

const MenuView: React.FunctionComponent = () => {
    return (
        <Menu>
            <img
                src={logoAresa}
                alt="Logo de Aresa"
                width={150}
                style={{ cursor: "pointer", marginLeft: "30px" }}
            />
            <MenuItem>
                <Item name="Inicio" active={true} />
                <Item
                    name="Ordenes"
                    subMenus={[
                        { name: "Pre-Ordenes" },
                        { name: "Fenologicas" },
                        { name: "No Fenologicas" },
                    ]}
                />
                <Item name="Monitoreo" />
                <Item
                    name="Mantenedores"
                    subMenus={[
                        { name: "Parcelas" },
                        { name: "Cuarteles" },
                        { name: "Sectores" },
                        { name: "Ingrediente Activo" },
                        { name: "Especies" },
                        { name: "Mercados Objetivos" },
                    ]}
                />
            </MenuItem>
            USER
        </Menu>
    );
};

export default MenuView;
