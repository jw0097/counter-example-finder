import React from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import CodeEditor from './components/CodeEditor';
import FileExplorer from './components/FileExplorer';
import Terminal from './components/Terminal';
import User from './assets/svg/User';
import Search from './assets/svg/Search';

const App = () => {
  return (
    <AppContainer>
      <Header />
      <NavBar pos="left">Left</NavBar>
      <FileExplorer />
      <CodeEditor pos="left">One</CodeEditor>
      <CodeEditor pos="right">Two</CodeEditor>
      <Terminal />
      <NavBar pos="right">Right</NavBar>
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
  gridTemplateColumns: '40px 1fr 1fr 1fr 40px',
  gridTemplateRows: '40px 1fr 0.4fr 30px',
  color: 'white',
  gap: '1px',
}));

export default App;
