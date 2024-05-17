import personalImageSrc from '@svgs/personalImage.svg';
import dropdownIconSrc from '@svgs/arrowImage.svg';
import { useState } from 'react';
function PersonalBar() {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div onClick={toggleClick} className="formBar">
        <div className="formbar__iconContainer">
          <img src={personalImageSrc} alt="Icon" />
          <p className="formBar__title--personalBar">Personal Information</p>
          <img
            src={dropdownIconSrc}
            alt="dropdownIcon"
            className={
              isClicked
                ? 'formBar__dropdownArrow--active'
                : 'formBar__dropdownArrow'
            }
          />
        </div>
        <div
          className={
            isClicked
              ? 'formBar__columnContainer--active'
              : 'formBar__columnContainer'
          }
        >
          <div
            className={
              isClicked
                ? 'columnContainer__separator--active'
                : 'columnContainer__separator'
            }
          ></div>
          <div className='formBar__inputContainer'>

          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalBar;
