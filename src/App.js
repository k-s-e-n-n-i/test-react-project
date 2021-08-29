import { Router, Route } from 'react-router-dom';
import './pages/start-page/start-page.scss';
import Link from './blocks/link/link';
import StartPage from './pages/start-page/start-page';
import LandingPage from './pages/landing-page/landing-page';

function App() {
  return (
    <div class="start-page">
      <h2>Pages Toxin:</h2>
      <div class="start-page__links">
        <Link classBlock="start-page__link" text="landing page" url="./landing-page.html" />
        <Link classBlock="start-page__link" text="registration" />
        <Link classBlock="start-page__link" text="sing in" />
        <Link classBlock="start-page__link" text="search room" />
      </div>
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={StartPage} />
            <Route exact path="/landing-page" component={LandingPage} />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
