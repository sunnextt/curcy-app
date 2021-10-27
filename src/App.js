import { ThemeProvider } from 'styled-components';
import Globalstyles from 'Global';

import Layout from 'Layout';
import theme from 'theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Globalstyles />
      <Layout>content...</Layout>
    </ThemeProvider>
  );
}

export default App;
