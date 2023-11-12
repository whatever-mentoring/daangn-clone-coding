import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 160px;
  border-top: solid 1px #f2f3f6;
  padding: 70px 0px 96px 0px;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 0px 24px;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  display: flex;
  /* 임의 설정 */
  gap: 500px;
  align-items: center;
  justify-content: space-between;
  ul {
    padding: 0;
    display: flex;
    margin: 0px;
  }
`;

const NavLink = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #212124;
  cursor: pointer;
  a {
    display: inline-flex;
    align-items: center;
    opacity: 1;
  }
  a > h4 {
    font-size: 13px;
    font-weight: 600;
  }
  a > img {
    width: 16px;
    height: 16px;
  }
  &:hover {
    color: #868b94;
    filter: invert(57%) sepia(4%) saturate(791%) hue-rotate(180deg) brightness(97%) contrast(77%);
  }
`;

const SnsLink = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  &:hover {
    filter: invert(57%) sepia(4%) saturate(791%) hue-rotate(180deg) brightness(97%) contrast(77%);
  }
`;

const InfoContainer = styled.div`
  font-size: 14px;
  color: #868b94;
  font-weight: 400;
  div {
    display: flex;
  }
  a {
    text-decoration: underline;
  }
`;

export default function Footer() {
  const SnsList = [
    {
      id: 0,
      name: 'github',
      path: '/assets/github.svg',
    },
    {
      id: 1,
      name: 'medium',
      path: '/assets/medium.svg',
    },
    {
      id: 2,
      name: 'facebook',
      path: '/assets/facebook.svg',
    },
    {
      id: 3,
      name: 'instagram',
      path: '/assets/instagram.svg',
    },
  ];

  const address = '주소 : 서울특별시 서초구 강남대로 465, 교보강남타워 11층';

  return (
    <FooterWrapper>
      <FooterContainer>
        <NavContainer>
          <ul>
            <NavLink>
              <a href="https://daangn.notion.site/2b7689002cd847d78155695b5b194838">
                <h4>개인정보처리방침</h4>
                <img src="/assets/external.svg" />
              </a>
            </NavLink>
            <NavLink style={{ marginLeft: '48px' }}>
              <a href="https://daangn.notion.site/2b7689002cd847d78155695b5b194838">
                <p>브랜드 리소스</p>
                <img src="/assets/external.svg" />
              </a>
            </NavLink>
            <NavLink style={{ marginLeft: '48px' }}>자주 묻는 질문</NavLink>
            <NavLink style={{ marginLeft: '48px' }}>IR</NavLink>
            <NavLink style={{ marginLeft: '48px' }}>PR</NavLink>
          </ul>
          <ul style={{ display: 'flex', gap: '24px' }}>
            {SnsList.map((sns) => (
              <SnsLink alt={sns.name} src={sns.path} />
            ))}
          </ul>
        </NavContainer>
        <InfoContainer>
          <div>
            <p style={{ marginRight: '8px' }}>{address}</p>
            <p>
              (IR 관련 문의 : <a href="mailto:ir@daangn.com">ir@daangn.com</a>)
            </p>
          </div>
          <p>
            (채용 관련 문의 : <a href="mailto:recruit@daangn.com">recruit@daangn.com</a>)
          </p>
          <p style={{ fontSize: '13px', color: '#868b94', fontWeight: 600, marginTop: '16px' }}>
            © 당근마켓
          </p>
        </InfoContainer>
      </FooterContainer>
    </FooterWrapper>
  );
}
