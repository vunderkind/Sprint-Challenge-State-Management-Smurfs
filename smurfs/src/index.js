//redux setup here
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';	
import {smurfReducer} from './reducers/reducer.js';

//React-main stuff here
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

//store + middleWare logic
const store = createStore(
    smurfReducer, 
    applyMiddleware(thunk,logger)
    );

ReactDOM.render(
<Provider store={store}><App />
</Provider>, document.getElementById("root"));
