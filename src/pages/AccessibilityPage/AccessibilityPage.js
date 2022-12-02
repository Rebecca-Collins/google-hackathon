import './AccessibilityPage.scss';
import toggle from '../../assets/icons/toggle_on.svg';
import heroImage from '../../assets/images/hero_image.svg';

function AccessibilityPage() {
    return (
        <main className='access'>
            <div className='access__heading-container'>
                <h2 className='access__heading'>Accessibility Info</h2>
                <p className='access__heading-text'>Info about you and your accessibility needs across Google services</p>
            </div>
            <div className='access__hero'>
                <div className='access__hero-container'>
                    <h1 className='access__hero-heading'>Your accessibility info in Google services</h1>
                    <p className='access__hero-text'> This page is your destination for all accessibility needs across all Google services.
                        Accessibility profile info with your needs and settings stored in one place.
                    </p>
                </div>
                <img src={heroImage} alt='id card split in half with pictures on the other side' />
            </div>
            <div className='access__toolbar'>
                <h3 className='access__toolbar-heading'>G-Access Toolbar</h3>
                <p className='access__toolbar-text'>The G-Access toolbar enables accessibility tools across all Google services.</p>
                <p className='access__toolbar-text blue'>Learn more</p>
                <img className='access__toolbar-toggle' src={toggle} alt='toggle switch set to on' />
            </div>
            <div className='access__profile-container'>
                <h3 className='access__heading--small'>Accessibility profile</h3>
                <div className='access__profile'></div>
                <p className='access__text'>ADHD</p>
                <div className='access__profile'></div>
                <p className='access__text'>Color Blindness</p>
                <div className='access__profile'></div>
                <p className='access__text'>Deaf</p>
                <div className='access__profile'></div>
                <p className='access__text'>Screen Reader</p>
            </div>
            <div>
                <h3 className='access__heading--small'>Accessibility info</h3>
                <p className='access__text'>No info here is visible to other people using Google services. <span className='blue'>Learn more.</span></p>
                <p className='access__text blue'>Edit</p>
                <div>

                </div>
            </div>
        </main>
    );
};

export default AccessibilityPage;