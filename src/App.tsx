import React from 'react';
import styled from '@emotion/styled';
import Header from './components/container/Header';
import Footer from './components/container/Footer';
import NavBar from './components/container/NavBar';
import CodeEditor from './components/container/CodeEditor';
import FileExplorer from './components/container/FileExplorer';
import Terminal from './components/container/Terminal';
import LeftNav from './components/presenter/LeftNav';
import RightNav from './components/presenter/RightNav';

const App = () => {
  return (
    <AppContainer>
      <Header />
      <NavBar pos="left">
        <LeftNav />
      </NavBar>
      <FileExplorer />
      <CodeEditor pos="left">One</CodeEditor>
      <CodeEditor pos="right">Two</CodeEditor>
      <Terminal />
      <NavBar pos="right">
        <RightNav />
      </NavBar>
      <Footer />
    </AppContainer>
  );
};

const AppContainer = styled.div((props) => ({
  backgroundColor: props.theme.palette.black,
  height: '100vh',
  width: '100vw',
  overflow: 'hidden',
  display: 'grid',
  gridTemplateColumns: '40px 0.6fr 1fr 1fr 40px',
  gridTemplateRows: '40px 1fr 0.4fr 30px',
  color: 'white',
  gap: '1px',
}));

export default App;
