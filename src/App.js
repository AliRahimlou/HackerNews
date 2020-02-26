import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import signIn from "./pages/signin";
import home from "./pages/home";



function App() {
  return (
    <Router>
      <div>
        
        <Route exact path="/" component={signIn} />
        <Route exact path="/home" component={home} />
       
        
      </div>
    </Router>
  );
}

export default App;
