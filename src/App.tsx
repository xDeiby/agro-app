import * as React from "react";
import MenuView from "./views/menu.view";
import fondo from "./config/images/dashboard.jpg";
import Views from "./views";
// import AgroSearch from "./services/azure-search/indexs-instances/AgroSearch";
// import { EntityRelated, StringRelated } from "@trifenix/agro-data";
// import { useState } from "react";

const App: React.FunctionComponent = () => {
    // const [nombre, setNombre] = useState<string[][]>();
    // React.useEffect(() => {
    //     async function fetchGetentities() {
    //         const busqueda = new AgroSearch();
    //         const entities = (await busqueda.getEntities(EntityRelated.BARRACK)).data;
    //         const res = entities.map((result) =>
    //             result.str.filter((lol) => lol.index === StringRelated.GENERIC_NAME).map((valor) => valor.value)
    //         );
    //         setNombre(res);
    //     }
    //     fetchGetentities();
    // }, []);

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
            {/* {nombre?.map((pete) => (
                <div key="1">{pete}</div>
            ))} */}
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
