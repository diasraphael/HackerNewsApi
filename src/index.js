import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Store from './store/Store';
import { BrowserRouter,Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Details from './components/details/Details';
import Chart from './components/chart/Chart';
import registerServiceWorker from './registerServiceWorker';
import {loadContent} from './actions/news';
const store = Store();
store.dispatch(loadContent());

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <React.Fragment>
                <Route exact path="/" component={App}/>
                <Route exact path="/details" component={Details}/>
                <Route exact path="/chart" component={Chart}/>
            </React.Fragment>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
