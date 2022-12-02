import './AccessibilityPage.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import AccessHeading from '../../components/AccessHeading/AccessHeading';
import Toolbar from '../../components/Toolbar/Toolbar';
import AccessProfile from '../../components/AccessProfile/AccessProfile';
import AccessInfo from '../../components/AccessInfo/AccessInfo';

function AccessibilityPage() {
    return (
        <main className='page__container'>
            <Sidebar />
            <section main='access'>
                <AccessHeading />
                <Toolbar />
                <AccessProfile />
                <AccessInfo />
            </section>
        </main>
    );
};

export default AccessibilityPage;