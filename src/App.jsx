import TitleBar from "./components/TitleBar";
import CreatedByBar from "./components/CreatedByBar";
function App() {
  return <>
  <div className="formContainer">
    <TitleBar></TitleBar>
    <CreatedByBar></CreatedByBar>
  </div>
  <div className="outputContainer"></div>
  </>
}
export default App;
