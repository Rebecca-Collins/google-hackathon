import homeIcon from "../../assets/icons/account_circle.svg";
import badge from "../../assets/icons/badge.svg";
import toggleOn from "../../assets/icons/toggle_on.svg";
import group from "../../assets/icons/group.svg";
import creditCard from "../../assets/icons/credit_card.svg";
import about from "../../assets/icons/info.svg";
import access from "../../assets/icons/access.svg";
import lock from "../../assets/icons/lock.svg";
import "../Sidebar/Sidebar.scss";

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar__content">
          <img className="sidebar__icon" src={homeIcon} alt={homeIcon} />
          <p>Home</p>
        </div>
        <div className="sidebar__content">
          <img className="sidebar__icon" src={badge} alt={badge} />
          <p>Personal info</p>
        </div>
        <div className="sidebar__active sidebar__content">
          <img className="sidebar__icon" src={access} alt={access} />
          <p>Accessibility</p>
        </div>
        <div className="sidebar__content">
          <img className="sidebar__icon" src={toggleOn} alt={toggleOn} />
          <p>Data & Privacy</p>
        </div>
        <div className="sidebar__content">
          <img className="sidebar__icon" src={lock} alt={lock} />
          <p>Security</p>
        </div>
        <div className="sidebar__content">
          <img className="sidebar__icon" src={group} alt={group} />
          <p>People $ sharing</p>
        </div>
        <div className="sidebar__content sidebar__border-bottom">
          <img className="sidebar__icon" src={creditCard} alt={creditCard} />
          <p>Payments and subscriptions</p>
        </div>
      </div>
      <div className="sidebar__content">
        <img className="sidebar__icon" src={about} alt={about} />
        <p>About</p>
      </div>
    </div>
  );
}

export default Sidebar;
