import ReactPlayer from "react-player";
import "./Reelspagedata.css";
import { FaRegHeart, FaRegSave } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { BsSend } from "react-icons/bs";
import { IoIosMore, IoMdMusicalNote } from "react-icons/io";
import Reelsss from "../../data/Reels";

export const Reelspage = () => {
  return (
    <div>
      {Reelsss.map((i) => (
        <div className="reels-main-container">
          <div className="reels--video-container">
            <ReactPlayer
              width="100%"
              height="100%"
              //   playing="true"
              //   muted="true"
              //   controls="true"
              url={i.videopath}
            />
            <div>
              <img
                style={{ width: "25px", height: "25px", borderRadius: "3px" }}
                src="Images/pk-image.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="reels--ondisplay-container">
            <div className="reels-name-prof-con">
              <img
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "3px",
                  border: "1px solid white",
                }}
                src="Images/pk-image.jpg"
                alt=""
              />
              <span>{i.account}</span>
              <button className="reels-follow-btn">
                <b>Follow</b>
              </button>
            </div>
            <div className="reels--comment-container">
              <span>{i.comments}</span>
              <span>
                <marquee>
                  {" "}
                  <IoMdMusicalNote />
                  {i.song}
                </marquee>
              </span>
            </div>
          </div>
          <div>
            <div className="reels-side-icons">
              <FaRegHeart size={25} />
              <FiMessageCircle size={25} />
              <BsSend size={25} />
              <FaRegSave size={25} />
              <IoIosMore size={25} />
              <img
                style={{ width: "25px", height: "25px", borderRadius: "3px" }}
                src="Images/pk-image.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
