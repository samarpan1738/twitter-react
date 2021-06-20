import React from "react";
import classes from "./Feed.module.css";
import ProfilePicPlaceholder from "../../assets/profile-pic-placeholder.png";
import ComposeTweetModal from "../ComposeTweetModal/ComposeTweetModal";
import Post from "../Post/Post";
import PostImg from "../../assets/post-reaction-icons/testImg.jpg";

function Feed() {
    const do_resize = (e) => {
        const MAX_ROWS = 5;
        let textbox = e.target;

        let txt = textbox.value;
        let cols = textbox.cols;
        let rowCount = parseInt(txt.length / 41);
        rowCount += txt.length % 41;
        console.log("rowCount = ", rowCount);
        // for (let i = 0; i < arraytxt.length; i++) rows += parseInt(arraytxt[i].length / cols);

        if (rowCount > MAX_ROWS) textbox.rows = MAX_ROWS;
        else textbox.rows = rowCount;
    };
    return (
        <div className={classes.Feed}>
            <header className={classes.title}>Home</header>
            {/* <section className={classes.createPost}>
                <div className={classes.left}>
                    <img
                        src={ProfilePicPlaceholder}
                        alt="Profile Pic"
                        className={classes.profilePic}
                    />
                </div>
                <div className={classes.right}>
                    <textarea
                        type="text"
                        className={classes.createPostInput}
                        id="text-area"
                        placeholder="What's happening?"
                        onKeyUp={do_resize}
                        cols="20"
                        rows="1"
                    />
                </div>
            </section>
            <ComposeTweetModal/> */}
            <div className={classes.postsList}>
                <Post imgSrc={PostImg} />
                <Post imgSrc={PostImg} />
            </div>
        </div>
    );
}

export default Feed;
