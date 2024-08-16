/* eslint-disable react/prop-types */
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BarData from './BarData';

function BarList({ active, buttonName, barName, data, setData }) {
  const [dataIndex, setDataIndex] = useState(1);

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
              return bar.list.map((item) => {
                return (
                  <div
                    className="barList"
                    key={barName + 'barList' + item[0].id}
                  >
                    <p
                      className="barList__title"
                      key={barName + 'barList__title' + item[0].id}
                    >
                      {item[0].data}
                    </p>
                    <button
                      onClick={stopEventPropagation}
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
            onClick={(event) => addBarList(event, barName, data, setData)}
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
      {dataIndex ? (
        <BarData
          active={active}
          barName={barName}
          data={data}
          setData={setData}
          dataIndex={dataIndex}
          setDataIndex={setDataIndex}
        />
      ) : (
        renderBarList()
      )}
    </>
  );
}

function addBarList(e, barName, data, setData) {
  stopEventPropagation(e);

  setData((data) => {
    return data.map((bar) => {
      if (bar.barName === barName) {
        bar.list = [
          ...bar.list,
          [
            {
              id: uuidv4(),
              type: 'Company Name',
              title: '',
              data: 'Mapua Malayan',
            },
          ],
        ];
      }
      return bar;
    });
  });
}

function stopEventPropagation(e) {
  e.stopPropagation();
}

export default BarList;
