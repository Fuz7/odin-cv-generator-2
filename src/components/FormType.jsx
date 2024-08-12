/* eslint-disable react/prop-types */
function FormType({ type, data,title, state, setState }) {
  
  const setDataChange = (changedData) =>{
    const modifiedState = state.map((item) =>
      item.title === title?{...item, data:changedData} : item
    )
    console.log(modifiedState)
    setState(modifiedState)
  }


  const formInput = () => {
    switch (type) {
      case 'textField':
        return (
          <input
            className="inputContainer__textField"
            type="text"
            value={data}
            onChange={(e) => setDataChange(e.target.value)}
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
