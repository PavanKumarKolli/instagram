import { Explore } from "../../data/Exploredata";
import "./Exploredata.css";
import { FaHeart, FaComment } from "react-icons/fa";
export const Exploredata = () => {
  return (
    <div className="explore-main-container">
      {Explore.map((i) => (
        <div>
          <div className="explore-grid-container">
            <div className="Explore-grid-view">
              <img id="reel9" src={i.image1} alt="" />
            </div>
            <div className="explore-container-item2s">
              <img
                style={{ width: "100%", height: "100%" }}
                src={i.image2}
                alt=""
              />
            </div>
            <div className="explore-container-item2s">
              <img
                style={{ width: "100%", height: "100%" }}
                src={i.image3}
                alt=""
              />
            </div>
            <div className="explore-container-item2s">
              <img
                style={{ width: "100%", height: "100%" }}
                src={i.image4}
                alt=""
              />
            </div>
            <div className="explore-container-item2s">
              <img
                style={{ width: "100%", height: "100%" }}
                src={i.image5}
                alt=""
              />
            </div>
            <div className="Explore-hover-data">
              <div className="explorepic-hover-likes">
                <span
                  style={{
                    color: "white ",
                    margin: "12px",
                  }}
                >
                  <FaHeart
                    style={{ marginRight: "12px " }}
                    color="white"
                    size={16}
                  />
                  {i.heart}
                </span>
                <span
                  style={{
                    color: "white ",
                    margin: "12px",
                  }}
                >
                  <FaComment
                    style={{ marginRight: "12px " }}
                    color="white"
                    size={16}
                  />
                  {i.comment}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
