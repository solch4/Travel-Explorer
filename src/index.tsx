import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import axios from "axios";
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import store from "./app/store";

axios.defaults.baseURL = "https://api.mockfly.dev/mocks/b0cdca18-facb-4a9f-a943-5154f890cb80/api"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
