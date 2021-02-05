import * as React from "react";
import { Route } from "react-router";
import { base_path, path_name } from "../config/statics";
import {
    BarrackTable,
    ActiveIngredientTable,
    SectorTable,
    CategoryIngredientTable,
    SpecieTable,
    PlotlandTable,
    VarietyTable,
    SeasonTable,
    RootstockTable,
    ApplicationTargetTable,
    CertiedEntitiesTable,
    PhenologicalEventTable,
} from "../views/tableManteiner";

const ManteinerTableRoute: React.FC = () => {
    return (
        <>
            {/* Sectores */}
            <Route exact path={`/${base_path.manteiner}/${path_name.sectors}`}>
                <SectorTable />
            </Route>

            {/* Especies */}
            <Route exact path={`/${base_path.manteiner}/${path_name.species}`}>
                <SpecieTable />
            </Route>

            {/* Portainjertos */}
            <Route exact path={`/${base_path.manteiner}/${path_name.rootstocks}`}>
                {" "}
                <RootstockTable />
            </Route>

            {/* Variedades */}
            <Route exact path={`/${base_path.manteiner}/${path_name.varietys}`}>
                {" "}
                <VarietyTable />{" "}
            </Route>

            {/* Parcelas */}
            <Route exact path={`/${base_path.manteiner}/${path_name.plotlands}`}>
                {" "}
                <PlotlandTable />
            </Route>

            {/* Categorias de Ingredientes */}
            <Route exact path={`/${base_path.manteiner}/${path_name.category_ingredients}`}>
                <CategoryIngredientTable />
            </Route>

            {/* Eventos Fenologicos */}
            <Route exact path={`/${base_path.manteiner}/${path_name.phenological_events}`}>
                <PhenologicalEventTable />
            </Route>

            {/* Ingredientes Activos */}
            <Route exact path={`/${base_path.manteiner}/${path_name.active_ingredients}`}>
                <ActiveIngredientTable />
            </Route>

            {/* Entidades Certificadas */}
            <Route exact path={`/${base_path.manteiner}/${path_name.certified_entities}`}>
                {" "}
                <CertiedEntitiesTable />
            </Route>

            {/* Objetivos de Aplicacions */}
            <Route exact path={`/${base_path.manteiner}/${path_name.application_targets}`}>
                <ApplicationTargetTable />
            </Route>

            {/*Cuarteles*/}
            <Route exact path={`/${base_path.manteiner}/${path_name.barracks}`}>
                <BarrackTable />
            </Route>

            {/* Temporadas */}
            <Route exact path={`/${base_path.manteiner}/${path_name.seasons}`}>
                <SeasonTable />
            </Route>
        </>
    );
};

export default ManteinerTableRoute;
