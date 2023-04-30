import "./CeoPage.scss";
import Negative from '../../Negative.svg'
import CeoPic from './ceo.png'
export const CeoPage = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-div">
          <img src={CeoPic} alt="" className="ceo-pic" />
          <h3>Javena Melo</h3>
          <p className="p-small">CEO</p>
          <p>
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable.
          </p>
          <div className="socials">
            <a href="">
              <img src={Negative} alt="" />{" "}
            </a>
            <a href="">
              <img src="./assets/Vector.svg" alt="" />
            </a>
            <a href="">
              <img src="./assets/Group.svg" alt="" />
            </a>
          </div>
        </div>
      </section>
      <section className="blog-section">
        <div className="container blog">
          <img src="./assets/Shape blue.svg" alt="" className="blueicon" />
          <h2>Blog posts from Javena</h2>
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
