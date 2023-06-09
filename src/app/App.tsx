import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

const Home = lazy(() => import("../pages/Home"));
const CreateDestination = lazy(() => import("../pages/CreateDestination"));
const DestinationDetail = lazy(() => import("../pages/DestinationDetail"));
const NotFound = lazy(() => import("../pages/NotFound"));

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Loader>Cargando...</Loader>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateDestination />} />
            <Route path="/:destinationId" element={<DestinationDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
