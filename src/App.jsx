import "./App.css";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
  
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:_id" element={<BeerDetailsPage />} />
          <Route path="/new" element={<AddBeerPage />} />
          <Route path="/random" element={<RandomBeerPage />} />
          <Route path="/allbeers" element={<AllBeersPage />} />
          <Route path="*" element={<h1>404 page</h1>} />
        </Routes>



    </div>
  );
}

export default App;
