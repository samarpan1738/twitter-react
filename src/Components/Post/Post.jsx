import React from "react";
import classes from "./Post.module.css"
function Post({imgSrc}) {
    return (
        <div className={classes.Post}>
            <header>Samarpan</header>
            <div className={classes.postImage}>
                <img src={imgSrc} alt="Post Image" />
            </div>
            <div className={classes.options}>
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
            </div>
        </div>
    );
}

export default Post;
