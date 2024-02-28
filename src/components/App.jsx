import { Routes, Route } from "react-router-dom";
import { Layout } from "../Layout.js";
import Catalog from "../pages/catalog/Catalog.jsx";
import Favorite from "../pages/favorites/Favorites.jsx";
import Home from "../pages/home/Home.jsx";

import CarDetails from "./CarDetails.jsx";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorite />} />
          <Route path="catalog/:id" element={<CarDetails />} />
        </Route>
      </Routes>
    </div>
  );
};
