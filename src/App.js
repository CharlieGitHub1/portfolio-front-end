import { ThemeProvider } from 'styled-components';

// Components
import { Container } from './components/Container';

// Global Styles
import { GlobalStyle } from './global-style';

const App = () => (
  <>
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <div id="template">
        <Container />
      </div>
    </ThemeProvider>
  </>
)

export default App;
