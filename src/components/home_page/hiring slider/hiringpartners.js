import 'bootstrap/dist/css/bootstrap.min.css';
import './hiringpartners.css'; 
import allstate from "../../../assets/allstate.png";
import american from "../../../assets/americanfamily.png";
import amica from "../../../assets/amica.png";
import farmers from "../../../assets/farmers.png";
import geico from "../../../assets/geico.png";


const Companies = () => {
    return (
        <div>
            <div className='m-5  text-center'>
                <h1>Top Companies trust Us</h1>

                <div className="slider">
                    <div className='slide-track'>
                        <div className='slide'>
                            <img src={allstate}  />
                        </div>
                        <div className='slide'>
                            <img src={american} />
                        </div>
                        <div className='slide'>
                            <img src={amica} />
                        </div>

                        <div className='slide'>
                        <img src={farmers} />

                        </div>
                        <div className='slide'>
                            <img src={geico} />
                        </div>
                        <div className='slide'>
                            <img src={allstate}  />
                        </div>

                        <div className='slide'>
                            <img src={american} />
                        </div>
                        <div className='slide'>
                            <img src={amica} />
                        </div>
                        <div className='slide'>
                            <img src={farmers} />
                        </div>

                        <div className='slide'>
                        <img src={geico} />

                        </div>
                        <div className='slide'>
                            <img src={allstate} />
                        </div>
                        <div className='slide'>
                            <img src={american} />
                        </div>



                    </div>
                </div>

            </div>












        </div>

    )
}
export default Companies;