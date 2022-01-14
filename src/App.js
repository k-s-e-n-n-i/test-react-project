import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { basename } from './modules/functions/functions';

import './pages/start-page/start-page.scss';

import Layout from './components/layout/layout';
import StartPage from './pages/start-page/start-page';
import LandingPage from './pages/landing-page/landing-page';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.data = {};
  }
  render() {
    const startPage = () => <StartPage />;
    const landingPage = () => <LandingPage />;

    return (
      <Router basename={basename}>
        <Switch>
          <Route exact path="/">
            <Layout header={0} content={startPage} footer={0} />
          </Route>
          <Route exact path="/landing-page.html">
            <Layout content={landingPage} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
