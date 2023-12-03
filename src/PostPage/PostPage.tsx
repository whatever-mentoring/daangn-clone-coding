import { Helmet } from 'react-helmet-async';
import titles from '../routes/titles';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { getDetailArticle } from '../api/DetailArticleController';
import { useParams } from 'react-router-dom';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0px 120px 0px 120px;
`;

const PostArticle = styled.div`
  margin: 0px 126px;
  p {
    padding: 0 24px;
  }
`;

const PostTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 66px;
  h1 {
    font-size: 42px;
    margin-bottom: 12px;
  }
  div {
    font-size: 16px;
    color: #868b94;
  }
`;

const PostImage = styled.div`
  padding: 0 24px;
  img {
    object-fit: cover;
    border-radius: 30px;
    margin-bottom: 88px;
  }
`;

function PostPage() {
  const params = useParams();

  const {
    data: detailCardData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['detailarticle', params.id],
    queryFn: () => getDetailArticle(Number(params.id)),
  });

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error;

  if (!detailCardData) return 'No data available';

  return (
    <>
      <Helmet>
        <title>{titles.blog}</title>
      </Helmet>
      <PostWrapper>
        <PostArticle>
          <PostTitle>
            <h1>{detailCardData.title}</h1>
            <div>{detailCardData.createdAt}</div>
          </PostTitle>
          <PostImage>
            <img src={detailCardData.thumbnailImg} alt="detail-image" />
          </PostImage>
          <p>{detailCardData.content}</p>
        </PostArticle>
      </PostWrapper>
    </>
  );
}

export default PostPage;
