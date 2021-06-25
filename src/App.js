import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Notifications from "./pages/Notifications/Notifications";
import Messages from "./pages/Messages/Messages";
import Explore from "./pages/Explore/Explore";
import Settings from "./pages/Settings/Settings";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
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
                <Route path="/" exact={true}>
                    <LandingPage />
                </Route>
                <Route path="/home" exact={true}>
                    <Home />
                </Route>
                <Route path="/explore" exact={true}>
                    <Explore />
                </Route>
                <Route path="/notifications" exact={true}>
                    <Notifications />
                </Route>
                <Route path="/messages" exact={true}>
                    <Messages />
                </Route>
                <Route path="/messages/:id" exact={true}>
                    <Messages />
                </Route>
                <Route path="/bookmarks" exact={true}>
                    <Bookmarks />
                </Route>
                <Route path="/profile/:username" exact={true}>
                    <Profile />
                </Route>
                <Route path="/settings/:section" exact={true}>
                    <Settings />
                </Route>
                <Route path="/compose/tweet" exact={true}>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
