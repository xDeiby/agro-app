import * as React from "react";
import MenuView from "./views/menu.view";
import fondo from "./config/images/dashboard.jpg";
import Views from "./views";
import AgroSearch from "./services/azure-search/indexs-instances/AgroSearch";

const App: React.FunctionComponent = () => {
    React.useEffect(() => {
        async function fetchGetentities(index: string) {
            const busqueda = new AgroSearch();
            const entities = await busqueda.getEntities(index);
            const rels = entities.data.map((entity) => entity.rel);
            console.log(rels);
            return rels;
        }

        fetchGetentities("1");
    }, []);

    return (
        <div className="app">
            <header
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
