import "./AccessInfo.scss";

function AccessInfo() {
  return (
    <div className="access__info">
        <div className="access__info-container">
            <h3 className="access__info-heading">Accessibility info</h3>
            <p className="access__info-text">
            No info here is visible to other people using Google services.{" "}
            <span className="blue">Learn more.</span>
            </p>
            <p className="access__text blue">Edit</p>
        </div>
    </div>
  );
}

export default AccessInfo;
