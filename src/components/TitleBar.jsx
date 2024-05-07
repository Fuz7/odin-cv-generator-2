
function TitleBar(){
  return<div className="titleBar">
        <h1 className="titleBar__titleText">CV Generator</h1>
        <div className="autofillButton">
          <span className="autofillButton__image"></span>
          <span className="autofillButton__text">Autofill</span>
        </div>
        <div className="saveButton">
          <span className="saveButton__image"></span>
          <span className="saveButton__text">Save</span>
        </div>
  </div>;
}



export default TitleBar