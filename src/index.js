import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-static-generator';

render(<App />, document.getElementById('root'));
registerServiceWorker();
