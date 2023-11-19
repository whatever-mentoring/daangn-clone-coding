import styled from 'styled-components';

const CardWrapper = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  cursor: pointer;
  /* margin: 0 48px; */

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

export default function Card(props: any) {
  return (
    <CardWrapper>
      <CardImg alt="card-img" src={props.thumbnailImg} />
      <CardBody>
        <h3>{props.title}</h3>
        <p>{props.subTitle}</p>
      </CardBody>
      <SmallTagBox>
        <SmallTag>{props.catergories}</SmallTag>
      </SmallTagBox>
    </CardWrapper>
  );
}
