/* eslint-disable react/prop-types */
import draggableImageSrc from '@svgs/draggableImage.svg'

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

  const formInput = () => {
    switch (type) {
      case 'textField':
        return title === 'End Date' && ongoingData === true ? (
          <input readOnly value="Present" type="text" className="inputContainer__textField"></input>
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
        return(
          <div className="listContainer">
             <button className="addListButton">+ Add Points</button>
             <div className="listItems">
              <div className="list">
                <img className='list__draggableImage' src={draggableImageSrc} alt="draggableImage" />
                <input className='list__data'></input>
                <button className='list__deleteButton'></button>
              </div>
             </div>
          </div>
        )
    }
  };

  return (
    <>
      <div className={type === 'checkBox'?'inputContainer__inputField checkBox':"inputContainer__inputField"}>
        <label className="inputContainer__label">{title}</label>
        {formInput()}
      </div>
    </>
  );
}

export default FormType;
