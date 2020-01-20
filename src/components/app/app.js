import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../../containers/home';
import Layout from '../layout';
import Variables from '../variables';
import Variable from '../variable';
import Header from '../header';
import ErrorBoundary from '../error-boundry';

const App = () => (
  <ErrorBoundary>
    <Router>
      <Header />
      <Layout>
        {/* добавь ещё класс для перехода на активную ссылку и можеш коммитеть! */}
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