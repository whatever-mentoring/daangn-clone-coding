import { Helmet } from 'react-helmet-async';
import titles from '../routes/titles';

function CulturePage() {
  return (
    <>
      <Helmet>
        <title>{titles.culture}</title>
      </Helmet>
      <div>팀문화</div>
    </>
  );
}

export default CulturePage;
