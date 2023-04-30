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
          <a href="">Home</a>
          <a href="">Service</a>
          <a href="">Company</a>
          <a href="">Career</a>
          <a href="">Blog</a>
          <a href="">Contact us</a>
          <div>
            <a href="">Clone project</a> <img src={Icon} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};
