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
        [
          {
            id: uuidv4(),
            type: 'textField',
            title: 'Company Name',
            data: 'University Of',
            placeHolder: 'University Of Mindanao',
          },
          {
            type: 'textField',
            title: 'Job Title',
            data: '',
            placeHolder: 'Software Engineer',
          },
          {
            type: 'textField',
            title: 'Start Date',
            data: '',
            placeHolder: 'Nooble',
          },
          {
            type: 'textField',
            title: 'Address',
            data: '',
            placeHolder: 'Panacan, Japan',
          },
          {
            type: 'checkBox',
            title: 'Ongoing',
            data: false,
            placeHolder: '',
          },
          {
            type: 'textField',
            title: 'End Date',
            data: '',
            placeHolder: 'October 21, 2023',
          },
          {
            type: 'list',
            title: 'Bullet Points',
            listItems: [
              { id: uuidv4(), data: 'sa' },
              { id: uuidv4(), data: '' },
            ],
            placeHolder: '',
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
            placeHolder: 'Nooble',
          },
          {
            type: 'textField',
            title: 'Start Date',
            data: '',
            placeHolder: 'March 12, 2022 ',
          },
          {
            type: 'textField',
            title: 'Start Date',
            data: '',
            placeHolder: 'Oct 2024',
          },
          {
            type: 'textField',
            title: 'Address',
            data: '',
            placeHolder: 'Japanacan',
          },
          {
            type: 'checkBox',
            title: 'Ongoing',
            data: false,
            placeHolder: '',
          },
          {
            type: 'textField',
            title: 'End Date',
            data: '',
            placeHolder: 'Oct 15, 2023',
          },
          {
            type: 'list',
            title: 'Bullet Points',
            listItems: [
              { id: uuidv4(), data: 'as' },
              { id: uuidv4(), data: '' },
            ],
            placeHolder: '',
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
            placeHolder: 'Hello World',
          },
          {
            type: 'textField',
            title: 'Titulo',
            data: '',
            placeHolder: 'Titulo',
          },
          {
            type: 'textField',
            title: 'Start Date',
            data: '',
            placeHolder: 'Sep 29',
          },
          {
            type: 'textField',
            title: 'Address',
            data: '',
            placeHolder: 'Panacan Japan',
          },
        ],
      ],
    },
  ]);

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

  return (
    <>
      <div className="formContainer">
        <TitleBar></TitleBar>
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
      <div className="outputContainer"></div>
    </>
  );
}
export default App;
