
import { Routes, Route } from "react-router-dom";
import { ContinentsPage, CountriesPage, DestinationsDetailPage, DestinationsPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ContinentsPage />} />
        <Route path="/country/:cId" element={<CountriesPage />} />
        <Route path="/destination/:cId/:dId" element={<DestinationsPage />} />
        <Route path="/detail" element={<DestinationsDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
