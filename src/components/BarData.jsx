import FormType from './FormType';

function BarData({ active, dataIndex, barName, data, setData, setDataIndex }) {
  return (
    <>
      <div
        onClick={(e) =>e.stopPropagation()}
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
                  const uiq = groupOfInput[0].id 
                  return groupOfInput.map((item,itemIndex) => {
                    return (<FormType
                      key={uiq + itemIndex}
                      type={item.type}
                      data={item.data}
                      index={groupOfInputIndex}
                      placeHolder={item.placeHolder}
                      barName = {barName}
                      title={item.title}
                      state={data}
                      draggable={true}
                      setState={setData}
                    />);
                  });
                }
              });
            }
          })}
        </div>
      </div>
    </>
  );
}

export default BarData;
