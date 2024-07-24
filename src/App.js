import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Result from "./Result";

function App() {
    return (
      <div>
        <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/result" element={<Result/>}/>
        </Routes>
      </div>
    );
  }

export default App;