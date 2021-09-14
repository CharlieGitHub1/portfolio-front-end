import axios from 'axios';
import { createGlobalStyle } from 'styled-components';
import { useState, useEffect } from 'react';

// Components
import { Container } from './components/Container';

const GlobalStyle = createGlobalStyle`

  body {
    font-size: 16px;
    font-family: 'Timmana', sans-serif;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }  

  #app {
    position: relative;
  }
  
`;

const App = () => (
  <>
    <GlobalStyle />
    <div id="template">
      <Container />
    </div>
  </>
)

export default App;
