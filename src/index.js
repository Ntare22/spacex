import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import App from './App';
import './styles/app.scss';
import store from './redux/configureStore';

const helmetContext = {};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Space Travelers&apos; Hub</title>
          <meta name="description" content="Working with the real live data from the SpaceX API to build a web application for a company that provides commercial and scientific space travel services." />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <App />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
