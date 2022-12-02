import './AccessModal.scss';
import adhd from '../../assets/images/adhd-modal.svg';
import colorblind from '../../assets/images/color-modal.svg';
import text from '../../assets/images/text-modal.svg';
import accessLogo from '../../assets/images/accessibility_logo.svg';
import toggleOff from '../../assets/icons/toggle_off.svg';

function AccessModal(props) {
    if(!props.show) {
        return(
            null
        )
    }
    return (
        <div className='modal'>
            <div className='modal__top'>
                <div className='modal__avatar clicked'>
                    <img className='modal__avatar-image' src={adhd} alt='adhd avatar'/>
                    <p className='modal__avatar-text'>ADHD</p>
                </div>
                <div className='modal__avatar'>
                    <img className='modal__avatar-image' src={colorblind} alt='colorblind avatar'/>
                    <p className='modal__avatar-text'>Color</p>
                </div>
                <div className='modal__avatar'>
                    <img className='modal__avatar-image' src={text} alt='blind avatar'/>
                    <p className='modal__avatar-text'>Text</p>
                </div>
                <img className='modal__logo' src={accessLogo} alt='google accessibility logo' />
                <button className='modal__close' onClick={props.onClose}></button>
            </div>
            <div className='modal__bottom'>
                <div className='modal__bottom-container'>
                    <h3 className='modal__bottom-heading'>Screen Element Reduction</h3>
                    <img className='modal__bottom-toggle' src={toggleOff} alt="toggle in off position" />
                </div>
                <p className='modal__bottom-text'>This option reduces the amount of information shown on your screen</p>
                <p className='modal__bottom-text blue'>Learn More</p>

            </div>
            
        </div>
    );
};

export default AccessModal;