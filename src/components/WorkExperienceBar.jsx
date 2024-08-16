/* eslint-disable react/prop-types */
import workExperienceImageSource from '@svgs/workImage.svg';
import DraggableBarHeader from './DraggableBarHeader';
import BarList from './BarList';
function WorkExperienceBar({ barName, data, setData }) {
  console.log(data);
  return (
    <>
      <DraggableBarHeader
        imgSource={workExperienceImageSource}
        title="Professional Experience  "
      >
        <BarList
          barName={barName}
          data={data}
          setData={setData}
          buttonName="+ Experience"
        ></BarList>
      </DraggableBarHeader>
    </>
  );
}

export default WorkExperienceBar;
