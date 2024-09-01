import TitleBar from './components/TitleBar';
import CreatedByBar from './components/CreatedByBar';
import PersonalBar from './components/PersonalBar';
import WorkExperienceBar from './components/WorkExperienceBar';
import EducationalExperienceBar from './components/EducationalExperienceBar';
import ProjectsBar from './components/ProjectsBar';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { closestCorners, DndContext } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { ClickContext } from './components/ClickContext';
import CVPaper from './components/CVPaper';


function App() {
  const [personalData, setPersonalData] = useState([
    {
      type: 'textField',
      title: 'Full Name',
      data: '',
      placeHolder: 'John Doe',
    },
    {
      type: 'textField',
      title: 'Job Title',
      data: '',
      placeHolder: 'Senior Software Engineer',
    },
    {
      type: 'textField',
      title: 'Email',
      data: '',
      placeHolder: 'johndoe@gmail.com',
    },
    {
      type: 'textField',
      title: 'Address',
      data: '',
      placeHolder: 'Tokyo, Japan',
    },
    {
      type: 'textField',
      title: 'Phone Number',
      data: '',
      placeHolder: '937 200 020',
    },
    {
      type: 'textField',
      title: 'Website',
      data: '',
      placeHolder: 'www.linkedin.sample.com',
    },
    {
      type: 'textArea',
      title: 'Summary',
      data: '',
      placeHolder: 'As a Software Engineer i ...',
    },
  ]);

  const [draggableData, setDraggableData] = useState([
    {
      barName: 'workExperienceBar',
      list: [
      ],
    },
    {
      barName: 'educationalExperienceBar',
      list: [
      ],
    },
    {
      barName: 'projectsBar',
      list: [
      ],
    },
  ]);
  
  const [isClicked,setIsClicked] = useState({
    workExperienceBar: false,
    educationalExperienceBar:false,
    projectsBar:false,   
  })

  const collapseElements = () => {
    
    const activeDraggableBars = Array.from(
      document.getElementsByClassName('formBar__barDataContainer--active'),
    );

    const activeArrowBars = Array.from(
      document.getElementsByClassName('formBar__dropdownArrow--active'),
    );

    const activeBarList = Array.from(
      document.getElementsByClassName('formBar__barListContainer--active'),
    );

    activeDraggableBars.forEach((element) => {
      element.classList.remove('formBar__barDataContainer--active');
      element.classList.add('formBar__barDataContainer');
    });
    activeArrowBars.forEach((element) => {
      element.classList.remove('formBar__dropdownArrow--active');
      element.classList.add('formBar__dropdownArrow');
    });
    activeBarList.forEach((element) => {
      element.classList.remove('formBar__barListContainer--active');
      element.classList.add('formBar__barListContainer');
    });

    setIsClicked(prevStates =>{
      const newStates = {}
      for (let key in prevStates){
        newStates[key] = false
      }
      return newStates
    })

  };

  const getBarNamePosition = (barName) =>
    draggableData.findIndex((bar) => bar.barName === barName);

  const handleSortOnBars = (event) => {
    const { active, over } = event;
    const originalPos = getBarNamePosition(active.id)
    const newPos = getBarNamePosition(over.id)
    const newOrderBars = arrayMove(draggableData,originalPos,newPos)
    setDraggableData(newOrderBars)
  };
  console.log(draggableData)
  return (
    <>
    <ClickContext.Provider value={{isClicked,setIsClicked}}>

      <div className="formContainer">
        <TitleBar setPersonalData={setPersonalData} setDraggableData={setDraggableData}></TitleBar>
        <CreatedByBar></CreatedByBar>
        <PersonalBar
          formState={personalData}
          setState={setPersonalData}
          ></PersonalBar>
        <DndContext
          onDragStart={collapseElements}
          onDragEnd={(e) => handleSortOnBars(e)}
          collisionDetection={closestCorners}
          >
          <SortableContext
            items={draggableData.map((bar) => bar.barName)}
            strategy={verticalListSortingStrategy}
            >
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
          </SortableContext>
        </DndContext>
      </div>
        </ClickContext.Provider>
      <div className="outputContainer">
          <CVPaper draggableData={draggableData} personalData={personalData}></CVPaper>
      </div>
    </>
  );
}
export default App;
