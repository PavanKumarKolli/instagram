import { Favstories } from "../../data/Favstories";
import { ProfilePostData } from "../../data/ProfilePostData";
import "./Profilepage.css";
import { IoIosSettings, IoMdGrid } from "react-icons/io";
import { RiFolderVideoLine } from "react-icons/ri";
import { BsSave } from "react-icons/bs";
import { PiUserList } from "react-icons/pi";
import { FaHeart, FaComment } from "react-icons/fa";
import { useState } from "react";
import { Reelsdata } from "../../data/Reelsdata";
import ReactPlayer from "react-player";
export const Profilepage = () => {
  const [tabs, setTabs] = useState("1");
  const setTab = (value) => {
    setTabs(value);
  };

  const [isshowmore, setisshowmore] = useState(false);

  const moreless = () => {
    setisshowmore(!isshowmore);
  };

  return (
    <div
      style={{
        width: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="profile--top-section">
        <div>
          <img
            style={{ width: "150px", height: "150px", borderRadius: "60%" }}
            src="Images/RAVI.png"
            alt=""
          />
        </div>
        <div className="profile-section">
          <div className="profile-name-sec">
            <span>Name</span>
            <button className="profile-edit-btn">Edit Profile</button>
            <button>View Archive</button>
            <IoIosSettings size={28} />
          </div>
          <div className="profile-posts-con">
            <span>31 posts</span>
            <span>359 followers</span>
            <span>308 following</span>
          </div>
          <div>
            <b>
              <span>👑🅟🅐🅥🅐🅝 🅝🅐🅘🅓🅤👑</span>
            </b>
          </div>
          <div className="profile-bio-data">
            {/* <textarea
          rows="4"
          cols="5"
          style={{ border: "none", outline: "none" }}
        ></textarea> */}

            <span>Login in the world Aug ²¹</span>
            <span>Pawan Kalyan gari Abbimani🤩</span>
            {isshowmore && (
              <span style={{ display: "flex", flexDirection: "column" }}>
                <span>@PHOTOGRAPHY LOVER📸✨</span>
                <span>
                  ఓపిక వున్నంత వరకు కాదు ఊపిరి వున్నంత వరకూ నా అడుగులు జనసేన
                  తోనే...
                </span>
              </span>
            )}
            <button onClick={moreless} className="profile-read-more--btn">
              {isshowmore ? "less.." : "more..."}
            </button>
          </div>
        </div>
      </div>

      <div className="profile-fav-container">
        {Favstories.map((i) => (
          <div className="profile-add-fav-sto">
            <img
              style={{ width: "100px", height: "100px", borderRadius: "60%" }}
              src={i.image}
              alt=""
            />
            <span>{i.tittle}</span>
          </div>
        ))}
      </div>
      <div style={{ width: "50%" }}>
        <hr />
      </div>
      <div className="profile-posts-varaints">
        <span
          style={{
            textDecoration: "none",
            color: "grey",
            borderBottom: tabs === 1 && "1px solid black",
          }}
          onClick={() => setTab(1)}
        >
          <IoMdGrid size={15} />
          POSTS
        </span>
        <span
          style={{
            textDecoration: "none",
            color: "grey",
            borderBottom: tabs === 2 && "1px solid black",
          }}
          onClick={() => setTab(2)}
        >
          <RiFolderVideoLine size={15} />
          REELS
        </span>
        <span
          style={{
            textDecoration: "none",
            color: "grey",
            borderBottom: tabs === 3 && "1px solid black",
          }}
          onClick={() => setTab(3)}
        >
          {" "}
          <BsSave size={15} />
          SAVED
        </span>
        <span
          style={{
            textDecoration: "none",
            color: "grey",
            borderBottom: tabs === 4 && "1px solid black",
            width: "60px",
          }}
          onClick={() => setTab(4)}
        >
          <PiUserList size={1} />
          TAGGED
        </span>
      </div>
      <div style={{ display: tabs === 1 ? "block" : "none" }}>
        <div className="profile-main-container">
          {ProfilePostData.map((i) => (
            <div className="proflie-post-list">
              <img
                id="hover"
                style={{ width: "100%", height: "100%" }}
                src="Images/RAVI.png"
                alt=""
              />
              <div className="profile-hover-data">
                <div className="pic-hover-likes">
                  <span>
                    <FaHeart color="white" size={16} />
                    <span
                      style={{
                        color: "white ",
                        marginLeft: "12px",
                      }}
                    >
                      5464
                    </span>
                  </span>
                  <span>
                    {" "}
                    <FaComment color="white" size={16} />
                    <span
                      style={{
                        color: "white ",
                        marginLeft: "12px",
                      }}
                    >
                      5
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: tabs === 2 ? "block" : "none" }}>
        <div className="profile-main-container">
          {Reelsdata.map((i) => (
            <div className="proflie-post-list">
              {/* <video width="100%" height="100%" controls>
                <source src={i.videopath} type="video/mp4" />
              </video> */}
              <ReactPlayer width="100%" height="100%" url={i.videopath} />

              <div className="profile-hover-data">
                <div className="pic-hover-likes">
                  <span>
                    <FaHeart color="white" size={16} />
                    <span
                      style={{
                        color: "white ",
                        marginLeft: "12px",
                      }}
                    >
                      222
                    </span>
                  </span>
                  <span>
                    {" "}
                    <FaComment color="white" size={16} />
                    <span
                      style={{
                        color: "white ",
                        marginLeft: "12px",
                      }}
                    >
                      5
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: tabs === 3 ? "block" : "none" }}>
        <div>Saved</div>
      </div>
      <div style={{ display: tabs === 4 ? "block" : "none" }}>
        <div>Tagged</div>
      </div>
    </div>
  );
};
