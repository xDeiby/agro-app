import * as React from "react";
import MenuView from "./views/menu.view";
import fondo from "./config/images/dashboard.jpg";
import Views from "./views";
import AgroSearch from "./services/azure-search/indexs-instances/AgroSearch";
import { EntityRelated } from "@trifenix/agro-data";

const App: React.FunctionComponent = () => {
    React.useEffect(() => {
        async function fetchGetentities() {
            const busqueda = new AgroSearch();
            const entities = (await busqueda.getEntities(EntityRelated.BARRACK)).data;
            console.log(entities);

            const res = entities.map((result) => result.str.value);
            console.log(res);
        }
        fetchGetentities();
    }, []);

    return (
        <div className="app">
            <header
                // ! Provisorio
                style={{
                    backgroundImage: `url(${fondo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }}
            >
                <MenuView />
            </header>
            <div className="react-body">
                <Views />
            </div>
            {
                <footer
                    style={{
                        position: "fixed",
                        left: "0px",
                        bottom: "0px",
                        display: "block",
                        backgroundColor: "rgba(0,0,0,0.8)",
                        width: "100%",
                        padding: "10px",
                        color: "white",
                    }}
                >
                    AQUI FOOTER (Provisorio)
                </footer>
            }
        </div>
    );
};

export default App;
