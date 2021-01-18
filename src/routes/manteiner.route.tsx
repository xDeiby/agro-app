import * as React from "react";
import { Route } from "react-router";
import Manteiner from "../views/manteiner.view";

const base_path = "/mantenedor";

const ManteinerRoute: React.FC = () => {
    return (
        <>
            {/* Sectores */}
            <Route exact path={`${base_path}/sectores`}>
                <Manteiner type="sector" />
            </Route>

            {/* Especies */}
            <Route exact path={`${base_path}/especies`}>
                <Manteiner type="specie" />
            </Route>

            {/* Portainjertos */}
            <Route exact path={`${base_path}/portainjertos`}>
                <Manteiner type="rootstock" />
            </Route>

            {/* Variedades */}
            <Route exact path={`${base_path}/variedades`}>
                <Manteiner type="variety" />
            </Route>

            {/* Parcelas */}
            <Route exact path={`${base_path}/parcelas`}>
                <Manteiner type="plotlands" />
            </Route>

            {/* Categorias de Ingredientes */}
            <Route exact path={`${base_path}/categorias_ingredientes`}>
                <Manteiner type="category_ingredients" />
            </Route>

            {/* Eventos Fenologicos */}
            <Route exact path={`${base_path}/eventos_fenologicos`}>
                <Manteiner type="phenological_event" />
            </Route>

            {/* Ingredientes Activos */}
            <Route exact path={`${base_path}/ingredientes_activos`}>
                <Manteiner type="active_ingredient" />
            </Route>

            {/* Entidades Certificadas */}
            <Route exact path={`${base_path}/entidades_certificadas`}>
                <Manteiner type="certifie_entitie" />
            </Route>

            {/* Objetivos de Aplicacions */}
            <Route exact path={`${base_path}/objetivos_aplicacion`}>
                <Manteiner type="application_target" />
            </Route>

            <Route exact path={`${base_path}/cuarteles`}>
                <Manteiner type="barrack" />
            </Route>
        </>
    );
};

export default ManteinerRoute;
