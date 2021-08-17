import { createStore, combineReducers} from "redux"
import { empReducer } from "../Reducers/empRed";

export const configStore = () => {
    const store = createStore(
        combineReducers({empReducer}),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    );
    return store;
};