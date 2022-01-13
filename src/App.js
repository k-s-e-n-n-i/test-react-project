import { BrowserRouter as Router, Route } from 'react-router-dom';
import './pages/start-page/start-page.scss';
import Layout from './components/layout/layout';

import StartPage from './pages/start-page/start-page';
import LandingPage from './pages/landing-page/landing-page';

function App() {
  const startPage = () => <StartPage />;
  const landingPage = () => <LandingPage />;
  return (
    <Router>
      <Route exact path="/">
        <Layout header={0} content={startPage} footer={0} />
      </Route>
      <Route exact path="/landing-page.html">
        <Layout content={landingPage} />
      </Route>
    </Router>
  );
}

export default App;
