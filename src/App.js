import React from "react";

import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages/index";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route exact path="/Cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
