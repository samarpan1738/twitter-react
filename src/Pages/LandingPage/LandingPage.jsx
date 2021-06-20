import React,{useState} from "react";
import "./LandingPage.css";
import postIcon from "../../assets/post.svg";
import commentIcon from "../../assets/comment.svg";
import likeIcon from "../../assets/like.svg";
import addFriendIcon from "../../assets/addFriend.svg";
import AuthForm from "../../Components/AuthForm/AuthForm";

function LandingPage() {
    const [toggleOption, setToggleOption] = useState(true);
    return (
        <div className="LandingPage">
            <div className="left">
                <div className="container">
                    <h1>Join Asylum now.</h1>
                    <ul className="features-list">
                        <li className="feature">
                            <img className="feature-icon"  src={postIcon} alt=""/>
                            <p className="feature-text">Create posts</p>
                        </li>
                        <li className="feature">
                            <img className="feature-icon"  src={likeIcon} alt=""/>
                            <p className="feature-text">Like posts</p>
                        </li>
                        <li className="feature">
                            <img className="feature-icon"  src={commentIcon} alt=""/>
                            <p className="feature-text">Comment on posts</p>
                        </li>
                        <li className="feature">
                            <img className="feature-icon"  src={addFriendIcon} alt=""/>
                            <p className="feature-text">Add friends</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right">
                {toggleOption ? <AuthForm setToggleOption={setToggleOption} type="login"/> : <AuthForm setToggleOption={setToggleOption} type="signup"/>}
                
                

            </div>
        </div>
    );
}

export default LandingPage;
