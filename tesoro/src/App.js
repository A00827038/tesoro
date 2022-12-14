import React, {Component} from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import LandingPage from './components/layout/LandingPage/LandingPage';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';

class App extends Component {
  
  render(){
    
    return(
      <BrowserRouter>
        <div className="App notranslate" lang="es" translate="no">
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;

