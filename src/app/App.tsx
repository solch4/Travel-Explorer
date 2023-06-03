import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CreateTravel from "../pages/CreateTravel";
import TravelDetail from "../pages/TravelDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateTravel />} />
        <Route path="/:travelId" element={<TravelDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;