import React from 'react';
import './App.css';
import Dialogs from './components/Navbar/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/Navbar/News/News';
import Music from './components/Navbar/Music/Music';
import Settings from './components/Navbar/Settings/Settings';
import { Route, Redirect } from "react-router-dom";

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Logo />
      <Navbar state={props.state.sidebarPage} />
      <div className='app-wrapper-profile' >
        <Route exact path="/"
          render={() => {
            return (
              <Redirect to="/profile" />)
          }}
        />
        <Route path='/profile' render={() => <Profile state={props.state.profilePage} />} />
        <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
      </div>
    </div>)
}

export default App;
