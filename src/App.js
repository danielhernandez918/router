import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import Keyword from './components/Keyword'


const Home = (props) => {
  return (
    <h1 style={{color: "red"}}>Home Component</h1>
  );
}
    
const About = (props) => {
  return (
    <h1 style={{color: "blue"}}>About Component</h1>
  );
}
    
function App() {
  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      <p>
        <Link to="/">Home</Link>
        | 
        <Link to="/about">About</Link>  
        |
        <a href="http://google.com">Google</a>
      </p>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        {/* question mark makes it optional */}
        <Route path="/search/:keyword">
          <Keyword />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
    
export default App;