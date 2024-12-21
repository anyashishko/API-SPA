import { NavLink } from 'react-router-dom';
import '../styles/Header.css'; 

function Header() {
  return (
    <nav className="header">
      <NavLink to="/" className="header__link">Users</NavLink>
      <NavLink to="/albums" className="header__link">Albums</NavLink>
    </nav>
  );
}

export default Header;
