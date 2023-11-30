import { Helmet } from 'react-helmet-async';
import titles from '../routes/titles';
import styled from 'styled-components';
import MainCard from './components/MainCard';
import Tag from './components/Tag';
import Card from './components/Card';
import { useQuery } from 'react-query';
import { getArticles } from '../api/ArticlesController';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const {
    data: cardData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['articles'],
    queryFn: getArticles,
  });

  const [activeTag, setActiveTag] = useState('전체');

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error;

  if (!cardData || cardData.length === 0) return 'No data available';

  const mainCardData = cardData[0];

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
          mainCard={mainCardData}
          onClick={()=>navigate(`/blog/${mainCardData.articleId}`)}
        />
        <TagBox>
          {categories.map((category) => (
            <Tag
              key={category.id}
              text={category.text}
              onClick={() => setActiveTag(category.text)}
              isActive={category.text === activeTag}
            />
          ))}
        </TagBox>
        <CardBox>
          {cardData.map((card) => (
            <Card 
              key={card.articleId} 
              card={card} 
              isActive={card.categories[0] === activeTag || '전체' === activeTag }
              onClick={()=>navigate(`/blog/${card.articleId}`)}
            />
          ))}
        </CardBox>
      </BlogWrapper>
    </>
  );
}

export default BlogPage;
