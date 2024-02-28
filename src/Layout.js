import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
          {/* <NavLink to="/car">Car</NavLink> */}
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
