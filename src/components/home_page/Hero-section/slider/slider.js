const Slider = () =>{
    return(
        <div>
        <div id="carouselExampleAutoplaying" className="carousel slide mt-5" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active position-relative">
      <img src="Images/slide.jpg" className="d-none d-md-block w-100" alt="..."/>
      <img src="Images/sslide.jpg" className="d-block d-md-none w-100" alt="..."/>
      <div className=" slide-data position-absolute  d-none d-md-block">
        <h3 className="text-white">Unifying Talent</h3>
        <hr />
        <h4 className="text-white">Educational Institutions, and Recruiters </h4> 
        <p  className="text-white">Explore a world of opportunities to enrich your skills,<br/>
         bolster your resume, and secure your ideal career path<br/>
          on our platform.</p>
        <button type="button" className="btn btn-outline-light" >About Us</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="Images/slide2.png" className="d-none d-md-block w-100" alt="..."/>
      <img src="Images/sslide2.png" className="d-block d-md-none w-100" alt="..."/>
      <div className="slide-data position-absolute  d-none d-md-block">
        <h3 className="text-black">Bringing Together Aspiring Talent</h3>
        <hr />
        <h4 className="text-black">Leading Institutions, and Recruiters</h4>
        <p  className="text-black">Discover global opportunities to learn, showcase your skills,<br/>
        enhance your CV, and secure your dream job through our platform.</p>
        <button type="button" className="btn btn-outline-info" >About Us</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="Images/slide3.png" className="d-none d-md-block w-100" alt="..."/>
      <img src="Images/sslide3.png" className="d-block d-md-none w-100" alt="..."/>
      <div className="slide-data position-absolute  d-none d-md-block">
        <h3 className="text-white">Bridging the Gap</h3>
        <hr />
        <h4 className="text-white">Between Talent and Education</h4> 
        <p  className="text-white">Explore a diverse range of opportunities to nurture your skills,<br/>
        elevate your resume, and pave the way towards your dream career<br/>
         through our platform.</p>
        <button type="button" className="btn btn-outline-dark" >About Us</button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying " data-bs-slide="next">
  <span className="">Next</span>
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
  </button>
</div>
        </div>
    )
}
export default Slider;