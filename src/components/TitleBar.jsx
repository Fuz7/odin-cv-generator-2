
import { v4 as uuidv4 } from 'uuid';

function TitleBar({setPersonalData,setDraggableData}){
  const autoFillForm = () =>{
    setPersonalData([
    {
      type: 'textField',
      title: 'Full Name',
      data: 'John Doe',
      placeHolder: 'John Doe',
    },
    {
      type: 'textField',
      title: 'Job Title',
      data: 'Senior Software Engineer',
      placeHolder: 'Senior Software Engineer',
    },
    {
      type: 'textField',
      title: 'Email',
      data: 'johndoe@gmail.com',
      placeHolder: 'johndoe@gmail.com',
    },
    {
      type: 'textField',
      title: 'Address',
      data: 'Tokyo, Japan',
      placeHolder: 'Tokyo, Japan',
    },
    {
      type: 'textField',
      title: 'Phone Number',
      data: '937 200 020',
      placeHolder: '937 200 020',
    },
    {
      type: 'textField',
      title: 'Website',
      data: 'www.linkedin.sample.com',
      placeHolder: 'www.linkedin.sample.com',
    },
    {
      type: 'textArea',
      title: 'Summary',
      data: 'As A Software Engineer I am proficient in ...',
      placeHolder: 'As a Software Engineer i ...',
    },

    ])

    setDraggableData([
    {
      barName: 'workExperienceBar',
      list: [
        [
          {
            id: uuidv4(),
            type: 'textField',
            title: 'Company Name',
            data: 'Nooble',
            placeHolder: 'Nooble ',
          },
          {
            type: 'textField',
            title: 'Job Title',
            data: 'Software Engineer',
            placeHolder: 'Software Engineer',
          },
          {
            type: 'textField',
            title: 'Start Date',
            data: 'October 2023',
            placeHolder: 'Oct 2023',
          },
          {
            type: 'textField',
            title: 'Address',
            data: 'Melbourne, Australia',
            placeHolder: 'Panacan, Japan',
          },
          {
            type: 'checkBox',
            title: 'Ongoing',
            data: true,
            placeHolder: '',
          },
          {
            type: 'textField',
            title: 'End Date',
            data: '',
            placeHolder: 'December 2023',
          },
          {
            type: 'list',
            title: 'Bullet Points',
            listItems: [
              { id: uuidv4(),  data: 'Fixed Some Bugs' },
              { id: uuidv4(),  data: 'Centered A Div' },
              { id: uuidv4(),  data: 'Had My Merge Request Accepted' },
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
            data: 'University Of Mindanao',
            placeHolder: 'University Of Mindanao',
          },
          {
            type: 'textField',
            title: 'Course',
            data: 'Bachelor Of Science In Computer Science',
            placeHolder: 'Bachelor Of Science In Fixing Printer ',
          },
          {
            type: 'textField',
            title: 'Start Date',
            data: 'August 2023',
            placeHolder: 'Oct 2024',
          },
          {
            type: 'textField',
            title: 'Address',
            data: 'Davao, Phillippines',
            placeHolder: 'Japanacan',
          },
          {
            type: 'checkBox',
            title: 'Ongoing',
            data: true,
            placeHolder: '',
          },
          {
            type: 'textField',
            title: 'End Date',
            data: '',
            placeHolder: 'November 2023',
          },
          {
            type: 'list',
            title: 'Bullet Points',
            listItems: [
              { id: uuidv4(), data: 'Tabang Kargag Bangko' },
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
            data: 'Todo List',
            placeHolder: 'Todo List',
          },
          {
            type: 'textField',
            title: 'Tech Stack',
            data: 'HTML, CSS, Javascript',
            placeHolder: 'HTML, CSS, Javascript',
          },
          {
            type: 'textField',
            title: 'Source Code',
            data: 'github.com',
            placeHolder: 'github.com',
          },
          {
            type: 'textField',
            title: 'Link',
            data: 'github.com/Fuz7',
            placeHolder: 'github.com/Fuz7',
          },
          {
            type: 'textField',
            title: 'Demo',
            data: 'Fuz7.github.io/cv-generator2',
            placeHolder: 'Fuz7.github.io/cv-generator2',
          },
          {
            type: 'textField',
            title: 'Demo Link',
            data: 'Fuz7.github.io/cv-generator2/index.html',
            placeHolder: 'Fuz7.github.io/cv-generator2/index.html',
          },
          {
            type: 'list',
            title: 'Bullet Points',
            listItems: [
              { id: uuidv4(), data: 'Implemented To Do List With Vanilla Javascript' },
              { id: uuidv4(), data: 'No Skill Issue Involved' },
              { id: uuidv4(), data: 'Pushed It To Github' },
            ],
            placeHolder: '',
          },
        ],
      ],
    },

    ])

  }
  return<div className="titleBar">
        <h1 className="titleBar__titleText">CV Generator</h1>
        <div onClick={autoFillForm} className="autofillButton">
          <span className="autofillButton__image"></span>
          <span className="autofillButton__text">Autofill</span>
        </div>
        <div className="saveButton">
          <span className="saveButton__image"></span>
          <span className="saveButton__text">Save</span>
        </div>
  </div>;
}



export default TitleBar