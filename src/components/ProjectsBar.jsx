import projectsImageSource from '@svgs/projectsImage.svg';
import DraggableBarHeader from './DraggableBarHeader';
function ProjectsBar() {

  return (
    <DraggableBarHeader imgSource={projectsImageSource} title="Projects " ></DraggableBarHeader>
  );
}

export default ProjectsBar;
