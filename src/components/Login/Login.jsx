import axios from "axios";
import "./Login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogIn } from "../../actions/AuthAction";
export const Login = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const [userError, setUserError] = useState("");
  const navigater = useNavigate();
  const usernamechange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleuser = async (e) => {
    e.preventDefault();
    console.log("press");
    dispatch(LogIn(user, navigate));
    // try {
    //   const response = await axios.post(
    //     "https://v-insta.onrender.com/auth/login",
    //     user
    //   );
    //   navigater("/home");
    //   localStorage.setItem("user", response.data.user);
    //   localStorage.setItem("token", response.data.token);
    //   console.log(response.data);
    // } catch (error) {
    //   console.log(error.response.data);
    //   setUserError(error.response.data);
    // }
  };

  return (
    <div className="login--main-container">
      <div className="login--img-contaner">
        <img
          style={{ width: "350px", height: "450px" }}
          src="Images\login-image.png"
          alt=""
        />
      </div>
      <div className="login--container">
        <div>
          <img
            style={{ width: "150px" }}
            src="https://assets.stickpng.com/images/5a4e432a2da5ad73df7efe7a.png"
            alt=""
          />
        </div>
        <form className="Login--form-controller " onSubmit={handleuser}>
          <input
            onChange={usernamechange}
            type="text"
            placeholder="Phone number ,username , or email"
            name="email"
            value={user.email}
          />
          <input
            onChange={usernamechange}
            type="text"
            placeholder="Password"
            name="password"
            value={user.password}
          />
          {userError && <span>{userError}</span>}
          <button type="submit" className="login--button">
            Login
          </button>
          <div className="login--or-con">
            <hr />
            <span>Or</span>
            <hr />
          </div>
          <span>Login With Facebook</span>
          <span>Forgot Password?</span>
        </form>
        <div className="Login__or__login">
          <p>
            Have an account?{" "}
            <Link to="/">
              <span>Sign In</span>
            </Link>
          </p>
        </div>
        {/* <div>
          <span>Get App</span>
        </div> */}
      </div>
    </div>
  );
};
