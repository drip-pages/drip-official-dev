import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
        <App />,
    document.getElementById('root'),
);

// オフラインにて読み込みを早くしたい場合、regisuter()をunregister()に変更してください。
// ただし、いくつかの注意点があります。: https://bit.ly/CRA-PWA
serviceWorker.unregister();
