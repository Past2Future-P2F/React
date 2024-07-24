import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Result from "./Result";
import Header from "./components/Header";

function App() {
    return (
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/result" element={<Result/>}/>
        </Routes>
      </div>
    );
  }

export default App;