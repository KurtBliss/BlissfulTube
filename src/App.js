import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route
          path="/watch"
          render={(props) => (
            <Watch {...props} menu_expanded={this.state.collapse} />
          )}
        /> */}
        {/* <Route path="/channel/:id?" component={Channel} /> */}
        <Route path="/" exact component={Home} />
        <Route path="/test/:channelId" component={Test} />
        <Route path="" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
