import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from "./context/Context";


ReactDOM.createRoot(document.querySelector("#root")).render(<Context><App /></Context>);

