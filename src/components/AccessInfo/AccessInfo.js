import "./AccessInfo.scss";
import editIcon from '../../assets/icons/edit.svg';

function AccessInfo() {
  return (
    <div className="access__info">
        <h3 className="access__info-heading">Accessibility info</h3>
        <div className="access__info-container">
            <p className="access__info-text">
            No info here is visible to other people using Google services.{" "}
            <span className="blue">Learn more.</span>
            </p>
            <p className="access__info-text blue special">Edit</p>
        </div>
        <div className='access__info-table'>
            <div className="access__info-table-single">
                <p className="access__table-text">ADHD</p>
                <p className="access__table-text-description">Screen Information Reduction</p>
                <img className="access__info-edit" src={editIcon} alt='pencil' />
            </div>
            <div className="access__info-table-single">
                <p className="access__table-text">Color Blindness</p>
                <p className="access__table-text-description">Red/Green Blindness - Color Contrast Setting: RG</p>
                <img className="access__info-edit" src={editIcon} alt='pencil' />
            </div>
            <div className="access__info-table-single">
                <p className="access__table-text">Deafness</p>
                <p className="access__table-text-description">Captions (for available audio): on</p>
                <img className="access__info-edit" src={editIcon} alt='pencil' />
            </div>
            <div className="access__info-table-single no-border">
                <p className="access__table-text">Screen Reader</p>
                <p className="access__table-text-description">TalkBack screenreader functionality enabled</p>
                <img className="access__info-edit" src={editIcon} alt='pencil' />
            </div>
        </div>
    </div>
  );
}

export default AccessInfo;
