import { Helmet } from 'react-helmet-async';
import titles from '../routes/titles';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>{titles.home}</title>
      </Helmet>
      <div>홈</div>
    </>
  );
}

export default HomePage;
