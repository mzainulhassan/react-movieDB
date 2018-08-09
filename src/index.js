import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import movieDetail from './movieDetail';
import tvDetail from './tvDetail';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from './store';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>                
                <Route exact path="/" component={App} />
                <Route exact path="/detail/movie" component={movieDetail} />
                <Route exact path="/detail/tv" component={tvDetail} />
            </Switch>
        </BrowserRouter>
    </Provider>
    ),document.getElementById('root'));
registerServiceWorker();
