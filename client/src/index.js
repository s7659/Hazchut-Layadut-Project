import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import store from './component/app/store'
import { Provider } from 'react-redux'; 
import 'primereact/resources/themes/lara-light-teal/theme.css'
//import 'primereact/resources/themes/mira/theme.css'
//import 'primereact/resources/themes/saga-green/theme.css'


import './index.css';
import './flags.css';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       
     <Provider store={store}>
       <PrimeReactProvider>
    <App />
    </PrimeReactProvider>
    </Provider>
    
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
