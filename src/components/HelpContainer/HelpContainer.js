import search from "../../assets/icons/search.svg";
import help from "../../assets/icons/help.svg";
import sms from "../../assets/icons/sms_failed.svg";
import "../HelpContainer/HelpContainer.scss";

function HelpContainer() {
  return (
    
      <div className="help">
        <h3 className="help__header">Looking for something else?</h3>
        <div className="help__content">
          <img className="help__icons" src={search} alt={search}/>
          <p> Seach Google Account</p>
        </div>
        <div className="help__content">
          <img className="help__icons" src={help} alt={help} />
          <p>See help options</p>
        </div>
        <div className="help__no-border">
        <img className="help__icons" src={sms} alt={sms}/>
        <p>Send feedback</p>
        </div>
       
      </div>
    
  );
}

export default HelpContainer;
