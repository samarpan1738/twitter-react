import React from "react";
import classes from "./ComposeTweetModal.module.css";

function ComposeTweetModal() {
    return (
        <div className={classes.ComposeTweetModal}>
            <form action="/" method="POST">
                <div className={classes.uploadArea}>
                    <label className={classes.uploadAreaLabel} htmlFor="file">Upload Pic</label>
                </div>
                <input type="file" name="file" id="file" className={classes.fileInput}/>
            </form>
        </div>
    );
}

export default ComposeTweetModal;
