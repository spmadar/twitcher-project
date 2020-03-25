import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import MessageFeed from "./MessageFeed";
import Signup from "./components/Signup";
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path= "/signup" component={Signup}/>
        <Route path="/profiles/:username" component={Profile} />
        <Route path="/messagefeed" component={MessageFeed} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}


export default App;
