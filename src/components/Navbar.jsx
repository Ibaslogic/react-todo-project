import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: '/about', text: 'About' },
  { path: '/login', text: 'Login' },
  { path: '/profile', text: 'Profile' },
];

const Navbar = () => {
  return (
    <nav className="navbar">
    <ul>
      {links.map((link) => {
        return (
          <li key={link.text}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        );
      })}
    </ul>
  </nav>
  );
};
export default Navbar;

