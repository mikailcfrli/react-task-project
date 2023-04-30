import "./HomePage.scss";
import Image from './Image.png';
import Shapes from './Shapes.svg'
import Shapes1 from './Shapes 1.svg'
import Shapes2 from './Shapes 2.svg'
import Icon from './Icon.svg'
import LogoBar from './Logo Bar.svg'
import Image1 from './Image 1.png'
import Image2 from './Image 2.png'
import Image3 from './Image 3.png'
import Group1710 from './Group 1710.svg'
import Icon1 from './Icon (1).svg'
export const HomePage = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-box">
          <div className="leftbox">
            <div className="leftup">
              <div className="graybox"></div>
              <div>
                <h1>Transform Your Idea Into Reality with Finsweet</h1>
              </div>
              <div>
                <p>
                  The entire Finsweet team knows what's good with Webflow and
                  you can too with 1 week and a good attitude.
                </p>
              </div>
            </div>
            <button className="frstbutton">
              <img src={Shapes} alt="" className="cornersvg" />{" "}
              Request Quote{" "}
              <img src={Icon} alt="" className="icon" />
            </button>
          </div>
          <div className="heroimgbox">
            <div>
              <img src={Shapes2} alt="" className="shapes2" />
              <img src={Shapes1} alt="" className="shapes1" />
            </div>
            <img src={Image} alt="" className="frstimg" />
          </div>
        </div>
        <div className="container clients-box">
          <div className="clients">
            <div>Our Clients</div>
            <div>We've Worked with</div>
          </div>
          <div>
            <img src={LogoBar} alt="" />
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container about-us">
          <div className="up-text">
            <div className="bout">ABOUT US</div>
            <div className="flex-spacebetween">
              <div>
                <h2>
                  The company leads entire webdesign process from concept to
                  delivery.
                </h2>
              </div>
              <div>
                <h3>The Era Of Technology.</h3>
                <p>
                  Through True Rich Attended does no end it his mother since
                  real had half every him case in packages enquire we up
                  ecstatic unsatiable saw his giving Remain expense you position
                  concluded.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-spacebetween">
            <img src={Image1} alt="" className="iphone5s" />
            <img src={Image2} alt="" className="iphone5s" />
            <img src={Image3} alt="" className="iphone5s" />
          </div>
          <div className="flex-spacebetween experience">
            <div className="flex-spacebetween gap">
              <div className="needtextalign">
                <h3 className="numbers">1560+</h3>
                <img src={Group1710} alt="" />
                <p>Project Delivered</p>
              </div>
              <div className="needtextalign">
                <h3 className="numbers">100+</h3>
                <img src={Group1710} alt="" />
                <p>Professional</p>
              </div>
              <div className="needtextalign">
                <h3 className="numbers">950+</h3>
                <img src={Group1710} alt="" />
                <p>Happy Client</p>
              </div>
              <div className="needtextalign">
                <h3 className="numbers">10 yrs</h3>
                <img src={Group1710} alt="" />
                <p>Experience</p>
              </div>
            </div>
            <div className="needtextalign lasttouch">
              <a href="">Read about us</a>
              <img src={Icon1} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="expertise-section">
        <div className="container expertise">
          <div className="left-differences">
            <div className="bout">Our expertise</div>
            <h2>
              We want to get local identification in every corner of the world
              in this era of global citizenship
            </h2>
            <p>
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded.
            </p>
          </div>
          <div className="right-differences">
            <div>
              <img src="./assets/Shape blue.svg" alt="" />
              <div className="difference">
                <img src="./assets/Group 1749.svg" alt="" className="circles" />
                <div className="margpad">
                  <h6>On Time Delivery</h6>
                  <p className="smallp">
                    Through True Rich Attended does no end it his mother since
                    real had half every him.
                  </p>
                </div>
              </div>
            </div>
            <div className="difference">
              <img src="./assets/Group 1755.svg" alt="" className="circles" />
              <div className="margpad">
                <h6>Best Quality</h6>
                <p className="smallp">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>
            <div className="difference">
              <img src="./assets/Group 1855.svg" alt="" className="circles" />
              <div className="margpad">
                <h6>Support Assist</h6>
                <p className="smallp">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
                <img src="./assets/Group 1748.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="brown">
        <div className="container">
          <div className="services-header">
            <p>OUR SERVICES</p>
            <h2>
              We build software solutions that solve client's business
              challenges
            </h2>
            <button className="frstbutton">
              <img src="./assets/Shapes.svg" alt="" className="cornersvg" />{" "}
              Start a Project
              <img src="./assets/Icon.svg" alt="" className="icon" />
            </button>
          </div>
          <div className="flex-spacebetween raw-boxes">
            <div>
              <img src="./assets/Icon Div.svg" alt="" className="icons" />
              <h6>Technical support</h6>
              <p>
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent names when it comes to world-className
                service
              </p>
              <a href="">
                Read more <img src="./assets/Icon (1).svg" alt="" />
              </a>
            </div>
            <div>
              <img src="./assets/Icon Div 1.svg" alt="" className="icons" />
              <h6>Testing Management</h6>
              <p>
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent names when it comes to world-className
                service
              </p>
              <a href="">
                Read more <img src="./assets/Icon (1).svg" alt="" />
              </a>
            </div>
            <div>
              <img src="./assets/Icon Div 2.svg" alt="" className="icons" />
              <h6>Development</h6>
              <p>
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent names when it comes to world-className
                service
              </p>
              <a href="">
                Read more <img src="./assets/Icon (1).svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="process-section">
        <div className="process-div container">
          <img src="./assets/Group 1858.svg" alt="" className="lines" />
          <div className="header-text">Our Process</div>
          <h2>The process we are working With Our client Worldwide</h2>
          <p>
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable.
          </p>
          <div className="grid-section">
            <div>
              <img src="./assets/lamp.svg" alt="" className="circles" />
              <h6>Discover</h6>
              <p>
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent.
              </p>
              <img src="./assets/01.svg" alt="" className="numbers" />
              <img
                src="./assets/Shapesunder.svg"
                alt=""
                className="shapeunder"
              />
            </div>
            <div>
              <img src="./assets/notebook.svg" alt="" className="circles" />
              <h6>Designing</h6>
              <p>
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent.
              </p>
              <img src="./assets/02.svg" alt="" className="numbers" />
            </div>
            <div>
              <img src="./assets/code-vector.svg" alt="" className="circles" />
              <h6>Development</h6>
              <p>
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent.
              </p>
              <img src="./assets/03.svg" alt="" className="numbers" />
            </div>
            <div>
              <img src="./assets/brain.svg" alt="" className="circles" />
              <h6>Testing</h6>
              <p>
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent.
              </p>
              <img src="./assets/04.svg" alt="" className="numbers" />
            </div>
            <div>
              <img src="./assets/rocket.svg" alt="" className="circles" />
              <h6>Deployment</h6>
              <p>
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent.
              </p>
              <img src="./assets/05.svg" alt="" className="numbers" />
            </div>
            <div>
              <img src="./assets/maintence.svg" alt="" className="circles" />
              <img src="./assets/shapesup.svg" alt="" className="shapeup" />
              <h6>Maintenance</h6>
              <p>
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent.
              </p>
              <img src="./assets/06.svg" alt="" className="numbers" />
            </div>
          </div>
        </div>
      </section>
      <section className="purple-section">
        <div className="container costumers-love">
          <div className="left-love">
            <img src="./assets/Shape.png" alt="" className="shapee" />
            <h2>Our customers love what we do</h2>
            <p className="p-large">
              Transform your idea into reality with finsweet
            </p>
            <p className="p-small">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <img src="./assets/Members.png" alt="" />
          </div>
          <div className="right-love">
            <div className="white-box">
              <img
                src="./assets/Group 1710.png"
                alt=""
                className="left-shape"
              />
              <img src="./assets/Quote.png" alt="" className="quote" />
              <h4>
                Finsweet has been a wonderful partner to work with. I have been
                a customer now for the past few months now and I have had
                nothing but positive experiences!
              </h4>
              <img src="./assets/Group 1859.png" alt="" className="andro" />
            </div>
            <div className="buttons">
              <button id="first-one"></button>
              <button></button>
              <button></button>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-section">
        <div className="container blog">
          <img src="./assets//Shape.png" alt="" className="blueicon" />
          <h2>Read our latest blogs & news</h2>
          <div className="blogs">
            <div className="blog-overview">
              <div>
                <img src="./assets/blogpic 1.png" alt="" />
              </div>
              <div className="rightpart-blog">
                <div>
                  <p>Jan 19, 2021</p>
                  <h4>Today's best design trends for digital products</h4>
                  <div>
                    <a href="">Read More</a>
                    <img src="./assets/Icon (1).svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-overview">
              <div>
                <img src="./assets/blogpic 1.png" alt="" />
              </div>
              <div className="rightpart-blog">
                <div>
                  <p>Jan 19, 2021</p>
                  <h4>Today's best design trends for digital products</h4>
                  <div>
                    <a href="">Read More</a>
                    <img src="./assets/Icon (1).svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
