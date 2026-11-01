import { useState } from "react";

import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Work from "./components/Work";
import CVPreview from "./components/CVPreview";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);

  return (
    <div className="app-container">
      <div className="editor">
        <GeneralInfo
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
        <Education education={education} setEducation={setEducation} />
        <Work work={work} setWork={setWork} />
      </div>
      <div className="preview">
        <CVPreview
          generalInfo={generalInfo}
          education={education}
          work={work}
        />
      </div>
    </div>
  );
}

export default App;
