import { createStore,applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
export default function Store(initialState){
   return createStore(rootReducer, initialState,applyMiddleware(thunk));
}