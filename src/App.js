import { Routes, Route } from "react-router-dom";
import {
  ContinentsPage,
  CountriesPage,
  DestinationDetailPage,
  DestinationsPage,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<ContinentsPage/>} />
        <Route  path="/continents" element={<ContinentsPage/>} />
        <Route  path="/countries/:continentId" element={<CountriesPage/>} />
        <Route
          
          path="/destinations/:countryId"
          element={<DestinationsPage/>}
        />
        <Route
          path="/destination/:destinationId"
          element={<DestinationDetailPage/>}
        />
      </Routes>
    </div>
  );
}

export default App;
