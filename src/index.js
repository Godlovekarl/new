import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Root from './containers'
import registerServiceWorker from './registerServiceWorker';

import './styles/css/index.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
