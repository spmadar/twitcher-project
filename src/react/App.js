import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import RegistrationForm from "./components/RegistrationForm";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path= "/signup" component={RegistrationForm}/>
        <Route exact path="/profiles/:username" component={Profile} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
