import Header from '@/components/Header';
import { NavLink, Outlet } from 'react-router-dom';
const About = () => {
  return (
    <>
      <Header>
        <h1>About page.</h1>
      </Header>
      <div className="about">
        <ul className="about_list">
          <li>
            <NavLink to="about-app">About app</NavLink>
          </li>
          <li>
            <NavLink to="about-developer">About developer</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};
export default About;
