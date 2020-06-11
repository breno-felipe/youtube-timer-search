import React from 'react';
import GlobalProvider from './styles/global';
import Header from './components/Header/header';
import Youtube from './components/Youtube/youtube';

function App() {
  return (
    <>
      <GlobalProvider />
      <Header />
      <Youtube />
    </>
  );
}

export default App;
