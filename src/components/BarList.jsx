/* eslint-disable react/prop-types */
function BarList({ active,buttonName,barName,data,setData }) {
  const workData = data.find((bar)=> bar.barName === barName)
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
        {data.map((bar) =>{
          if(bar.barName === barName && bar.list.length > 0){
            return bar.list.map((item) =>{
              return (<div className="nig " key={barName + 'sa'}>das</div>)
            })
          }
        })}
        <div className="barList">
          <p className="barList__title">University Of Mindanao</p>
          <button onClick={stopEventPropagation} className='barList__button'></button>
        </div>
        {data.map((bar) => {
          if(bar.barName === barName && bar.list.length > 0){
            return <div key={bar.barName + "separator"} className="barListContainer__separator--active"></div>
          }
        })}
        
       <button onClick={stopEventPropagation} className="barListContainer__addButton">{buttonName}</button> 
      </div>
    </>
  );
}

function stopEventPropagation(e){  
  e.stopPropagation()
}

export default BarList;
