import * as React from "react";
import MenuView from "./views/menu.view";
import fondo from "./config/images/dashboard.jpg";
import Views from "./views";
const App: React.FunctionComponent = () => {
    // const [nombre, setNombre] = useState<string[][]>();
    // React.useEffect(() => {
    //     const fetchData = async () => {
    //         const myWea = new AgroSearch();
    //         const wea = (await myWea.getEntities(1)).data;
    //         console.log(wea);
    //     };
    //     fetchData();
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
