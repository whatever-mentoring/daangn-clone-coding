import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 68px;
  justify-content: center;
  background-color: white;
  z-index: 10;
`;

const HeaderBox = styled.div`
  display: flex;
  padding: 0 1.5rem;
  width: 100%;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;
`;

const NavBox = styled.div`
  list-style: none;
  display: flex;
  gap: 56px;
`;

const NavLink = styled.div<{ $active: boolean }>`
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => (props.$active ? '#FF6F0F' : '')};
  &:hover {
    color: ${(props) => (props.$active ? '' : '#868b94')};
  }
`;

export default function Header() {
  const navigate = useNavigate();
  const [activeNavLink, setActiveNavLink] = useState<string>('home');

  const NavList = [
    { id: 0, path: '/company/', text: '회사소개' },
    { id: 1, path: '/culture/', text: '팀문화' },
    { id: 2, path: '/service/', text: '서비스' },
    { id: 3, path: '/blog/', text: '블로그' },
    { id: 4, path: '/jobs/', text: '채용공고' },
  ];

  return (
    <HeaderWrapper>
      <HeaderBox>
        <img
          style={{ height: '36px', cursor: 'pointer' }}
          alt="logo"
          src="/assets/logo.svg"
          onClick={() => {
            navigate('/');
            setActiveNavLink('home');
          }}
        />
        <NavBox>
          {NavList.map((nav) => (
            <NavLink
              key={nav.id}
              onClick={() => {
                navigate(nav.path);
                setActiveNavLink(nav.path);
              }}
              $active={activeNavLink === nav.path}
            >
              {nav.text}
            </NavLink>
          ))}
        </NavBox>
      </HeaderBox>
    </HeaderWrapper>
  );
}
