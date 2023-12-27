import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";

import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [userError, setUserError] = useState("");

  const [Signupdata, setsignupdata] = useState({
    email: "",
    password: "",
    username: "",
    fullname: "",
  });
  const useremailchange = (e) => {
    setsignupdata({ ...Signupdata, [e.target.name]: e.target.value });
  };
  // console.log(Signupdata);

  const navigater = useNavigate();

  const handleApisSignup = async (e) => {
    e.preventDefault();
    console.log("click");
    try {
      await axios.post(
        "https://v-insta.onrender.com/auth/register",
        Signupdata
      );

      navigater("/login", { replace: true });
      userError("");
      // console.log("ssjshhj") ;

      // console.log(response);
    } catch (error) {
      console.log(error.response.data.message);
      setUserError(error.response.data.message);
    }
  };

  // console.log(userError);

  return (
    <div className="signup__main__container">
      <form className="form__container" onSubmit={handleApisSignup}>
        <img
          src="https://assets.stickpng.com/images/5a4e432a2da5ad73df7efe7a.png"
          alt=""
        />
        <h4 style={{ textAlign: "center" }}>
          Sign up to see photos and videos from your friends.
        </h4>
        <input
          onChange={useremailchange}
          type="text"
          placeholder="Mobile number or email"
          name="email"
          value={Signupdata.email}
        />
        <input
          onChange={useremailchange}
          type="text"
          placeholder="Full name"
          name="fullname"
          value={Signupdata.fullname}
        />
        <input
          onChange={useremailchange}
          type="text"
          placeholder="Username"
          name="username"
          value={Signupdata.username}
        />
        <input
          onChange={useremailchange}
          type="text"
          placeholder="password"
          name="password"
          value={Signupdata.password}
        />
        <span>
          People who use our service may have uploaded your contact information
          to Instagram.
        </span>
        <span>
          By signing up, you agree to our Terms , Privacy Policy and Cookies
          Policy .
        </span>
        {userError && <p>{userError}</p>}
        <div>
          <button type="submit">Signup</button>
        </div>
      </form>
      <div className="signup__or__login">
        <p>
          Have an account?
          <Link to="login">
            {" "}
            <span>Log in</span>
          </Link>
        </p>
      </div>
      <div>
        <span>Get App</span>
      </div>
    </div>
  );
};

export default Signup;
