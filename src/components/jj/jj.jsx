import "./jj.css";
import { FaUserAlt, FaLock } from "react-icons/fa";

export const JJ = () => {
  return (
    <div className="login-main-container">
      <form className="Login-form-container">
        <div className="login-img-con">
          <img
            style={{ width: "150px" }}
            src="https://www.brihaspathi.com/img/logo/logo.png"
            alt=""
          />
        </div>
        <div className="login-username-container">
          <input id="usename" type="text" placeholder="User Name" required />

          <FaUserAlt color="white" />
        </div>
        <div className="login-username-container">
          <input id="usename" type="text" placeholder="Password" required />

          <FaLock color="white" />
        </div>
        <button className="login-btn">Login</button>
      </form>
    </div>
  );
};
