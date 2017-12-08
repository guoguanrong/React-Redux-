import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './router/routes';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore'
const store = configureStore()
// Render the main component into the dom
ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('app')
);
/*
  字体图标库用的fontawesome 
 */ 
