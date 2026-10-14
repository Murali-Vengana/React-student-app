import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeftPanel from "./components/LeftPannel";
import StudentDashboard from "./components/StudentDashboard";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LeftPanel />
        <div className="main-content">
          <Routes>
            <Route path="/students" element={<StudentDashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
