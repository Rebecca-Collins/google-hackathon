import "./AccessHeading.scss";
import heroImage from "../../assets/images/hero-image-2.svg";

function AccessHeading({largeText}) {

  return (
    <section>
      <div className="access__heading-container">
        <h2 className="access__heading">Accessibility Info</h2>
        <p className='access__heading-text'>
          Info about you and your accessibility needs across Google services
        </p>
      </div>
      <div className="access__hero">
        <div className="access__hero-container">
          <h1 className="access__hero-heading">
            Your accessibility info in Google services
          </h1>
          <p className="access__hero-text">
            {" "}
            This page is your destination for all accessibility needs across all
            Google services. Accessibility profile info with your needs and
            settings stored in one place.
          </p>
        </div>
        <img className="access__hero-image"
          src={heroImage}
          alt="id card split in half with pictures on the other side"
        />
      </div>
    </section>
  );
};

export default AccessHeading;
