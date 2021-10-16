import React from 'react';
import Layout from './components/layout/Layout';
import AppRouter from './AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/global.scss';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <AppRouter />
        </Layout>
      </Router>
    </div>
  );
};

export default App;
