import styled from 'styled-components';
import { ArticlesData } from '../../data/type';

const CardWrapper = styled.div<{ $isActive: boolean }>`
  display: ${(props) => (props.$isActive ? 'flex' : 'none')};
  flex-direction: column;
  cursor: pointer;
  &:hover {
    transform: translateY(-8px);
    transition: all 0.3s ease-in-out;
  }
`;

const CardImg = styled.img`
  border-radius: 20px;
`;

const CardBody = styled.div`
  h3 {
    font-size: 22px;
    margin-top: 20px;
    font-weight: 600;

    &:hover {
      color: #4d5159;
    }
  }

  p {
    font-size: 16px;
    margin-top: 12px;
    color: #868b94;
    white-space: pre-line;
  }
`;

const SmallTagBox = styled.div`
  display: flex;
`;

const SmallTag = styled.div`
  font-size: 13px;
  height: 30px;
  color: #868b94;
  background-color: #f2f3f6;
  border-radius: 40px;
  padding: 4px 10px;
  margin-top: 24px;
`;

interface CardProps {
  card: ArticlesData;
  isActive: boolean;
}

export default function Card({ card, isActive }: CardProps) {
  return (
    <CardWrapper $isActive={isActive}>
      <CardImg alt="card-img" src={card.thumbnailImg} />
      <CardBody>
        <h3>{card.title}</h3>
        <p>{card.subTitle}</p>
      </CardBody>
      <SmallTagBox>
        {card.categories.map((category) => (
          <SmallTag>{category}</SmallTag>
        ))}
      </SmallTagBox>
    </CardWrapper>
  );
}
