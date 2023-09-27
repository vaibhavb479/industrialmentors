import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./intro_vid.css";

const Intro_vid=()=> {
  return (
    <div className="video-section">
      <div className="container-fluid video-section">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="ratio ratio-16x9 mt-5 mb-5 me-3 ms-3">
             <video src="videos/video.mp4" controls autoPlay loop className="clip"/>
            </div>
          </div>

          <div className="col-md-6">
            <div className="side-intro m-4 m-md-5">
              <h3 className="mt-2 ms-md-5">
                Limitless learning, <br />
                more possibilities...
              </h3>
              <p className="ms-md-5 pt-3 pb-2">
                Online courses open the opportunity for learning to almost
                anyone regardless of their scheduling commitments.
              </p>
              <button
                className="btn read-button rounded-5 ms-md-5 mb-4"
                type="submit"
              >
                KNOW MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Intro_vid;
