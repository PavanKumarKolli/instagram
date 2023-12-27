import React, { useState } from "react";
import "./Home.css";

import { data } from "../../data/Followersdata";
import { Stories } from "../../data/Stories";
import { IoIosMore } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { BiLogoTelegram } from "react-icons/bi";
import { VscSave } from "react-icons/vsc";
import { CiFaceSmile } from "react-icons/ci";
import { Post } from "../../data/Postdata";

const Home = () => {
  const [isshow, setisshow] = useState(false);
  const moreless = () => {
    setisshow(!isshow);
  };

  // const [filterData, setFilterNewData] = useState(
  //   Sidebar.filter((i) => i.id === "2")
  // );
  // const [name, setName] = useState("");
  // const datafilter = (id, name) => {
  //   let newArray = Sidebar.filter((i) => i.id === id);
  //   console.log(newArray);
  //   setName(name);
  //   setFilterNewData(newArray);
  // };
  return (
    // First side bar Container
    <div className="home-main-contanier">
      {/* <div className="home-side-bar">
        <div>
          <img style={{ width: "150px" }} src="Images/instaname.png" alt="" />
        </div>
        {Sidebar?.map((i) => (
          <div className="home-side-listnames">
            <span style={{ marginRight: "12px" }}>{i.icon}</span>
            <Link to={i.link}>
              {" "}
              <span style={{ fontSize: "18px" }}>{i.name}</span>
            </Link>{" "}
          </div>
        ))}
      </div> */}
      {/* middle-container */}
      <div className="home-middle-bar">
        <div className="login-stroies-container">
          {Stories.map((i) => (
            <div className="login-middle-div">
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "100%",
                }}
                src="Images/pk-image.jpg"
                alt=""
              />

              <span>{i.name}</span>
            </div>
          ))}
        </div>
        {Post.map((i) => (
          <div className="login-main-post-div">
            <div className="login-middle-div-container">
              <div className="login-middle-post">
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "100%",
                  }}
                  src="Images/pk-image.jpg"
                  alt=""
                />
                <span>
                  <span style={{ marginLeft: "7px" }}>
                    <b>{i.name}</b>
                  </span>
                  <span> 1day</span>
                  <b>
                    {" "}
                    <span style={{ color: "blue", marginLeft: "12px" }}>
                      Follow
                    </span>
                  </b>
                </span>
              </div>
              <div>
                <IoIosMore size={30} />
              </div>
            </div>
            <div>
              <div
                style={{
                  width: "500px",
                  height: "350px",
                  marginTop: "20px",
                  border: "1px solid gray",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src={i.image}
                  alt=""
                />
              </div>
              <div className="login-likes-div-container">
                <span className="login-likes-container">
                  <FaRegHeart size={25} />
                  <LuMessageCircle size={25} />
                  <BiLogoTelegram size={25} />
                </span>
                <span>
                  <VscSave size={25} />
                </span>
              </div>
              <div className="login-likes-comments">
                <span>{i.like} likes</span>
                <span>{i.comment}</span>
              </div>
              <div className="login-more-data">
                <span>...</span>
                {isshow && (
                  <span style={{ display: "flex", flexDirection: "column" }}>
                    <span>{i.comment}</span>
                    <span>{i.comment}</span>
                  </span>
                )}
                <button onClick={moreless} className="login-more-button">
                  {isshow ? "Less..." : "More..."}
                </button>
              </div>
              <div className="login-add-comment">
                <input
                  style={{ background: "transparent", border: "none" }}
                  type="text"
                  placeholder="Add comment"
                />
                <CiFaceSmile />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* End-side Container */}
      <div className="home-end-bar">
        <div className="home-div-con-div">
          <div className="home-end-bar-div">
            <div>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "100%",
                  border: "1px solid red",
                }}
                src="Images/pk-image.jpg"
                alt=""
              />
            </div>
            <div className="login-endside-acc">
              <span>Pavan</span>
              <span>Mr.Kolli</span>
            </div>
          </div>
          <div>
            <span style={{ color: "blue" }}>switch</span>
          </div>
        </div>
        <div className="login-suggest-seeall">
          <span>Suggested for you</span>
          <span>See All</span>
        </div>
        {data.map((i) => (
          <div className="login-followers-container">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "100%",
                }}
                src="Images/pk-image.jpg"
                alt=""
              />
              {/* <span>{i.image}</span> */}
            </div>
            <div className="login-endside-follow-con">
              <div className="log-floowes-con">
                <span>{i.name}</span>
                <span style={{ fontSize: "12px" }}>
                  {" "}
                  followedBy {i.folowedby}
                </span>
              </div>
              <div>
                <span style={{ color: "blue" }}>Follow</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
