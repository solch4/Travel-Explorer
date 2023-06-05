import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import CreateDestination from "../pages/CreateDestination";
import DestinationDetail from "../pages/DestinationDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateDestination />} />
          <Route path="/:destinationId" element={<DestinationDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
