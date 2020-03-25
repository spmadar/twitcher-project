import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import MessageFeed from "./MessageFeed";
import Signup from "./components/Signup";
import RegistrationForm from "./components/RegistrationForm";
import 'semantic-ui-css/semantic.min.css';
// import styled from 'styled-components';


class App extends React.Component {
    state = {
      tweets: [
        {
          id: 1,
          profileImage: '../img/renfri.png',
          name: 'Renfri',
          tweet: 'Sometimes I feel like the whole world is out to get me. God knows I’m only in Blaviken to kill that bastard Stregobor. Any man strong enough to defy medieval misogyny, meet me in the Tavern.'
      },
      {
        id: 2,
        profileImage: '../img/stregobor.png',
        name: 'Stregobor',
        tweet: 'The Curse of the Black Sun has plagued humanity for decades; the time is now nigh for this wretched period to finally come to a close. Anybody who is willing to eliminate King Fredefalk of Creyden’s bastard daughter, the last daughter of Lilit, I will shower with naked women.'
      },
      {
        id: 3,
        profileImage: '../img/yennefer.png',
        name: 'Yennefer',
        tweet: 'Sigh… Portal-hopping to this extent is terrible for my complexion. I really don’t appreciate @Lyria sending some kind of mage assassin to kill this entitled-ass Aedirn queen I’m supposed to be protecting……. Crap! He just got the kid too. Help!'
      },
      {
        id: 4,
        profileImage: '../img/striga.png',
        name: 'Striga',
        tweet: 'Guuuuuuuurgrlgkmsl….. AHKSAH!!! RAra. Withcheererrrssssssssssssssss……. Aha… pull up…'
      }
    ]
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path= "/signup" component={RegistrationForm}/>
        <Route exact path="/profiles/:username" component={Profile} />
        <Route exact path="/messagefeed" component={MessageFeed} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
