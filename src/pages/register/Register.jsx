import "../register/register.css";

export default function Register() {
  return (
    <div>
      <>
        <div className="register">
          <div className="registerWrapper">
            <div className="registerLeft">
              <div className="registerLeftWrapper">
                <div className="registerLogo">TanvaySocial</div>
                <span className="registerDesc">
                  Connect with friends and world around you on TanvaySocial
                </span>
              </div>
            </div>
            <div className="registerRight">
              <div className="registerRightWrapper">
                <input
                  type="text"
                  className="registerInput"
                  placeholder="Username"
                />
                <input
                  type="text"
                  className="registerInput"
                  placeholder="Email address"
                />
                <input
                  type="text"
                  className="registerInput"
                  placeholder="Password"
                />
                <input
                  type="text"
                  className="registerInput"
                  placeholder="Confirm Password"
                />
                <button className="registerButton">Sign Up</button>
                <hr className="registerHr" />
                <button className="registerCreateAccount">
                  Log In to your Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
