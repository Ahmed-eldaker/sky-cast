import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="container-fluid footer mt-5 ">
        <div className="container">
        <div className="row  mt-3">
          <div className="col-md-4">
            <div>
              <h2 className="skyFooterCastText">Sky Cast</h2>
              <p className="mainfootertext">
                Funding freemium long tail hypotheses first mover advantage
                assets ownership
              </p>
              <p>
                <img src="pictures/Email.png" alt="" /> SkyCast@mail.com
              </p>
              <p>
                <img src="pictures/Phone.png" alt="" /> + 12 3456 7890
              </p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="services">
              <h6>services</h6>
              <p><Link to="/">Web Hosting</Link></p>
    <p><Link to="/">Domains</Link></p>
    <p><Link to="/">Premium Hosting</Link></p>
    <p><Link to="/">Private Server</Link></p>
    <p><Link to="/">E-mail Hosting</Link></p>
            </div>
          </div>

          <div className="col-md-2">
            <div className="services">
              <h6>Support </h6>
              <p><Link to="/">Pricing Plan</Link></p>
    <p><Link to="/">Documentation</Link></p>
    <p><Link to="/">Guide</Link></p>
    <p><Link to="/">Tutor</Link></p>
            </div>
          </div>

          <div className="col-md-2">
            <div className="services">
              <h6>Company </h6>
              <p><Link to="/">About</Link></p>
    <p><Link to="/">Blog</Link></p>
    <p><Link to="/">Join Us</Link></p>
    <p><Link to="/">Press</Link></p>
    <p><Link to="/">Partners</Link></p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="services">
              <h6>Legal </h6>
              <p><Link to="/">Claim</Link></p>
    <p><Link to="/">Privacy</Link></p>
    <p><Link to="/">Terms</Link></p>
            </div>
          </div>
        </div>
        </div>
      
      </div>
    </>
  );
};

export default Footer;
