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

  const [draggableData, setDraggableData] = useState([
    {
      barName: 'workExperienceBar',
      list: [
        [
          { type: 'textField', title: 'Company Name', data: '' },
          {
            type: 'textField',
            title: 'Job Title',
            data: '',
          },
          {type:'textField',title:'Start Date',data:''},{
            type:'textField',title:'Address',data:''
          },
        ],
      ],
    },
    { barName: 'educationalExperienceBar', list: [] },
    {
      barName: 'projectsBar',
      list: [],
    },
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
        <WorkExperienceBar></WorkExperienceBar>
        <EducationalExperienceBar></EducationalExperienceBar>
        <ProjectsBar></ProjectsBar>
      </div>
      <div className="outputContainer"></div>
    </>
  );
}
export default App;
