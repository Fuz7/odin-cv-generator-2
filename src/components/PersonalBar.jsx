import personalImageSrc from '@svgs/personalImage.svg';
import dropdownIconSrc from '@svgs/arrowImage.svg';
import { useState } from 'react';
import FormType from './FormType';
function PersonalBar() {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClick = () => {
    setIsClicked(!isClicked);
  };

  const [personalData, setPersonalData] = useState([
    { type: 'textField', title: 'Full Name', data: '' },
    {type:'textField',title:'Job Title',data:''},
    {type:'textField', title:'Email',data:''},
    {type:'textField', title:'Address', data:''},
    {type:'textField', title:'Phone Number',data:''},
    {type:'textField',title:'Website',data:''},
    {type:'textArea',title:'Summary',data:''}
  ]);

  return (
    <>
      <div className="formBar">
        <div onClick={toggleClick} className="formbar__iconContainer">
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
          <div className="formBar__inputContainer">
          {personalData.map((data,index)=>{
            return <FormType key={index} type={data.type} title={data.title} data={data.data}  state={personalData} setState={setPersonalData}></FormType>
          })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalBar;
