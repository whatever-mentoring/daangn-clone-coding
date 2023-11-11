import { Helmet } from 'react-helmet-async';
import titles from '../routes/titles';

function BlogPage() {
  return (
    <>
      <Helmet>
        <title>{titles.blog}</title>
      </Helmet>
      <div>블로그</div>
    </>
  );
}

export default BlogPage;
