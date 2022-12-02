import './AccessProfile.scss';
import addAvatar from '../../assets/images/add-avatar.svg';
import colorBlindAvatar from '../../assets/images/color-blind-avatar.svg';
import hearingAssistAvatar from '../../assets/images/deafness-avatar.svg';
import blindAvatar from '../../assets/images/blind-avatar.svg';

function AccessProfile() {
    return (
        <div className='access__profile'>
            <h3 className='access__profile-heading'>Accessibility profile</h3>
            <div className='avatar__container'>
                <div className='avatar__container-single'>
                    <img className='avatar-image' src={addAvatar} alt='add avatar' />
                    <p className='access__profile-text'>ADHD</p>
                </div>
                <div className='avatar__container-single'>
                    <img className='avatar-image' src={colorBlindAvatar} alt='colorblind avatar'/>
                    <p className='access__profile-text'>Color Blindness</p>
                </div>
                <div className='avatar__container-single'>
                    <img className='avatar-image' src={hearingAssistAvatar} alt='heading assistance avatar'/>
                    <p className='access__profile-text'>Deaf</p>
                </div>
                <div className='avatar__container-single'>
                    <img className='avatar-image' src={blindAvatar} alt='blind avatar' />
                    <p className='access__profile-text'>Screen Reader</p>
                </div>
            </div>
        </div>
    );
};

export default AccessProfile;