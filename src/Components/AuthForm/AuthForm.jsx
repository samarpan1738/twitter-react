import React from "react";
import googleIcon from "../../assets/google-icon.png";
import classes from "./AuthForm.module.css";

function AuthForm({ setToggleOption, type }) {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const authTypes = {
        login: {
            title: "Login",
            switchType: "Signup",
            callToAction: "Sign in",
            inputFields: [
                {
                    label: "Email",
                    name: "email",
                    type: "text",
                    placeholder: "johndoe@abc.com",
                },
                {
                    label: "Password",
                    name: "password",
                    type: "password",
                    placeholder: "",
                },
            ],
        },
        signup: {
            title: "Signup",
            switchType: "Login",
            callToAction: "Register",
            inputFields: [
                {
                    label: "Name",
                    name: "name",
                    type: "text",
                    placeholder: "John Doe",
                },
                {
                    label: "Email",
                    name: "email",
                    type: "text",
                    placeholder: "johndoe@abc.com",
                },
                {
                    label: "Password",
                    name: "password",
                    type: "password",
                    placeholder: "",
                },
            ],
        },
    };
    return (
        <form onSubmit={handleSubmit} className={classes.authForm}>
            <header>
                <h1>{authTypes[type].title}</h1>
                <p>
                    Already have an account?{" "}
                    <span onClick={() => setToggleOption((toggleOption) => !toggleOption)}>
                        {authTypes[type].switchType}
                    </span>
                </p>
            </header>
            <ul type="none" className={classes.inputFieldsList}>
                {authTypes[type].inputFields.map(({ label, name, type, placeholder }) => {
                    return (
                        <li className={classes.inputField} key={name}>
                            <label htmlFor={name}>
                                {label + " "}
                                <abbr title="required" aria-label="required">
                                    *
                                </abbr>
                            </label>
                            <br />
                            <input type={type} name={name} id={name} placeholder={placeholder} />
                        </li>
                    );
                })}
            </ul>

            <button className={classes.submitBtn}>{authTypes[type].callToAction}</button>
            <div className={classes.seperator}>
                <div className={classes.lineSeperator}></div>
                <p>or</p>
                <div className={classes.lineSeperator}></div>
            </div>
            <button className={classes.googleAuthBtn}>
                Signup with Google <img src={googleIcon} alt="Google Icon"></img>
            </button>
        </form>
    );
}

export default AuthForm;
