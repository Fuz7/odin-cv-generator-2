/* eslint-disable react/prop-types */
import { closestCorners, DndContext } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import SortableBarPoints from './SortableBarPoints';
import { v4 as uuidv4 } from 'uuid';

function FormType({
  type,
  data,
  title,
  placeHolder,
  state,
  setState,
  draggable,
  index,
  barName,
}) {
  const setDataChange = (changedData) => {
    const modifiedState = state.map((item) =>
      item.title === title ? { ...item, data: changedData } : item,
    );
    setState(modifiedState);
  };

  const setDraggableDataChange = (changedData) => {
    const modifiedDraggableState = state.map((bar) => {
      if (bar.barName === barName) {
        bar.list = bar.list.map((groupOfInput, groupOfInputIndex) => {
          if (groupOfInputIndex === index) {
            return groupOfInput.map((input) =>
              input.title === title ? { ...input, data: changedData } : input,
            );
          }
          return groupOfInput;
        });
      }
      return bar;
    });
    setState(modifiedDraggableState);
  };


  const setCheckBoxActive = () => {
    const changedData = !data;
    const modifiedCheckBoxState = state.map((bar) => {
      if (bar.barName === barName) {
        bar.list = bar.list.map((groupOfInput, groupOfInputIndex) => {
          if (groupOfInputIndex === index) {
            return groupOfInput.map((input) =>
              input.title === title ? { ...input, data: changedData } : input,
            );
          }
          return groupOfInput;
        });
      }
      return bar;
    });
    setState(modifiedCheckBoxState);
  };

  const setBarPointsData = (changedData, id) => {
    const modifiedListData = state.map((bar) => {
      if (bar.barName !== barName) return bar;

      const updatedList = bar.list.map((groupOfInput, groupOfInputIndex) => {
        if (groupOfInputIndex !== index) return groupOfInput;

        return groupOfInput.map((input) => {
          if (input.title !== title) return input;
          input.listItems = input.listItems.map((item) =>
            item.id === id ? { ...item, data: changedData } : item,
          );
          return input;
        });
      });
      return { ...bar, list: updatedList };
    });
    setState(modifiedListData);
  };
  let ongoingData = false;
  if (draggable === true) {
    ongoingData = state.some((bar) => {
      if (bar.barName === barName) {
        return bar.list.some((groupOfInput, groupOfInputIndex) => {
          if (groupOfInputIndex === index) {
            return groupOfInput.some((input) => {
              if (input.title === 'Ongoing' && input.data === true) {
                return true;
              }
            });
          }
        });
      }
    });
  }
  const getBarList = () => {
    const bar = state.find((bar) => bar.barName === barName);

    if (!bar) return null;

    const groupOfInput = bar.list[index];

    if (!groupOfInput) return null;

    const input = groupOfInput.find((input) => input.title === title);
    return input.listItems || null;
  };

  const setBarPointsItemsOrder = (newOrderList) => {

    const modifiedListData = state.map((bar) => {
      if (bar.barName !== barName) return bar;

      const updatedList = bar.list.map((groupOfInput, groupOfInputIndex) => {
        if (groupOfInputIndex !== index) return groupOfInput;

        return groupOfInput.map((input) => {
          if (input.title !== title) return input;
          input.listItems = newOrderList
          return input;
        });
      });
      return { ...bar, list: updatedList };
    });
    setState(modifiedListData)
  }
  let barList;
  if (type === 'list') {
    barList = getBarList();
  }
  const getListPos = id => barList.findIndex(item =>item.id===id)
  const handleListDrag = (event)=>{
    const {active,over} = event
    if(active.id === over.id) return
    
    const originalPos = getListPos(active.id)
    const newPos = getListPos(over.id)
    const newOrderList = arrayMove(barList,originalPos,newPos)

    setBarPointsItemsOrder(newOrderList)
  }
  const deleteBarPoint = (deletedId) =>{
    const modifiedPointsData = state.map((bar)=>{
      if (bar.barName !== barName) return bar

      const updatedPoints = bar.list.map((groupOfInput,groupOfInputIndex)=>{
        if (groupOfInputIndex !== index) return groupOfInput
        return groupOfInput.map((input)=>{
          if(input.title !== title) return input
          input.listItems = input.listItems.filter(item=>item.id !== deletedId)
          return input
        })
      })
      return{...bar,list:updatedPoints}
    }) 
    setState(modifiedPointsData)
  }

  const addBarPoint = ()=>{
    const modifiedPointsData = state.map((bar)=>{
      if (bar.barName !== barName) return bar

      const updatedPoints = bar.list.map((groupOfInput,groupOfInputIndex)=>{
        if (groupOfInputIndex !== index) return groupOfInput
        return groupOfInput.map((input)=>{
          if(input.title !== title) return input
          const newList = [...input.listItems,{id:uuidv4(),data:''}]
          return {...input,listItems:newList}
        })
      })
      return{...bar,list:updatedPoints}
    }) 
    setState(modifiedPointsData)

  }

  const formInput = () => {
    switch (type) {
      case 'textField':
        return title === 'End Date' && ongoingData === true ? (
          <input
            readOnly
            value="Present"
            type="text"
            className="inputContainer__textField"
          ></input>
        ) : (
          <input
            className="inputContainer__textField"
            type="text"
            value={data}
            onChange={(e) => {
              draggable
                ? setDraggableDataChange(e.target.value)
                : setDataChange(e.target.value);
            }}
            placeholder={placeHolder}
          ></input>
        );

      case 'textArea':
        return (
          <textarea
            className="inputContainer__textArea"
            id=""
            cols="44"
            rows="2"
            placeholder={placeHolder}
            value={data}
            onChange={(e) => setDataChange(e.target.value)}
          ></textarea>
        );
      case 'checkBox':
        return (
          <div
            onClick={() => setCheckBoxActive()}
            className="inputContainer__checkBox"
          >
            <div
              className={
                data === true
                  ? 'checkBox__togglerContainer--active'
                  : 'checkBox__togglerContainer'
              }
            >
              <div className="checkBox__togglerCircle"></div>
            </div>
          </div>
        );
      case 'list':
        return (
          <div className="listContainer">
            <button onClick={() => addBarPoint()} className="addListButton">+ Add Points</button>
            {barList.length > 0 ? (
              <DndContext onDragEnd={(e)=>handleListDrag(e)} collisionDetection={closestCorners}>
                <SortableContext strategy={verticalListSortingStrategy} items={barList.map(item =>item.id)}>
                <div className="listItems">
                  {barList.map((listItem) => {
                    return (
                      <SortableBarPoints key={listItem.id} deleteBarPoint={deleteBarPoint} listItem={listItem} setBarPointsData={setBarPointsData} />
                    );
                  })}
                </div>
                  </SortableContext>
              </DndContext>
            ) : null}
          </div>
        );
    }
  };

  return (
    <>
      <div
        className={
          type === 'checkBox'
            ? 'inputContainer__inputField checkBox'
            : 'inputContainer__inputField'
        }
      >
        <label className="inputContainer__label">{title}</label>
        {formInput()}
      </div>
    </>
  );
}

export default FormType;
