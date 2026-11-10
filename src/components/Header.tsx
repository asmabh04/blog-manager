import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>Blog Manager</h1>
      <nav>
        <NavLink to="/" end>
          Accueil
        </NavLink>
        <NavLink to="/articles">Articles</NavLink>
        <NavLink to="/new">Nouvel article</NavLink>
      </nav>
    </header>
  );
}

export default Header;
