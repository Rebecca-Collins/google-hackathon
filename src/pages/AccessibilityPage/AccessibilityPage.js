import './AccessibilityPage.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import AccessHeading from '../../components/AccessHeading/AccessHeading';
import Toolbar from '../../components/Toolbar/Toolbar';
import AccessProfile from '../../components/AccessProfile/AccessProfile';

function AccessibilityPage() {
    return (
        <main className='page__container'>
            <Sidebar />
                <section main='access'>
                    <AccessHeading />
                    <Toolbar />
                    <AccessProfile />
                <div>
                    <h3 className='access__heading--small'>Accessibility info</h3>
                    <p className='access__text'>No info here is visible to other people using Google services. <span className='blue'>Learn more.</span></p>
                    <p className='access__text blue'>Edit</p>
                    <div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default AccessibilityPage;