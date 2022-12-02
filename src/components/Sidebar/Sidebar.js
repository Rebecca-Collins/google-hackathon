import homeIcon from "../../assets/icons/account_circle.svg";
import badge from "../../assets/icons/badge.svg";
import toggleOn from "../../assets/icons/toggle_on.svg";
import lock from "../../assets/icons/group.svg";
import creditCard from "../../assets/icons/credit_card.svg";
import about from "../../assets/icons/info.svg";

function Sidebar() {
  return (
      <div>
        <div className="sidebar">
          <img src={homeIcon}/>
          <img src={badge}/>
          <img src={toggleOn}/>
          <img src={lock}/>
          <img src={creditCard}/>
          </div>
          <img src={about}/>
    </div>
  )
}

export default Sidebar