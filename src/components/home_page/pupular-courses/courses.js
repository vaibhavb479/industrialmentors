import "./courses.css";
import "bootstrap/dist/css/bootstrap.css";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
const Courses = () => {
  const [couresData, setCoursesData] = useState([]);
  const [cardLimit, setCardLimit] = useState(5);
  const [activeCourseIndex, setActiveCourseIndex] = useState(null);
  const handleClick = (index) => {
    setActiveCourseIndex(index === activeCourseIndex ? null : index);
  };

  // get data from json
  useEffect(() => {
    axios
      .get("http://localhost:3000/server/db.json/courses")
      .then(function (response) {
        setCoursesData(response.data);
      })
      .catch(function (error) {
        console.log(error, "hello");
      });
  }, []);
  const increaseLimit = () => {
    setCardLimit(cardLimit + 5);
  };
  return (
    <div className="container-fluid p-4">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h3 className="fs-3">Courses Available</h3>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <div className="row d-flex align-items-stretch justify-content-center">
            {couresData.map((obj, index) => {
              if (index < cardLimit) {
                return (
                  <div
                    className="col-12 col-sm-6 col-md-3 col-lg-2 p-0 me-4 mt-4"
                    id="find"
                  >
                    <div className="card shadow h-100">
                      <div className="card-header p-0 h-50 position-relative">
                        <img
                          src={`./images/${obj.path}`}
                          alt="course image"
                          className="w-100 h-100"
                        />
                        <div className="star bg-warning d-flex align-items-center position-absolute top-0 end-0 mt-1 p-1 text-dark fw-bold">
                          <FaStar style={{ color: "black" }} />
                          &nbsp;<span>4.2</span>
                        </div>
                      </div>
                      <div className="card-body p-2">
                        <h5 className="card-title text-center fs-5">
                          {obj.courseName}
                        </h5>
                        <div className="d-flex justify-content-between px-1">
                          <div className="duration px-2 p-1 rounded-pill d-flex align-items-center">
                            <FaRegClock size={15} />
                            &nbsp;<span>{obj.duration}</span>
                          </div>
                          <div
                            className={`wishlist ${
                              index === activeCourseIndex ? "active" : ""
                            }`}
                            onClick={() => handleClick(index)}
                          >
                            {index === activeCourseIndex ? (
                              <FaHeart
                                style={{ fill: "red" }}
                                size={22}
                                className="heartbeat"
                              />
                            ) : (
                              <FaRegHeart size={22} />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="know_more d-flex justify-content-between p-2 px-3 mt-4 align-items-center">
                        <b className="fs-5">Free</b>
                        <a href="" className="text-decoration-none fw-bold">
                          Know More &gt;
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="col-12 d-flex  mt-4 justify-content-center loadMore ">
          <button
            className="btn btn-lg text-light rounded-pill"
            onClick={increaseLimit}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};
export default Courses;
