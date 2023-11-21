import styled from 'styled-components';

const MainCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  cursor: pointer;
  margin: 0px 48px 100px 48px;
`;

const MainCardImg = styled.img`
  border-radius: 40px;
  max-width: 1200px;
  aspect-ratio: 1160 / 650;
`;

const MainCardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 44px;

  h1 {
    line-height: 39px;
    font-size: 32px;
    margin-bottom: 2px;
    font-weight: 600;
  }

  p {
    line-height: 28px;
    font-size: 18px;
    color: #868b94;
  }
`;

export default function MainCard(props: any) {
  return (
    <MainCardWrapper>
      <MainCardImg alt="main-thumbnail" src={props.thumbnailImg} />
      <MainCardBody>
        <h1>{props.title}</h1>
        <p>{props.subTitle}</p>
      </MainCardBody>
    </MainCardWrapper>
  );
}
