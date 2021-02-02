import * as React from "react";
import { Route } from "react-router";
import {
    Rootstock,
    Seasons,
    Sector,
    Species,
    Varietys,
    Plotlands,
    CategoryIngredient,
    CertifiedEntities,
    PhenologicalEvents,
    Barracks,
    AplicationTarget,
    ActiveIngredient,
} from "../views/manteiners";

const base_path = "/mantenedor";

const ManteinerRoute: React.FC = () => {
    return (
        <>
            {/* Sectores */}
            <Route exact path={`${base_path}/sectores/agregar`}>
                <Sector />
            </Route>

            {/* Especies */}
            <Route
                exact
                path={[
                    `${base_path}/especies/agregar`,
                    `${base_path}/especies/:id`,
                ]}
            >
                <Species />
            </Route>

            {/* Portainjertos */}
            <Route
                exact
                path={[
                    `${base_path}/portainjertos/agregar`,
                    `${base_path}/portainjertos/:id`,
                ]}
            >
                <Rootstock />
            </Route>

            {/* Variedades */}
            <Route
                exact
                path={[
                    `${base_path}/variedades/agregar`,
                    `${base_path}/variedades/:id`,
                ]}
            >
                <Varietys />
            </Route>

            {/* Parcelas */}
            <Route
                exact
                path={[
                    `${base_path}/parcelas/agregar`,
                    `${base_path}/parcelas/:id`,
                ]}
            >
                <Plotlands />
            </Route>

            {/* Categorias de Ingredientes */}
            <Route
                exact
                path={[
                    `${base_path}/categoria_ingredientes/agregar`,
                    `${base_path}/categoria_ingredientes/:id`,
                ]}
            >
                <CategoryIngredient />
            </Route>

            {/* Eventos Fenologicos */}
            <Route
                exact
                path={[
                    `${base_path}/eventos_fenologicos/agregar`,
                    `${base_path}/eventos_fenologicos/:id`,
                ]}
            >
                <PhenologicalEvents />
            </Route>

            {/* Ingredientes Activos */}
            <Route
                exact
                path={[
                    `${base_path}/ingrediientes_activos/agregar`,
                    `${base_path}/ingrediientes_activos/:id`,
                ]}
            >
                <ActiveIngredient />
            </Route>

            {/* Entidades Certificadas */}
            <Route
                exact
                path={[
                    `${base_path}/entidades_certificadas/agregar`,
                    `${base_path}/entidades_certificadas/:id`,
                ]}
            >
                <CertifiedEntities />
            </Route>

            {/* Objetivos de Aplicacions */}
            <Route
                exact
                path={[
                    `${base_path}/objetivos_aplicacion/agregar`,
                    `${base_path}/objetivos_aplicacion/:id`,
                ]}
            >
                <AplicationTarget />
            </Route>

            <Route
                exact
                path={[
                    `${base_path}/cuarteles/agregar`,
                    `${base_path}/cuarteles/:id`,
                ]}
            >
                <Barracks />
            </Route>

            {/* Temporadas */}
            <Route
                exact
                path={[
                    `${base_path}/temporadas/agregar`,
                    `${base_path}/temporadas/:id`,
                ]}
            >
                <Seasons />
            </Route>
        </>
    );
};

export default ManteinerRoute;
