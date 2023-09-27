import '../navabar/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBook, faBriefcase, faGraduationCap, faHome, faPhone, faSearch, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../../assets/im-symbol.png'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg border bg-light border-top-0 border-start-0 border-end-0  borderShodow fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-warning c-logo" href="#Home"><img src={Logo} alt='logo' className='logo' /><span className='I'>Industrial</span><span className='text-darkBlue M'>Mentors</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""><FontAwesomeIcon icon={faBars} /></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mt-1 mb-lg-0">
                            <li className="nav-item text-center iconFontSize">
                                <FontAwesomeIcon icon={faHome} className='text-darkBlue' />
                                <a className="nav-link py-0 active text-darkBlue" aria-current="page" href="#Home">Home</a>
                            </li>
                            <li className="nav-item text-center iconFontSize dropdown">
                                <FontAwesomeIcon icon={faGraduationCap} className='text-darkBlue' />
                                <a className="nav-link py-0 text-darkBlue dropdown-toggle" href="#Course" role="button" data-bs-toggle="dropdown" aria-expanded="false">Course</a>

                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                            <li className="nav-item text-center iconFontSize">
                                <FontAwesomeIcon icon={faUserGroup} className='text-darkBlue' />
                                <a className="nav-link py-0 text-darkBlue" href='#Membership'>Membership</a>
                            </li>

                            <li className="nav-item text-center iconFontSize dropdown">
                            <FontAwesomeIcon icon={faBriefcase} className='text-darkBlue' />
                                <a className="nav-link py-0 text-darkBlue dropdown-toggle" href="#Course" role="button" data-bs-toggle="dropdown" aria-expanded="false">Jobs</a>

                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                            <li className="nav-item text-center iconFontSize">
                                <FontAwesomeIcon icon={faBook} className='text-darkBlue' />
                                <a className="nav-link py-0 text-darkBlue " href='#About'>About</a>
                            </li>
                            <li className="nav-item text-center iconFontSize">
                                <FontAwesomeIcon icon={faPhone} className='text-darkBlue' />
                                <a className="nav-link py-0 text-darkBlue" href='#Contact'>Contact</a>
                            </li>
                            <li className='slide'></li>
                        </ul>



                        <form class="d-flex mx-auto" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>

                        <div className='btn-sec'>
                            <button className='button'>Login</button>
                        </div>
                    </div>




                </div>
            </nav>


        </>
    )
}

export default Navbar