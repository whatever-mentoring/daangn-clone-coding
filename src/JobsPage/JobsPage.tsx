import { Helmet } from 'react-helmet-async';
import titles from '../routes/titles';

function JobsPage() {
  return (
    <>
      <Helmet>
        <title>{titles.jobs}</title>
      </Helmet>
      <div>채용공고</div>
    </>
  );
}

export default JobsPage;
