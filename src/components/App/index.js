import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from '../../features/SearchContext';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Router from "../../Router";
import Header from '../Header';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <SearchProvider>
          <BrowserRouter>
            <Header />
            <Router />
          </BrowserRouter>
        </SearchProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
