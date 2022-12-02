import "./Toolbar.scss";
import toggle from '../../assets/icons/toggle_on_2.svg';

function Toolbar() {
  return (
    <>
      <div className="toolbar">
        <h3 className="toolbar-heading">G-Access Toolbar</h3>
        <p className="toolbar-text">
          The G-Access toolbar enables accessibility tools across all Google
          services.
        </p>
        <p className="toolbar-text blue">Learn more</p>
        <img
          className="toolbar-toggle"
          src={toggle}
          alt="toggle switch set to on"
        />
      </div>
    </>
  );
};

export default Toolbar;
