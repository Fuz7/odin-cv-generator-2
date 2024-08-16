/* eslint-disable react/prop-types */
import educationalExperienceSource from '@svgs/educationImage.svg';
import DraggableBarHeader from './DraggableBarHeader';
import BarList from './BarList';

function EducationalExperienceBar({ barName, data, setData }) {
  return (
    <DraggableBarHeader
      imgSource={educationalExperienceSource}
      title="Educational   Experience  "
    >
    <BarList barName={barName} data={data} setData={setData} buttonName='+ Education'></BarList> 
    </DraggableBarHeader>
  );
}

export default EducationalExperienceBar;
