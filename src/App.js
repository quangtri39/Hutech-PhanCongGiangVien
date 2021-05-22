import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import InputFiles from "./components/InputFile/InputFiles";
import NavBar from "./components/NavBar/NavBar";
import React from "react";
import Tables from "./components/Table/Tables";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchTab from "./components/SearchTab/SearchTab";

function App() {
  const [isCompare, setIsCompare] = React.useState(false);
  return (
    <Router>
      <NavBar color="dark" />
      <Switch>
        <Route exact path="/">
          <InputFiles setIsCompare={setIsCompare} />
          <Tables isCompare={isCompare} />
        </Route>
        <Route path="/timkiem">
          <SearchTab />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
