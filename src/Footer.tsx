import './Footer.scss';
import Shapes from './Shapes (1).svg';
import LogoFoot from './Logofoot.svg';
import FinsweatLogo from './©2021 Finsweet.svg';
import Negative from './Negative.svg';
import Vector from './Vector.svg';
import Group from './Group.svg';
import Group2 from './Group2.svg';
export const Footer = () => {
    return (
        <footer>
        <div className="container leftpart">
          <div>
            <img src={Shapes} alt="" />
            <h2>Let's make something special</h2>
            <h4>Let's talk!</h4>
            <p className="plarge">020 7993 2905</p>
            <p className="plarge">hi@finsweet.com</p>
            <div className="aline"></div>
            <p className="psmall">DLF Cybercity, Bhubaneswar, India, &52050</p>
          </div>
        </div>
        <div className="pink-footer">
          <div className="container flex-spacebetween">
            <div className="flex-spacebetween bottom-logos">
              <img src={LogoFoot} alt="" />
              <img src={FinsweatLogo} alt="" />
            </div>
            <div className="socials">
              <img src={Negative} alt="" />
              <img src={Vector} alt="" /><img
                src={Group}
                alt=""
              /><img src={Group2} alt="" />
            </div>
          </div>
        </div>
      </footer>
    );
}