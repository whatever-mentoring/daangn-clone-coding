import { Helmet } from 'react-helmet-async';
import titles from '../routes/titles';

function CompanyPage() {
  return (
    <>
      <Helmet>
        <title>{titles.company}</title>
      </Helmet>
      <div>회사소개</div>
    </>
  );
}

export default CompanyPage;
