import './AccessProfile.scss';
import screenClarityAvatar from '../../assets/images/adhd-modal.svg';
import colorBlindAvatar from '../../assets/images/color-blind-avatar.svg';
import hearingAssistAvatar from '../../assets/images/deafness-avatar.svg';
import blindAvatar from '../../assets/images/blind-avatar.svg';
import { useState } from "react"
import AccessModal from "../../components/AccessModal/AccessModal"

function AccessProfile() {

    const [show, setShow] = useState(false);

      const onClick = () =>{
        window.scrollTo({ top: 0, behavior: "smooth" });
        setShow(true)
    }
    
    return (
        <div className='access__profile'>
            <h3 className='access__profile-heading'>Accessibility profile</h3>
            <div className='avatar__container'>
                <div className='avatar__container-single'>
                    <img onClick={onClick} className='avatar-image' src={screenClarityAvatar} alt='add avatar' />
                    <p className='access__profile-text'>Screen Clarity</p>
                    <AccessModal
                    show={show}
                    onClose={() => setShow(false)}
                />
                </div>
                <div className='avatar__container-single'>
                    <img onClick={onClick} className='avatar-image' src={colorBlindAvatar} alt='colorblind avatar'/>
                    <p className='access__profile-text'>Color Blindness</p>             
                </div>
                <div className='avatar__container-single'>
                    <img onClick={onClick} className='avatar-image' src={hearingAssistAvatar} alt='heading assistance avatar'/>
                    <p className='access__profile-text'>Hearing Assist</p>
                </div>
                <div onClick={onClick} className='avatar__container-single'>
                    <img className='avatar-image' src={blindAvatar} alt='blind avatar' />
                    <p className='access__profile-text'>Screen Reader</p>
                </div>
            </div>
        </div>
    );
};

export default AccessProfile;