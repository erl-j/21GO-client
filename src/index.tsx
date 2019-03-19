import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './css/main.css';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
