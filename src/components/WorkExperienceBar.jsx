import workExperienceImageSource from '@svgs/workImage.svg';
import DraggableBarHeader from './DraggableBarHeader';
function WorkExperienceBar() {

  return (
    <DraggableBarHeader imgSource={workExperienceImageSource} title="Professional Experience  " ></DraggableBarHeader>
  );
}

export default WorkExperienceBar;
