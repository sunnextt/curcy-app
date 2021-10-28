import { ThemeProvider } from 'styled-components';
import Globalstyles from 'Global';

import Layout from 'Layout';
import theme from 'theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Globalstyles />
      <div className="theContent">
        <Layout>content...</Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
