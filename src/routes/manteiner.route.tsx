import * as React from "react";
import { Route } from "react-router";
import { base_path, path_name } from "../config/statics";
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

const ManteinerRoute: React.FC = () => {
    return (
        <>
            {/* Sectores */}
            <Route
                exact
                path={[
                    `/${base_path.manteiner}/${path_name.sectors}/add`,
                    `/${base_path.manteiner}/${path_name.sectors}/:id`,
                ]}
            >
                <Sector />
            </Route>

            {/* Especies */}
            <Route
                exact
                path={[
                    `/${base_path.manteiner}/${path_name.species}/add`,
                    `/${base_path.manteiner}/${path_name.species}/:id`,
                ]}
            >
                <Species />
            </Route>

            {/* Portainjertos */}
            <Route
                exact
                path={[
                    `/${base_path.manteiner}/${path_name.rootstocks}/add`,
                    `/${base_path.manteiner}/${path_name.rootstocks}/:id`,
                ]}
            >
                <Rootstock />
            </Route>

            {/* Variedades */}
            <Route
                exact
                path={[
                    `/${base_path.manteiner}/${path_name.varietys}/add`,
                    `/${base_path.manteiner}/${path_name.varietys}/:id`,
                ]}
            >
                <Varietys />
            </Route>

            {/* Parcelas */}
            <Route
                exact
                path={[
                    `/${base_path.manteiner}/${path_name.plotlands}/add`,
                    `/${base_path.manteiner}/${path_name.plotlands}/:id`,
                ]}
            >
                <Plotlands />
            </Route>

            {/* Categorias de Ingredientes */}
            <Route
                exact
                path={[
                    `/${base_path.manteiner}/${path_name.category_ingredients}/add`,
                    `/${base_path.manteiner}/${path_name.category_ingredients}/:id`,
                ]}
            >
                <CategoryIngredient />
            </Route>

            {/* Eventos Fenologicos */}
            <Route
                exact
                path={[
                    `/${base_path.manteiner}/${path_name.phenological_events}/add`,
                    `/${base_path.manteiner}/${path_name.phenological_events}/:id`,
                ]}
            >
                <PhenologicalEvents />
            </Route>

            {/* Ingredientes Activos */}
            <Route
                exact
                path={[
                    `/${base_path.manteiner}/${path_name.active_ingredients}/add`,
                    `/${base_path.manteiner}/${path_name.active_ingredients}/:id`,
                ]}
            >
                <ActiveIngredient />
            </Route>

            {/* Entidades Certificadas */}
            <Route
                exact
                path={[
                    `/${base_path.manteiner}/${path_name.certified_entities}/add`,
                    `/${base_path.manteiner}/${path_name.certified_entities}/:id`,
                ]}
            >
                <CertifiedEntities />
            </Route>

            {/* Objetivos de Aplicacions */}
            <Route
                exact
                path={[
                    `/${base_path.manteiner}/${path_name.application_targets}/add`,
                    `/${base_path.manteiner}/${path_name.application_targets}/:id`,
                ]}
            >
                <AplicationTarget />
            </Route>

            <Route
                exact
                path={[
                    `/${base_path.manteiner}/${path_name.barracks}/add`,
                    `/${base_path.manteiner}/${path_name.barracks}/:id`,
                ]}
            >
                <Barracks />
            </Route>

            {/* Temporadas */}
            <Route
                exact
                path={[
                    `/${base_path.manteiner}/${path_name.seasons}/add`,
                    `/${base_path.manteiner}/${path_name.seasons}/:id`,
                ]}
            >
                <Seasons />
            </Route>
        </>
    );
};

export default ManteinerRoute;
