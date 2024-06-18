import TitleBar from './components/TitleBar';
import CreatedByBar from './components/CreatedByBar';
import PersonalBar from './components/PersonalBar';
import WorkExperienceBar from './components/WorkExperienceBar';
import EducationalExperienceBar from './components/EducationalExperienceBar';
import ProjectsBar from './components/ProjectsBar';
import { useState } from 'react';
function App() {
  const [personalData, setPersonalData] = useState([
    { type: 'textField', title: 'Full Name', data: '' },
    { type: 'textField', title: 'Job Title', data: '' },
    { type: 'textField', title: 'Email', data: '' },
    { type: 'textField', title: 'Address', data: '' },
    { type: 'textField', title: 'Phone Number', data: '' },
    { type: 'textField', title: 'Website', data: '' },
    { type: 'textArea', title: 'Summary', data: '' },
  ]);

  const [workData, setWorkData] = useState([
    [
      {
        type: 'textField',
        title: 'Full Name',
        data: 'Nooble',
      },
      { type: 'textField', title: 'Job Title', data: 'Software Engineer' },
      { type: 'dateField', title: 'Start Date', data: '09/10/2023' },
      { type: 'textField', title: 'Address', data:'Japan' },
      { type: 'booleanField', title: 'Ongoing', data:false },
      {type:'dateField',title:'End Date',data:'10/12/2024'},
      {type:'listField', title:'Bullet Points',data:[]}
    ],
    [{}],
  ]);

  return (
    <>
      <div className="formContainer">
        <TitleBar></TitleBar>
        <CreatedByBar></CreatedByBar>
        <PersonalBar
          formState={personalData}
          setState={setPersonalData}
        ></PersonalBar>
        <WorkExperienceBar formList={workData} setFormList={setWorkData}></WorkExperienceBar>
        <EducationalExperienceBar></EducationalExperienceBar>
        <ProjectsBar></ProjectsBar>
      </div>
      <div className="outputContainer"></div>
    </>
  );
}
export default App;
