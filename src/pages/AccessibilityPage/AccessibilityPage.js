import './AccessibilityPage.scss';
import toggle from '../../assets/icons/toggle_on.svg';
import heroImage from '../../assets/images/hero_image.svg';

function AccessibilityPage() {
    return (
        <main className='access'>
            <div className='access__heading-container'>
                <h2 className='access__heading'>Accessibility Info</h2>
                <p className='access__text'>Info about you and your accessibility needs across Google services</p>
            </div>
            <div className='access__hero-container'>
                <h1 className='access__heading-hero'>Your accessibility info in Google services</h1>
                <p className='access__text'> This page is your destination for all accessibility needs across all Google services.
                    Accessibility profile info with your needs and settings stored in one place.
                </p>
                <img src={heroImage} alt='id card split in half with pictures on the other side' />
            </div>
            <div className='access__toolbar-container'>
                <h2 className='access__heading'>G-Access Toolbar</h2>
                <p className='access__text'>The G-Access toolbar enables accessibility tools across all Google services.</p>
                <p className='access__text blue'>Learn more</p>
                <img src={toggle} alt='toggle switch set to on' />
            </div>
            <div className='access__profile-container'>
                <div></div>
                <p>ADHD</p>
                <div></div>
                <p>Color Blindness</p>
                <div></div>
                <p>Deaf</p>
                <div></div>
                <p>Screen Reader</p>
            </div>
            <div>
                <h2>Accessibility info</h2>
                <p className='access__text blue'>No info here is visible to other people using Google services. <span className='blue'>Learn more.</span></p>
                <p className='access__text blue'>Edit</p>
                <div>

                </div>
            </div>
        </main>
    );
};

export default AccessibilityPage;