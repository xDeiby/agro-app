import { Reducer } from "redux";
import { IExample } from "./actions";
import { ExampleAction } from "./types";

const initialState: IExample[] = [];

const reducer: Reducer<IExample[]> = (state = initialState, action) => {
    switch (action.type) {
        case ExampleAction.ADD:
            return [...state, action.payload as IExample];

        case ExampleAction.DELETE:
            return state.filter(
                (example: IExample) => example !== action.payload
            );

        default:
            return state;
    }
};

export default reducer;
