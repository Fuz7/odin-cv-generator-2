import emailImage from '@svgs/emailImage.svg'
import phoneNumberImage from '@svgs/phonenumberImage.svg'
import addressImage from '@svgs/addressImage.svg'
import websiteImage from '@svgs/urlImage.svg'

function CVPaper({draggableData,personalData}){
    return(<>
      <div className="CVPaper">
        <PersonalInfo personalData={personalData}></PersonalInfo>
      </div>
    </>)
}

function PersonalInfo({personalData}){
  return(<div className="personalInfoContainer">
    <div className="personalInfo__leftSide">
      <div className="personalInfo__fullName"><p>{personalData[0].data}</p></div>
      <div className="personalInfo__jobTitle"><p>{personalData[1].data}</p></div>
      <div className="personalInfo__summary"><p>{personalData[6].data}</p></div>
    </div>
    <div className="personalInfo__rightSide">
      <div className="personalInfo__email">
      {personalData[2].data.length > 0?(
        <>
        <img src={emailImage} alt="" />
        <p>
        {personalData[2].data}
        </p>
        </>
      ):null}
      </div>
      <div className="personalInfo__phoneNumber">
      {personalData[4].data.length > 0?(
        <>
        <img src={phoneNumberImage} alt="" />
        <p>
        {personalData[4].data}
        </p>
        </>
      ):null}
      </div>
      <div className="personalInfo__address">
       {personalData[3].data.length > 0?(
        <>
        <img src={addressImage} alt="" />
        <p>
        {personalData[3].data}
        </p>
        </>
      ):null} 
      </div>
      <div className="personalInfo__website">
       {personalData[5].data.length > 0?(
        <>
        <img src={websiteImage} alt="" />
        <a href={personalData[5].data}>
        {personalData[5].data}
        </a>
        </>
      ):null} 
      </div>
    </div>
  </div>)
}
export default CVPaper