import "../login/login.css";

export default function Login() {
  return (
    <div>
      <>
        <div className="login">
          <div className="loginWrapper">
            <div className="loginLeft">
              <div className="loginLeftWrapper">
                <div className="loginLogo">TanvaySocial</div>
                <span className="loginDesc">
                  Connect with friends and world around you on TanvaySocial
                </span>
              </div>
            </div>
            <div className="loginRight">
              <div className="loginRightWrapper">
                <input
                  type="text"
                  className="loginInput"
                  placeholder="Email address"
                />
                <input
                  type="text"
                  className="loginInput"
                  placeholder="Password"
                />
                <button className="loginButton">Log In</button>
                <span className="loginForgotPassword">Forgotten Password?</span>
                <hr className="loginHR" />
                <button className="loginCreateAccount">
                  Create New Account
                </button>
              </div>
              <span className="createPage">
                <b>
                  <a href="your-link-here">Create a Page</a>
                </b>
                for a celebrity, brand or business.
              </span>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
