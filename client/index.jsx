import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app';

//example listing Id
ReactDOM.render(<App listingId={Math.floor(Math.random() * 99)}/>, document.getElementById('schedule'));
