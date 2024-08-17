/* eslint-disable react/prop-types */
function FormType({ type, data,title, state, setState,draggable,index,barName }) {
  
  const setDataChange = (changedData) =>{
    const modifiedState = state.map((item) =>
      item.title === title?{...item, data:changedData} : item
    )
    setState(modifiedState)
  }

  const setDraggableDataChange = (changedData)=>{
    const modifiedDraggableState = state.map((bar)=>{
      if(bar.barName == barName){
         bar.list = bar.list.map((groupOfInput,groupOfInputIndex)=>{
          if(groupOfInputIndex === index){
            return groupOfInput.map((input)=>
              input.title === title?{...input,data:changedData}:input
            )
            
          }
          return groupOfInput
        })
      }
      return bar
    })
    setState(modifiedDraggableState)
  }

  const formInput = () => {
    switch (type) {
      case 'textField':
        return (
          <input
            className="inputContainer__textField"
            type="text"
            value={data}
            onChange={(e) => {
              draggable?setDraggableDataChange(e.target.value):setDataChange(e.target.value)
            }}
          ></input>
        );

      case 'textArea':
        return (
          <textarea
            className="inputContainer__textArea"
            id=""
            cols="44"
            rows="2"
            value={data}
            onChange={(e) => setDataChange(e.target.value)}
          ></textarea>
        );
    }
  };

  return (
    <>
      <div className="inputContainer__inputField">
        <label className="inputContainer__label">{title}</label>
        {formInput()}
      </div>
    </>
  );
}

export default FormType;
