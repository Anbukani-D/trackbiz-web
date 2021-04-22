import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(<BrowserRouter basename="/trackbiz"><App /></BrowserRouter>,document.getElementById('root')
);



