import TitleBar from "./components/TitleBar";
import CreatedByBar from "./components/CreatedByBar";
import PersonalBar from "./components/PersonalBar";
import WorkExperienceBar from "./components/WorkExperienceBar";
import EducationalExperienceBar from "./components/EducationalExperienceBar";
import ProjectsBar from "./components/ProjectsBar";
function App() 



{
  return <>
  <div className="formContainer">
    <TitleBar></TitleBar>
    <CreatedByBar></CreatedByBar>
    <PersonalBar></PersonalBar>
    <WorkExperienceBar></WorkExperienceBar>
    <EducationalExperienceBar></EducationalExperienceBar>
    <ProjectsBar></ProjectsBar>
  </div>
  <div className="outputContainer"></div>
  </>
}
export default App;
