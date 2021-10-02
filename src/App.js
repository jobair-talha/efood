import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import GetProduct from "./components/GetProduct/GetProduct";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/product">
          <Home></Home>
        </Route>
        <Route exact path="/product/:productId">
          <GetProduct></GetProduct>
        </Route>
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
