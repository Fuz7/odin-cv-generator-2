/* eslint-disable react/prop-types */
function BarList({ active,buttonName }) {
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
        <div className="barList">
          <p className="barList__title">University Of Mindanao</p>
          <button onClick={stopEventPropagation} className='barList__button'></button>
        </div>
        <div className="barListContainer__separator--active"></div>
       <button onClick={stopEventPropagation} className="barListContainer__addButton">{buttonName}</button> 
      </div>
    </>
  );
}

function stopEventPropagation(e){  
  e.stopPropagation()
}

export default BarList;
