import '../css/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';

ReactDOM.render(<App age={38} />, document.getElementById('app'));
