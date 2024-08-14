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
              return (<div className="barList" key={barName + 'barList'+item[0].id}>
                <p className="barList__title" key={barName +'barList__title' +item[0].id}>{item[0].data}</p>
                <button onClick={stopEventPropagation} className="barList__button "key={barName+"barList__button"+item[0].id}></button>
              </div>)
            })
          }
        })}
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
