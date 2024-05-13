import TitleBar from "./components/TitleBar";
import CreatedByBar from "./components/CreatedByBar";
import PersonalBar from "./components/PersonalBar";
import DraggableBarHeader from "./components/DraggableBarHeader";
import workImageSource from '@svgs/workImage.svg'


function App() {
  return <>
  <div className="formContainer">
    <TitleBar></TitleBar>
    <CreatedByBar></CreatedByBar>
    <PersonalBar></PersonalBar>
    <DraggableBarHeader imgSource={workImageSource} title="Work Experience" ></DraggableBarHeader>
  </div>
  <div className="outputContainer"></div>
  </>
}
export default App;
