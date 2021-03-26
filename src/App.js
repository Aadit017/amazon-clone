import './App.css';
import Header from "./components/Header.component"
import Cart from "./components/cart.component"
import Home from "./components/home.component"
import {BrowserRouter as Router,Switch, Route, Link} from "react-router-dom"

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
