import "./trainer.css";
const Trainer = () => {
  return (
    <div>
      <div class="card cardt mx-auto ">
        <div class="card-header position-relative upcard text-light ">
          <h1>Mentor Name</h1>
          <div className="merntor-img position-absolute top-100 start-50 translate-middle">
            <img
              className="rounded-circle border border-5 "
              src="./images/mentor_pic.jpg"
              alt=""/>
          </div>
        </div>
        <div class="card-body mentor-body">
          <div className="position-relative">
            <h5 class="card-title">Subject Of Mentor</h5>
            <p class="card-text ">
              "Career guidance is the compass that helps you navigate the
              labyrinth of professional possibilities and find your true north."
            </p>
            <a href="#" class="btn abut-mentor">
              About 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Trainer;
