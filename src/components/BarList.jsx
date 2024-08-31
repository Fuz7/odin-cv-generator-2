/* eslint-disable react/prop-types */
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BarData from './BarData';

function BarList({ active, buttonName, barName, data, setData }) {
  const [savedData, setSavedData] = useState(null);
  const [dataIndex, setDataIndex] = useState(null);

  const selectActiveBarList = (event, index, inputs) => {
    event.stopPropagation();
    setDataIndex(index);
    const copyOfInputsData = [...inputs];
    setSavedData(copyOfInputsData);
  };

  const deleteBarList = (e, deletedIndex) => {
    e.stopPropagation();
    const deletedBarListData = data.map((bar) => {
      if (bar.barName === barName) {
        bar.list = bar.list.filter((item, index) => index !== deletedIndex);
        return bar;
      }
      return bar;
    });
    setData(deletedBarListData);
  };

  function renderBarList() {
    return (
      <>
        <div
          className={
            active
              ? 'formBar__barListContainer--active'
              : 'formBar__barListContainer'
          }
        >
          <div
            className={
              active
                ? 'barListContainer__separator--active'
                : 'barListContainer__separator'
            }
          ></div>
          {data.map((bar) => {
            if (bar.barName === barName && bar.list.length > 0) {
              return bar.list.map((item, index) => {
                return (
                  <div
                    className="barList"
                    key={barName + 'barList' + item[0].id}
                    onClick={(e) => selectActiveBarList(e, index, item)}
                  >
                    <p
                      className="barList__title"
                      key={barName + 'barList__title' + item[0].id}
                    >
                      {item[0].data}
                    </p>
                    <button
                      onClick={(e) => deleteBarList(e, index)}
                      className="barList__button "
                      key={barName + 'barList__button' + item[0].id}
                    ></button>
                  </div>
                );
              });
            }
          })}
          {data.map((bar) => {
            if (bar.barName === barName && bar.list.length > 0) {
              return (
                <div
                  key={bar.barName + 'separator'}
                  className="barListContainer__separator--active"
                ></div>
              );
            }
          })}

          <button
            onClick={(event) => addBarList(event, barName,data, setData,setDataIndex,setSavedData)}
            className="barListContainer__addButton"
          >
            {buttonName}
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      {dataIndex !== null ? (
        <BarData
          active={active}
          barName={barName}
          data={data}
          setData={setData}
          currentData={savedData}
          dataIndex={dataIndex}
          setDataIndex={setDataIndex}
        />
      ) : (
        renderBarList()
      )}
    </>
  );
}

function addBarList(e,barName, data, setData,setDataIndex,setSavedData) {
  stopEventPropagation(e);
  
  const updatedData =  data.map((bar) => {
      if (bar.barName === barName&&barName === 'workExperienceBar') {
        bar.list = [
          ...bar.list,
          [
            {
              id: uuidv4(),
              type: 'textField',
              title: 'Company Name',
              data: '',
              placeHolder: 'Nooble ',
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
              placeHolder: 'Oct 2023',
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
              placeHolder: 'December 2023',
            },
            {
              type: 'list',
              title: 'Bullet Points',
              listItems: [{ id: uuidv4(), data: '' }],
              placeHolder: '',
            },
          ],
        ];
      } else if (bar.barName === barName&&barName === 'educationalExperienceBar') {
        bar.list = [
          ...bar.list,
          [
            {
              id: uuidv4(),
              type: 'textField',
              title: 'School Name',
              data: '',
              placeHolder: 'University Of Mindanao',
            },
            {
              type: 'textField',
              title: 'Course',
              data: '',
              placeHolder: 'Bachelor Of Science In Fixing Printer ',
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
              placeHolder: 'November 2023',
            },
            {
              type: 'list',
              title: 'Bullet Points',
              listItems: [{ id: uuidv4(), data: '' }],
              placeHolder: '',
            },
          ],
        ];
      } else if (bar.barName === barName&&barName === 'projectsBar') {
        bar.list = [
          ...bar.list,
          [
            {
              id: uuidv4(),
              type: 'textField',
              title: 'Project Name',
              data: '',
              placeHolder: 'Todo List',
            },
            {
              type: 'textField',
              title: 'Tech Stack',
              data: '',
              placeHolder: 'HTML, CSS, Javascript',
            },
            {
              type: 'textField',
              title: 'Source Code',
              data: '',
              placeHolder: 'github.com',
            },
            {
              type: 'textField',
              title: 'Link',
              data: '',
              placeHolder: 'github.com/Fuz7',
            },
            {
              type: 'textField',
              title: 'Demo',
              data: '',
              placeHolder: 'Fuz7.github.io/cv-generator2',
            },
            {
              type: 'textField',
              title: 'Demo Link',
              data: '',
              placeHolder: 'Fuz7.github.io/cv-generator2/index.html',
            },
          ],
        ];
      }
      return bar;
    });
  const bar = data.find(bar => bar.barName === barName)
  const latestList = bar.list[(bar.list.length - 1)]
  const latestDataIndex = (updatedData.filter((bar)=>(bar.barName ===barName)))
  .map((bar) => bar.list.length - 1)[0]
  setData(updatedData)
  setSavedData(latestList)
  setDataIndex(latestDataIndex)
}

function stopEventPropagation(e) {
  e.stopPropagation();
}

export default BarList;
