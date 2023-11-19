import { Helmet } from 'react-helmet-async';
import titles from '../routes/titles';
import styled from 'styled-components';
import MainCard from './components/MainCard';
import Tag from './components/Tag';
import Card from './components/Card';
import { useQuery } from 'react-query';
import { getArticles } from '../api/ArticlesController';

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0px 120px 0px 120px;
`;

const TagBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 44px;
  margin: 0px 48px;
`;

const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 3rem;
  column-gap: 6rem;
  margin: 44px 48px 0px 48px;

  a {
    display: flex;
    justify-items: center;
    justify-content: center;
  }
`;

function BlogPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['articles'],
    queryFn: getArticles,
  });

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error;

  const mainCardData = data.data[0];
  const cardData = data.data;

  const categories = [
    { id: 0, text: '전체' },
    { id: 1, text: '문화' },
    { id: 2, text: '서비스' },
    { id: 3, text: '커리어' },
  ];

  return (
    <>
      <Helmet>
        <title>{titles.blog}</title>
      </Helmet>
      <BlogWrapper>
        <MainCard
          title={mainCardData.title}
          subTitle={mainCardData.subTitle}
          thumbnailImg={mainCardData.thumbnailImg}
        />
        <TagBox>
          {categories.map((tag) => (
            <Tag key={tag.id} text={tag.text} />
          ))}
        </TagBox>
        <CardBox>
          {cardData.map((card: any) => (
            <Card
              key={card.id}
              title={card.title}
              subTitle={card.subTitle}
              catergories={card.categories}
              thumbnailImg={card.thumbnailImg}
            />
          ))}
        </CardBox>
      </BlogWrapper>
    </>
  );
}

export default BlogPage;
