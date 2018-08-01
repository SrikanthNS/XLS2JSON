import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Redirect, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store, { history }  from './store';

store.subscribe(() => {
  console.log('New state', store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </ConnectedRouter>
    </Provider>, document.getElementById('root')
);  

registerServiceWorker();
