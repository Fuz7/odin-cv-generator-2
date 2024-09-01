import FormType from './FormType';

function BarData({ active, dataIndex, barName, data, setData, setDataIndex,currentData }) {
  

  const deleteBarData = (e,deletedIndex)=>{ 
    e.stopPropagation()
    const deletedBarListData = data.map((bar) =>{
      if(bar.barName === barName){
        bar.list = bar.list.filter((item,index)=>
          index !== deletedIndex
        )
        return bar
      }
      return bar
    })
    setDataIndex(null)
    setData(deletedBarListData)
  }
  
  const cancelInputtedData = (e)=>{
    e.stopPropagation()
    const canceledBarListData = data.map((bar)=>{
      if(bar.barName === barName){
        bar.list = bar.list.map((groupOfInput,groupOfInputIndex)=>{
          if(groupOfInputIndex === dataIndex){
            return groupOfInput.map((input,index)=>{
              if(index < 6)return currentData[0][index]
              if(index === 6) {
                input.listItems=currentData[1]
                return input
              }
            })
          }
          return groupOfInput
        })
      }
      return bar
      
    })
    setData(canceledBarListData)
    setDataIndex(null)
  }

  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        className={
          active
            ? 'formBar__barDataContainer--active'
            : 'formBar__barDataContainer'
        }
      >
        <div
          className={
            active
              ? 'barDataContainer__separator--active'
              : 'barDataContainer__separator'
          }
        ></div>
        <div className="barData__inputContainer">
          {data.map((bar) => {
            if (bar.barName === barName) {
              return bar.list.map((groupOfInput, groupOfInputIndex) => {
                if (dataIndex === groupOfInputIndex) {
                  const uiq = groupOfInput[0].id;
                  return groupOfInput.map((item, itemIndex) => {
                    return (
                      <FormType
                        key={uiq + itemIndex}
                        type={item.type}
                        data={item.data}
                        index={groupOfInputIndex}
                        placeHolder={item.placeHolder}
                        barName={barName}
                        title={item.title}
                        state={data}
                        draggable={true}
                        setState={setData}
                      />
                    );
                  });
                }
              });
            }
          })}
          <div className="barData__buttonContainer">
            <button onClick={(e)=>deleteBarData(e,dataIndex)} className="barData__deleteButtonContainer">
              <span className="barData__deleteButtonImage"></span>
              Delete
            </button>
            <div className="barData__deleteAndSaveContainer">
              <button
                onClick={(e) => cancelInputtedData(e)}
                className="barData__cancelButton"
              >
                Cancel
              </button>
              <button onClick={()=>setDataIndex(null)} className="barData__saveButton">Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BarData;
