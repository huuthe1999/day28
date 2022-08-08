import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CardProvider from './contexts/CardProvider';
import './customnormalize.css';
import './form.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<CardProvider>
			<App />
		</CardProvider>
		,
	</React.StrictMode>,
);
