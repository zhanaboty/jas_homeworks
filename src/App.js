import './styles/App.css';
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MoviePage } from "./pages/MoviePage";
// import Counter from './Components/Counter';
// import FirstTable from './Components/FirstTable';
// import SecondTable from './Components/SecondTable';
// import Input from './Components/Input'
// import TaskTwoLevelOne from './Components/TaskTwoLevelOne';
// import TaskTwoLevelTwo from './Components/TaskTwoLevelTwo';



export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:movieId" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

