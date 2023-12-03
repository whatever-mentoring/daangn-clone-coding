import { Helmet } from 'react-helmet-async';
import titles from '../routes/titles';

function ServicePage() {
  return (
    <>
      <Helmet>
        <title>{titles.service}</title>
      </Helmet>
      <div>서비스</div>
    </>
  );
}

export default ServicePage;
