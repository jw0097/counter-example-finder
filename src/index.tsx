import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import EmotionThemeProvider from './utils/Provider/EmotionThemeProvider';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <EmotionThemeProvider>
    <App />
  </EmotionThemeProvider>,
);
