import './AccessModal.scss';
import adhd from '../../assets/images/adhd-modal.svg';
import colorblind from '../../assets/images/color-modal.svg';
import text from '../../assets/images/text-modal.svg';
import accessLogo from '../../assets/images/accessibility_logo.svg';
import toggleOff from '../../assets/icons/toggle_off.svg';
import toggleOn from '../../assets/icons/toggle_on_2.svg';
import {useState, useEffect} from 'react';

function AccessModal({show, onClose}) {
    const accessInfo = [
        {
            type: 'Visual Clarity',
            heading: 'Increase Screen Clarity',
            content: 'This option highlights important features and information on the page.'
        },

        {
            type: 'color',
            heading: 'Change Color Contrast',
            content: 'This option allows you to change the color contrast of the page.'
        },

        {
            type: 'text',
            heading: 'Change Text Size',
            content: 'This option allows you to increase or decrease font size.'
        }
    ]

    const [active, setActive] = useState({
        clarity: false,
        color: false,
        text: false
    })

    const [display, setDisplay] = useState([])

    useEffect(() => {
        if(active.clarity) {
            setDisplay(accessInfo[0])
        } else if (active.color) {
            setDisplay(accessInfo[1])
        } else if (active.text) {
            setDisplay(accessInfo[2])
        } else {
            setDisplay({})
        }
    }, [active])

    const handleClick = (string) => {
        if (string === 'clarity') {
            setActive({
                ...active,
                clarity: true,
                color: false,
                text: false
            });
        }

        if (string === 'color') {
            setActive({
                ...active,
                clarity: false,
                color: true,
                text: false
            })
        }

        if (string === 'text') {
            setActive({
                ...active,
                clarity: false,
                color: false,
                text: true
            })
        }
    }

    const [toggle, setToggle] = useState(false)
    const triggerToggle = () => {
        setToggle(!toggle)
    }

    //if(active.text && toggle) {
        //handleLargeText()
    //}
    
    if(!show) {
        return(
            null
        )
    }


    return (
        <div id="color" className='modal'>
            <div className='modal__top'>
                <div onClick={() => handleClick('clarity')} className={`modal__avatar ${active.clarity ? 'clicked' : ''}`}>
                    <img className='modal__avatar-image' src={adhd} alt='adhd avatar'/>
                    <p className='modal__avatar-text'>Clarity</p>
                </div>
                <div onClick={() => handleClick('color')} className={`modal__avatar ${active.color ? 'clicked' : ''}`}>
                    <img className='modal__avatar-image' src={colorblind} alt='colorblind avatar'/>
                    <p className='modal__avatar-text'>Color</p>
                </div>
                <div onClick={() => handleClick('text')} className={`modal__avatar ${active.text ? 'clicked' : ''}`}>
                    <img className='modal__avatar-image' src={text} alt='blind avatar'/>
                    <p className='modal__avatar-text'>Text</p>
                </div>
                <img className='modal__logo' src={accessLogo} alt='google accessibility logo' />
                <button className='modal__close' onClick={onClose}></button>
            </div>
            <div className='modal__bottom'>
                <div className='modal__bottom-container'>
                    <h3 className='modal__bottom-heading'>{display.heading}</h3>
                    <img  onClick={triggerToggle} className={`modal__bottom-toggle ${toggle ? 'off' : ''}`} src={toggleOff} alt="toggle in off position" />
                    <img onClick={triggerToggle} className={`modal__bottom-toggle ${toggle ? '' : 'off'}`} src={toggleOn} alt = "toggle in on position" />
                </div>
                <p className='modal__bottom-text'>{display.content}</p>
                <p className='modal__bottom-text blue'>Learn More</p>

            </div>
            
        </div>
    );
};

export default AccessModal;