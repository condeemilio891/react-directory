import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Departments from "./pages/Departments";
import Staff from "./pages/Staff";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Staff} />
          <Route exact path="/staff" component={Staff} />
          <Route exact path="/departments" component={Departments} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
