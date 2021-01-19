import { Store, createStore, compose } from "redux";
import { IExample } from "./ducks/example/actions";
import rootReducer from "./ducks/rootReducer";
export interface AplicationState {
    examples: IExample[];
}
/*

Solo se Prepara el entorno con un reducer de prueba, aun no se implementa logica de redux.

*/

// Redux DevTools

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//

// Middlewares

//

// Store
const store: Store<AplicationState> = createStore(
    rootReducer,
    composeEnhancers()
);

export default store;
