import workExperienceImageSource from '@svgs/workImage.svg';
import DraggableBarHeader from './DraggableBarHeader';
function WorkExperienceBar({ formList, setFormList}) {



  return (
    <DraggableBarHeader
      imgSource={workExperienceImageSource}
      title="Professional Experience  "
    >
      <div></div>

    </DraggableBarHeader>
  );
}

export default WorkExperienceBar;
