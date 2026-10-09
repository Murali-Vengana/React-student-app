import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeftPanel from "./components/LeftPannel";
import Student from "./components/AllStudents";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LeftPanel />
        <div className="main-content">
          <Routes>
            <Route path="/students" element={<Student />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;