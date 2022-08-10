import React from 'react';
import ReactDOM from 'react-dom/client';
import { DadosContext } from './Contexts/DadosContext';
import App from './pages/App';
import './styles/global.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DadosContext>
      <App />
    </DadosContext>
    
  </React.StrictMode>
);