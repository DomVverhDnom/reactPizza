import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages/index";
import { setPizzas } from "./redux/actions/pizzas";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    // перенести в Redux и подключить Redux-thunk
    axios.get("http://localhost:3001/pizzas").then(({ data }) => {
      dispatch(setPizzas(data));
    });
  });

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
// export default connect(mapStateToProps, mapDispatchToProps)(App);
