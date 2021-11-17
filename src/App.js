import { ThemeProvider } from 'styled-components';
import Globalstyles from 'Global';
import { Switch, Route } from 'react-router-dom';


// layouts

// pages
import Home from 'Pages/Home';
import Contact from 'Pages/Contact';

import theme from 'theme';
import './App.css';
import LayoutContext from './Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Globalstyles />
\      <div className="theContent">
        <Switch>
          <Route exact path="/" render={()=>(

            <LayoutContext>
                <Home/>
            </LayoutContext>
              )
          }/>
          <Route exact path="/contact" render={()=>(

            <LayoutContext>
                <Contact/>
            </LayoutContext>
              )
          }/>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
