import reducers from "../reducer";
import {createStore} from "redux";
const store = createStore(
    reducers , {} ,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;