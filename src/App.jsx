import TitleBar from './components/TitleBar';
import CreatedByBar from './components/CreatedByBar';
import PersonalBar from './components/PersonalBar';
import WorkExperienceBar from './components/WorkExperienceBar';
import EducationalExperienceBar from './components/EducationalExperienceBar';
import ProjectsBar from './components/ProjectsBar';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
          {
            id: uuidv4(),
            type: 'textField',
            title: 'Company Name',
            data: 'University Of',
          },
          {
            type: 'textField',
            title: 'Job Title',
            data: '',
          },
          { type: 'textField', title: 'Start Date', data: '' },
          {
            type: 'textField',
            title: 'Address',
            data: '',
          },
        ],
      ],
    },
    {
      barName: 'educationalExperienceBar',
      list: [
        [
          {
            id: uuidv4(),
            type: 'textField',
            title: 'School Name',
            data: 'Nooble',
          },
          {
            type: 'textField',
            title: 'Titulo',
            data: '',
          },
          { type: 'textField', title: 'Start Date', data: '' },
          {
            type: 'textField',
            title: 'Address',
            data: '',
          },
        ],
      ],
    },
    {
      barName: 'projectsBar',
      list: [
        [
          {
            id: uuidv4(),
            type: 'textField',
            title: 'Project Name',
            data: 'Hello Goy',
          },
          {
            type: 'textField',
            title: 'Titulo',
            data: '',
          },
          { type: 'textField', title: 'Start Date', data: '' },
          {
            type: 'textField',
            title: 'Address',
            data: '',
          },
        ],
      ],
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
        {draggableData.map((bar) => {
          if (bar.barName === 'workExperienceBar') {
            return (
              <WorkExperienceBar
                data={draggableData}
                setData={setDraggableData}
                barName={bar.barName}
                key={bar.barName}
              ></WorkExperienceBar>
            );
          } else if (bar.barName === 'educationalExperienceBar') {
            return (
              <EducationalExperienceBar
                data={draggableData}
                setData={setDraggableData}
                barName={bar.barName}
                key={bar.barName}
              ></EducationalExperienceBar>
            );
          } else if (bar.barName === 'projectsBar') {
            return (
              <ProjectsBar
                data={draggableData}
                setData={setDraggableData}
                barName={bar.barName}
                key={bar.barName}
              ></ProjectsBar>
            );
          }
          return null;
        })}
      </div>
      <div className="outputContainer"></div>
    </>
  );
}
export default App;
