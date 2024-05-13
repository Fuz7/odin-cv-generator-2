import personalImageSrc from '@svgs/personalImage.svg';
import dropdownIconSrc from '@svgs/arrowImage.svg';
import { useState } from 'react';
function PersonalBar() {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div onClick={toggleClick} className="formBar">
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
  );
}

export default PersonalBar;
