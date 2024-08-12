/* eslint-disable react/prop-types */
function BarList({ active }) {
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
        
      </div>
    </>
  );
}

export default BarList;
