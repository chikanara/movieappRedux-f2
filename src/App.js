import "./App.css";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Details from "./components/Details";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
        <Route path="/" exact component={MovieList} />
        <Route path="/add" exact component={AddMovie} />
        <Route path="/login" exact component={Login} />
        <Route path="/:id" exact render={(props) => <Details {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
