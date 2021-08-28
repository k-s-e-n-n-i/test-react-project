import './start-page.scss';
import Link from 'src/blocks/link/link';

function StartPage() {
  return (
    <div class="start-page">
      <h2>Pages Toxin:</h2>
      <div class="start-page__links">
        <Link classBlock="start-page__link" text="landing page" url="./landing-page.html" />
        <Link classBlock="start-page__link" text="registration" />
        <Link classBlock="start-page__link" text="sing in" />
        <Link classBlock="start-page__link" text="search room" />
      </div>
    </div>
  );
}

export default StartPage;
