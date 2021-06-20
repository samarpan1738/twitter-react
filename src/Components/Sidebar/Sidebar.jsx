import React from "react";
import classes from "./Sidebar.module.css";
import { ReactComponent as HomeNavIcon } from "../../assets/nav-icons/home.svg";
import { ReactComponent as ProfileNavIcon } from "../../assets/nav-icons/profile.svg";
import { ReactComponent as ExploreNavIcon } from "../../assets/nav-icons/explore.svg";
import { ReactComponent as NotificationNavIcon } from "../../assets/nav-icons/notification.svg";
import { ReactComponent as MessageNavIcon } from "../../assets/nav-icons/message.svg";
import { ReactComponent as BookmarkNavIcon } from "../../assets/nav-icons/bookmark.svg";

function Sidebar() {
    return (
        <div className={classes.Sidebar}>
            <h1>Asylum</h1>
            <ul className={classes.navOptionsList} type="none">
                <li className={classes.navOption}>
                    <span className={classes.navIcon}>
                        <HomeNavIcon />
                    </span>
                    <span className={classes.navLabel}>Home</span>
                </li>
                <li className={classes.navOption}>
                    <span className={classes.navIcon}>
                        <ExploreNavIcon />
                    </span>
                    <span className={classes.navLabel}>Explore</span>
                </li>
                <li className={classes.navOption}>
                    <span className={classes.navIcon}>
                        <NotificationNavIcon />
                    </span>
                    <span className={classes.navLabel}>Notifications</span>
                </li>
                <li className={classes.navOption}>
                    <span className={classes.navIcon}>
                        <MessageNavIcon />
                    </span>
                    <span className={classes.navLabel}>Messages</span>
                </li>
                <li className={classes.navOption}>
                    <span className={classes.navIcon}>
                        <BookmarkNavIcon />
                    </span>
                    <span className={classes.navLabel}>Bookmarks</span>
                </li>
                <li className={classes.navOption}>
                    <span className={classes.navIcon}>
                        <ProfileNavIcon />
                    </span>
                    <span className={classes.navLabel}>Profile</span>
                </li>
            </ul>
            <button className={classes.tweetBtn}>Tweet</button>
        </div>
    );
}

export default Sidebar;
