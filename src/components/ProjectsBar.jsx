/* eslint-disable react/prop-types */
import projectsImageSource from '@svgs/projectsImage.svg';
import DraggableBarHeader from './DraggableBarHeader';
import BarList from './BarList';
function ProjectsBar({barName,data,setData}) {
  return (
    <DraggableBarHeader
      imgSource={projectsImageSource}
      title="Projects "
      barName={barName}
    >
    <BarList barName={barName} data={data} setData={setData} buttonName='+ Project' ></BarList>
    </DraggableBarHeader>
  );
}

export default ProjectsBar;
