import emailImage from '@svgs/emailImage.svg';
import phoneNumberImage from '@svgs/phonenumberImage.svg';
import addressImage from '@svgs/addressImage.svg';
import websiteImage from '@svgs/urlImage.svg';

function CVPaper({ draggableData, personalData }) {
  return (
    <>
      <div className="CVPaper">
        <PersonalInfo personalData={personalData}></PersonalInfo>
        {draggableData.map((bar) => {
          if (bar.barName === 'workExperienceBar') {
            return <WorkExperienceInfo key={bar.barName} data={bar.list} />;
          }
        })}
      </div>
    </>
  );
}

function PersonalInfo({ personalData }) {
  return (
    <div className="personalInfoContainer">
      <div className="personalInfo__leftSide">
        <div className="personalInfo__fullName">
          <p>{personalData[0].data}</p>
        </div>
        <div className="personalInfo__jobTitle">
          <p>{personalData[1].data}</p>
        </div>
        <div className="personalInfo__summary">
          <p>{personalData[6].data}</p>
        </div>
      </div>
      <div className="personalInfo__rightSide">
        <div className="personalInfo__email">
          {personalData[2].data.length > 0 ? (
            <>
              <img src={emailImage} alt="" />
              <p>{personalData[2].data}</p>
            </>
          ) : null}
        </div>
        <div className="personalInfo__phoneNumber">
          {personalData[4].data.length > 0 ? (
            <>
              <img src={phoneNumberImage} alt="" />
              <p>{personalData[4].data}</p>
            </>
          ) : null}
        </div>
        <div className="personalInfo__address">
          {personalData[3].data.length > 0 ? (
            <>
              <img src={addressImage} alt="" />
              <p>{personalData[3].data}</p>
            </>
          ) : null}
        </div>
        <div className="personalInfo__website">
          {personalData[5].data.length > 0 ? (
            <>
              <img src={websiteImage} alt="" />
              <a href={personalData[5].data}>{personalData[5].data}</a>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function WorkExperienceInfo({ data }) {
  const correctDateFormat = (startDate, endDate,present) => {
    if(startDate.length > 0 && present){
      return startDate + ' - ' + 'Present'
    }
    else if (startDate.length > 0 && endDate.length > 0){
      return startDate + ' - ' + endDate;
    }else if (present) return 'Present'

    return startDate + endDate;
  };
  if (data === undefined || data.length === 0) return;
  return (
    <div className="workExperienceInfoContainer">
      <p className="draggableTitle">Professional Experience</p>
      <div className="draggableLineSeparator"></div>
      {data.map((list) => {
        return (
          <div key={list[0].id} className="workExperience__listContainer">
            <div className="workExperience__titleAndDateContainer">
              <p className="workExperience__title">{list[0].data}</p>
              <p className="workExperience__date">
                {correctDateFormat(list[2].data, list[5].data,list[4].data)}
              </p>
            </div>
            <div className='workExperience__jobTitleAndAddressContainer'>
              <p className='workExperience__jobTitle'>{list[1].data}</p>
              <p className='workExperience__address'>{list[3].data}</p>
            </div>
            <ul className='workExperience__bulletPoints'>
              {list[6].listItems.map((list)=>
                (<>
                  <li>{list.data}</li>
                </>)
              )}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default CVPaper;
