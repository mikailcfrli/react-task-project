import { Link } from 'react-router-dom';
import './Header.scss';
import logo from './Logo.svg'
import Icon from './pages/HomePage/Icon.svg'
export const Header = () => {
  return (
    <header>
      <div className="container navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navigation">
          <Link to="/">Home</Link>
          <a href="login">Service</a>
          <Link to="/ceo">Company</Link>
          <a href="">Career</a>
          <a href="">Blog</a>
          <a href="">Contact us</a>
          <div>
            <Link to="/register">Clone project</Link> <img src={Icon} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};
