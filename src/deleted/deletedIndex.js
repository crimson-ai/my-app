// to launch this, rename this file from 'deletedIndex.js' to 'index.js'

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Hello from './deletedHello';
import reportWebVitals from './reportWebVitals';
import 'tachyons'; // gives us access to HTML class attributes that are already styled

// const root = ReactDOM.createRoot(document.getElementById('root')); // this is where to render what's below
// root.render( // this is what we want to render (App.js) on this page (index.js)
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(<Hello greeting={'Hello, React Ninja!'} />, document.getElementById('root')); // 'greeting' is now a property of the class Hello

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
