import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import './footer.css';
import { faEnvelope, faPlay } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="text-center  main text-lg-start mt-5">
      <div className="container-fluid p-4">
        {/* Grid row */}
        <div className="row">
          {/*  Grid column  */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-2 me-2 footer-head">
            <h6 className="text-uppercase mb-3 font-weight-bold">
              <img src="/im.png" className="border rounded-circle me-2 " /> Industrial Mentors
            </h6>
            <p >
              This is a Industrial Training Provider Company . Which Provide
              the Industry needed courses and Train the students as per
              Industry Requirement.
            </p>

            <div className=" mt-5 connect w-100">Connect With US</div>
            <a href="www.LinkedIn" className="icon ms-3 " ><FontAwesomeIcon icon={faLinkedin} className="fs-2 p-2  me-2 mt-3 border rounded-circle" /></a>
            <a href="www.facebook.com" ><FontAwesomeIcon icon={faFacebook} className="fs-2 p-2   border rounded-circle" /></a>
            <a href="www.instagram.com"> <FontAwesomeIcon icon={faInstagram} className="fs-2 p-2 border rounded-circle" /></a>
            <a href="www.youtube.com"> <FontAwesomeIcon icon={faYoutube} className="fs-2 p-2 border  rounded-circle" /></a>
            <br />


          </div>
          {/*  Grid column  */}
          <hr className="w-100 clear-fix d-md-none" />
          {/*  Grid column  */}
          <div className="col-md-3 pages col-lg-3 col-xl-2 mx-auto  ms-5 mt-4">
            <h6 className="text-uppercase mb-4 ">
              Pages
            </h6>
            <p>
              <a href="" className=" text-decoration-none mt-2">
                About Us
              </a>
            </p>
            <p>
              <a href="" className=" text-decoration-none">Blog</a>
            </p>
            <p>
              <a href="" className=" text-decoration-none">Contact Us</a>
            </p>
            <p>
              <a href="" className=" text-decoration-none">
                Our Partner
              </a>
            </p>
            <p>
              <a href="" className=" text-decoration-none">
                Privacy Policy
              </a>
            </p>

            <p>
              <a href="" className=" text-decoration-none">
                Terms and Conditions
              </a>
            </p>
          </div>
          {/*  Grid column  */}

          <hr className="w-100 clearfix d-md-none" />

          {/*  Grid column  */}
          <hr className="w-100 clearfix d-md-none" />

          {/*  Grid column  */}
          <div className="col-md-3 contact  col-lg-3 col-xl-3 mx-auto mt-4 ">
            <h6 className="text-uppercase mb-4">
              Contact
            </h6>
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7561385.9486516565!2d77.45928227062203!3d22.274846207396138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba3609977101b%3A0x7f6ef7eed6e2f105!2sIndustrial%20Mentors!5e0!3m2!1sen!2sin!4v1694423886685!5m2!1sen!2sin" className="w-100" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <p>
              <i className="fas fa-home mr-3"></i> Cannaught Place,Cidco,Chha.Sambhajinagar.
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print mr-3"></i> + 01 234 567 89
            </p>
            <p>
              <a href="www.gmail.com" className="text-decoration-none "> <FontAwesomeIcon icon={faEnvelope} className="fs-5 me-2" /> industrialmentors@gmail.com</a>
            </p>
          </div>
          {/*  Grid column  */}
        </div>
      </div>
      <p className="text-center text-light p-2 mb-0"> &copy; 2023 Industrial Mentors Pvt.Ltd. </p>
    </div>
  );
};

export default Footer;
