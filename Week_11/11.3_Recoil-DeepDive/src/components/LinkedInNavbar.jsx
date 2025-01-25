import {
  FaHome,
  FaUserFriends,
  FaBriefcase,
  FaCommentDots,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
  totalNotificationSelector,
} from "../store/store";
import { useRecoilValue } from "recoil";

const LinkedInNavbar = () => {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    padding: "18px",
    width: "60%",
    margin: "0 auto",
    height: "60px",
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const navItemStyle = () => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "color 0.3s ease",
  });

  const iconStyle = {
    marginBottom: "5px",
    height: "30px",
    width: "30px",
  };

  const networkAtomCount = useRecoilValue(networkAtom);
  const JobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const totalNotification = useRecoilValue(totalNotificationSelector);

  return (
    <div
      style={{
        backgroundColor: "#0073b1",
        height: "98vh",
      }}
    >
      <div style={navbarStyle}>
        <div style={navItemStyle("Home")}>
          <FaHome size={20} style={iconStyle} />
          <span>Home</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: 5,
          }}
        >
          <div style={navItemStyle("My Network")}>
            <FaUserFriends size={20} style={iconStyle} />

            <span>My Network</span>
          </div>

          <h1>({networkAtomCount >= 100 ? "99+" : networkAtomCount})</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: 5,
          }}
        >
          <div style={navItemStyle("Jobs")}>
            <FaBriefcase size={20} style={iconStyle} />
            <span>Jobs</span>
          </div>
          <h1>({JobsAtomCount >= 100 ? "99+" : JobsAtomCount})</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: 5,
          }}
        >
          <div style={navItemStyle("Messaging")}>
            <FaCommentDots size={20} style={iconStyle} />
            <span>Messaging</span>
          </div>
          <h1>({messagingAtomCount >= 100 ? "99+" : messagingAtomCount})</h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: 5,
          }}
        >
          <div style={navItemStyle("Notifications")}>
            <FaBell size={20} style={iconStyle} />
            <span>Notifications</span>
          </div>
          <h1>
            ({notificationAtomCount >= 100 ? "99+" : notificationAtomCount})
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: 5,
          }}
        >
          <div style={navItemStyle("Me")}>
            <FaUserCircle size={20} style={iconStyle} />
            <span>Me</span>
          </div>

          <h1>({totalNotification})</h1>
        </div>
      </div>
    </div>
  );
};
export default LinkedInNavbar;
