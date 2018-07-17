import { combineReducers } from "redux"

import news from "./news"
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer =  combineReducers({
    news,
    ajaxCallsInProgress
});

export default rootReducer;