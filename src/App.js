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
        <Route exact path="/" element={<ContinentsPage/>} />
        <Route exact path="/continents" element={<ContinentsPage/>} />
        <Route exact path="/countries/:continentId" component={<CountriesPage/>} />
        <Route
          exact
          path="/destinations/:countryId"
          component={<DestinationsPage/>}
        />
        <Route
          exact
          path="/destination/:destinationId"
          component={<DestinationDetailPage/>}
        />
      </Routes>
    </div>
  );
}

export default App;
