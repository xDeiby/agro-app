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

const base_path = "/manteiner";

const ManteinerRoute: React.FC = () => {
    return (
        <>
            {/* Sectores */}
            <Route
                exact
                path={[`${base_path}/sectors/add`, `${base_path}/sectors/:id`]}
            >
                <Sector />
            </Route>

            {/* Especies */}
            <Route
                exact
                path={[`${base_path}/species/add`, `${base_path}/species/:id`]}
            >
                <Species />
            </Route>

            {/* Portainjertos */}
            <Route
                exact
                path={[
                    `${base_path}/rootstocks/add`,
                    `${base_path}/rootstocks/:id`,
                ]}
            >
                <Rootstock />
            </Route>

            {/* Variedades */}
            <Route
                exact
                path={[
                    `${base_path}/varietys/add`,
                    `${base_path}/varietys/:id`,
                ]}
            >
                <Varietys />
            </Route>

            {/* Parcelas */}
            <Route
                exact
                path={[
                    `${base_path}/plotlands/agregar`,
                    `${base_path}/plotlands/:id`,
                ]}
            >
                <Plotlands />
            </Route>

            {/* Categorias de Ingredientes */}
            <Route
                exact
                path={[
                    `${base_path}/category_ingredients/add`,
                    `${base_path}/category_ingredients/:id`,
                ]}
            >
                <CategoryIngredient />
            </Route>

            {/* Eventos Fenologicos */}
            <Route
                exact
                path={[
                    `${base_path}/phenological_events/add`,
                    `${base_path}/phenological_events/:id`,
                ]}
            >
                <PhenologicalEvents />
            </Route>

            {/* Ingredientes Activos */}
            <Route
                exact
                path={[
                    `${base_path}/ingredientes_activos/agregar`,
                    `${base_path}/ingredientes_activos/:id`,
                ]}
            >
                <ActiveIngredient />
            </Route>

            {/* Entidades Certificadas */}
            <Route
                exact
                path={[
                    `${base_path}/certified_entities/agregar`,
                    `${base_path}/certified_entities/:id`,
                ]}
            >
                <CertifiedEntities />
            </Route>

            {/* Objetivos de Aplicacions */}
            <Route
                exact
                path={[
                    `${base_path}/aplication_targets/agregar`,
                    `${base_path}/aplication_targets/:id`,
                ]}
            >
                <AplicationTarget />
            </Route>

            <Route
                exact
                path={[
                    `${base_path}/barracks/agregar`,
                    `${base_path}/barracks/:id`,
                ]}
            >
                <Barracks />
            </Route>

            {/* Temporadas */}
            <Route
                exact
                path={[
                    `${base_path}/seasons/agregar`,
                    `${base_path}/seasons/:id`,
                ]}
            >
                <Seasons />
            </Route>
        </>
    );
};

export default ManteinerRoute;
