import React from "react";
import classes from "./Post.module.css";
function Post({ imgSrc }) {
    return (
        <div className={classes.Post}>
            <div className={classes.content}>
                <header>Samarpan @ <span className={classes.username}>samar1738</span></header>
                <div className={classes.postImageContainer}>
                    <img src={imgSrc} alt="Post Image" width="100px" />
                </div>
            </div>
            {/* <div className={classes.options}>
                <div className={classes.option}>
                    <div className={classes.optionIcon}></div>
                    <div className={classes.optionLabel}>Nice</div>
                </div>
                <div className={classes.option}>
                    <div className={classes.optionIcon}></div>
                    <div className={classes.optionLabel}>Meh</div>
                </div>
                <div className={classes.option}>
                    <div className={classes.optionIcon}></div>
                    <div className={classes.optionLabel}>Nahh</div>
                </div>
            </div> */}
        </div>
    );
}

export default Post;
