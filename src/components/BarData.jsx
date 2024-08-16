function BarData({ active, dataIndex, barName, data, setData, setDataIndex }) {
  return (
    <>
      <div
        className={
          active
            ? 'formBar__barDataContainer--active'
            : 'formBar__barDataContainer'
        }
      ></div>
    </>
  );
}

export default BarData;
