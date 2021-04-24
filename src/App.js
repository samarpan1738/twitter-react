import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from "./Pages/Login/Login"
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Notifications from './Pages/Notifications/Notifications';
import Messages from './Pages/Messages/Messages';
import Explore from './Pages/Explore/Explore';
import Settings from './Pages/Settings/Settings';
import Bookmarks from './Pages/Bookmarks/Bookmarks';
/*

/ - Landing Page/Auth 
/home - User will come here after login
/explore -
/notifications 
/messages
/messages/:id
/bookmarks
/profile/:username
/settings/:section
/compose/tweet - overlay ComposeTweetModal on top of page
*/
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact="true">
          <Login/>
        </Route>
        <Route path="/home" exact="true">
          <Home/>
        </Route>
        <Route path="/explore" exact="true">
          <Explore/>
        </Route>
        <Route path="/notifications" exact="true">
          <Notifications/>
        </Route>
        <Route path="/messages" exact="true">
          <Messages/>
        </Route>
        <Route path="/messages/:id" exact="true">
          <Messages/>
        </Route>
        <Route path="/bookmarks" exact="true">
          <Bookmarks/>
        </Route>
        <Route path="/profile/:username" exact="true">
          <Profile/>
        </Route>
        <Route path="/settings/:section" exact="true">
          <Settings/>
        </Route>
        <Route path="/compose/tweet" exact="true">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
