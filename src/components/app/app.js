import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../../containers/home';
import Layout from '../layout';
import Variables from '../variables';
import Variable from '../variable';
import Header from '../header';
import ErrorBoundary from '../error-boundry';

const App = () => (
  <ErrorBoundary>
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/variables/:id" component={Variable} />
          <Route path="/variables" component={Variables} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  </ErrorBoundary>
)

export default App