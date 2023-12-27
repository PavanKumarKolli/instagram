import { Earilernotification } from "../../data/Notificationdata/Earilerdata";
import { Lastmonthdata } from "../../data/Notificationdata/Lastmonthdata";
import { LastweekData } from "../../data/Notificationdata/LastweekData";
import { TodayNotification } from "../../data/Notificationdata/Notificationdata";
import "./Notification.css";

export const Notification = () => {
  return (
    <div className="notifiction-scroll-container">
      <h3>Notification</h3>
      {/* today container */}
      <div className="notification-main-container">
        <h4>Today</h4>
        {TodayNotification.map((i) => (
          <div className="notification-center-container">
            <div className="notification-img-container">
              <img
                style={{ width: "100%", height: "100%" }}
                src={i.image}
                alt=""
              />
            </div>
            <div>
              <span>
                <b>{i.name}</b>
              </span>
              <span style={{ marginLeft: "12px" }}>
                who you might know, is on instagram
              </span>
              <button className="notification-follow-btn">Follow</button>
            </div>
          </div>
        ))}
        <hr />
        {/* last day container */}
        <div>
          <h4>Last Week</h4>
          {LastweekData.map((i) => (
            <div className="not-lastweek-notification">
              <div className="not-last-week-cont">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={i.image}
                  alt=""
                />
              </div>
              <div>
                <span>
                  <b>{i.name}</b>
                </span>
                <span style={{ marginLeft: "12px" }}>
                  who you might know, is on instagram
                </span>
                <button className="notification-follow-btn">Follow</button>
              </div>
            </div>
          ))}
        </div>
        <hr />
        {/* last Month */}
        <div>
          <h3>Last Month</h3>
          {Lastmonthdata.map((i) => (
            <div className="not-lastweek-notification">
              <div className="not-last-week-cont">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={i.image}
                  alt=""
                />
              </div>
              <div>
                <span>
                  <b>{i.name}</b>
                </span>
                <span style={{ marginLeft: "12px" }}>
                  who you might know, is on instagram
                </span>
                <button className="notification-follow-btn">Follow</button>
              </div>
            </div>
          ))}
          <hr />
          {/* Eariler */}
          <div>
            <h3>Eariler</h3>
            {Earilernotification.map((i) => (
              <div className="not-lastweek-notification">
                <div className="not-last-week-cont">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={i.image}
                    alt=""
                  />
                </div>
                <div>
                  <span>
                    <b>{i.name}</b>
                  </span>
                  <span style={{ marginLeft: "12px" }}>
                    who you might know, is on instagram
                  </span>
                  <button className="notification-follow-btn">Follow</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
