const Banner = () => {
  return (
    <div className="row banner">
      <div className="col-md-6 banner-text m-auto ">
        <h4 className="ms-auto w-75">
          Empowering Developers <br /> Guiding Futures
        </h4>
        <hr className="mx-auto text-white w-50 " />
        <p className="ms-auto w-75 color-pr ">
          <strong className="text-decoration-underline">
            Discover the World of Coding
          </strong>{" "}
          Explore our programming courses and mentorship programs designed to
          nurture your development skills.
          <br />
          <strong className="text-decoration-underline">
            Your Journey to Code Mastery Starts Here
          </strong>{" "}
          Join our industrial mentors' community for top-notch programming
          education and guidance.
          <br />
          <strong className="text-decoration-underline">
            Unlock Your Programming Potential
          </strong>{" "}
          Explore our courses, connect with experienced mentors, and embark on a
          transformative learning experience in the world of development.
        </p>
      </div>
      <div className="col-md-6 banner-img">
        <img className="banner" src="./Images/banner.jpg" alt="" />
      </div>
    </div>
  );
};
export default Banner;
