import React from "react";
import classes from "./Sidebar.module.css";
import { ReactComponent as HomeNavIcon } from "../../assets/nav-icons/home.svg";
import { ReactComponent as ProfileNavIcon } from "../../assets/nav-icons/profile.svg";
import { ReactComponent as ExploreNavIcon } from "../../assets/nav-icons/explore.svg";
import { ReactComponent as NotificationNavIcon } from "../../assets/nav-icons/notification.svg";
import { ReactComponent as MessageNavIcon } from "../../assets/nav-icons/message.svg";
import { ReactComponent as BookmarkNavIcon } from "../../assets/nav-icons/bookmark.svg";
import useWindowSize from "../../hooks/useWindowSize";
import NavOption from "../NavOption/NavOption";
const navOptions = [
    {
        label: "Home",
        icon: HomeNavIcon,
    },
    {
        label: "Explore",
        icon: ExploreNavIcon,
    },
    {
        label: "Notifications",
        icon: NotificationNavIcon,
    },
    {
        label: "Messages",
        icon: MessageNavIcon,
    },
    {
        label: "Bookmarks",
        icon: BookmarkNavIcon,
    },
    {
        label: "Profile",
        icon: ProfileNavIcon,
    },
];
function Sidebar() {
    const windowSize = useWindowSize();
    let mobile=windowSize.width < 1000;
    return (
        <div className={classes.Sidebar}>
            {!mobile && <h1>OnlyPics</h1>}
            <ul className={classes.navOptionsList} type="none">
                {navOptions.map(({ icon, label }) => {
                    return <NavOption icon={icon} label={label} />;
                })}
            </ul>
            {!mobile && <button className={classes.tweetBtn}>Tweet</button>}
        </div>
    );
}

export default Sidebar;
