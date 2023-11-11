import styled from 'styled-components';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const LayoutWrapper = styled.div`
  margin: 108px 120px 0px 120px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function Layout() {
  const helmetContext = {}
  return (
    <HelmetProvider context={helmetContext}>
      <Header />
      <LayoutWrapper>
        <Outlet />
      </LayoutWrapper>
    </HelmetProvider>
  );
}

export default Layout;
