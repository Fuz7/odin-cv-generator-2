import workExperienceImageSource from '@svgs/workImage.svg';
import DraggableBarHeader from './DraggableBarHeader';
import BarList from './BarList';
function WorkExperienceBar() {
  return (
    <>
      <DraggableBarHeader
        imgSource={workExperienceImageSource}
        title="Professional Experience  "
      >

      <BarList></BarList>
      </DraggableBarHeader>
    </>
  );
}

export default WorkExperienceBar;
