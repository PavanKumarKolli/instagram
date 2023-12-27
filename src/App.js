import "./App.css";
import {
  BrowserRouter as Routers,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Login } from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import { Profilepage } from "./components/ProfilePage/Profilepage";
import Sidebaritems from "./components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { Reelspage } from "./components/Reelspagedata/Reelspagedata";
import { Exploredata } from "./components/Exploredata/Exploredata";
import { Notification } from "./components/Notification/Notification";

// import { JJ } from "./components/jj/jj";

function App() {
  const UUU = useSelector((state) => state.authReducer.authData);
  return (
    <div>
      <Routers>
        <Notification />
        {/* <Sidebaritems> */}
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/reels" element={<Reelspage />} />
          <Route path="/Explore" element={<Exploredata />} />
          {/* <Route
              path="/"
              element={UUU ? <Home /> : <Navigate to="/login" />}
            /> */}
          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route
              path="/profile"
              element={UUU ? <Profilepage /> : <Navigate to="/login" />}
            /> */}
          {/* <Route path="*" element={<div>not found</div>} /> */}
        </Routes>
        {/* </Sidebaritems> */}
      </Routers>
    </div>
  );
}

export default App;
