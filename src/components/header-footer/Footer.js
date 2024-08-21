import "./footer.css"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
    <div className="text-light mt-5" style={{ backgroundColor: '#130235' }}>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-3 col-12 ft-1 d-flex flex-column align-items-center justify-content-center">
                    
                <p className=" h3 text-primary fs-4 fw-bold " style={{ margin: 0 }} >
                    Vani Verse
                </p>
                <p className="text-primary mb-2" style={{ fontSize: '0.75rem' }}>
                    Data Annotation For AI
                </p>
                    <div className="footer-icons">
                        <Link to="https://www.linkedin.com/" target="_blank" color="inherit">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </Link>
                        <Link to="https://www.instagram.com/" color="inherit" target="_blank">
                            <i class="fa-brands fa-instagram"></i>
                         </Link>
                         <Link to="https://www.facebook.com/" target="_blank" color="inherit">
                            <i class="fa-brands fa-facebook"></i>
                        </Link>
                        <Link to="https://www.x.com/" target="_blank" color="inherit">
                            <i class="fa-brands fa-twitter"></i>
                        </Link>
                            
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 col-12 ft-2 d-flex flex-column align-items-center justify-content-center mt-3">
                    <h5>Quick Links</h5>
                    <ul>
                        <li className="nav-item">
                            <Link to="/contact-us" >
                                Contact Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/message-us" >
                                Message Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about-us" >
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" >
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="col-md-6 col-lg-3 col-12 ft-2 d-flex flex-column align-items-center justify-content-center mt-3">
                    <h5>Main Areas</h5>
                    <ul>
                        <li className="nav-item">
                            <Link to="/our-services" >
                            Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/our-solutions" >
                            Participate and Earn
                            </Link>
                        </li>
                        
                    </ul>
                </div>

                <div className="col-md-6 col-lg-3 col-12 ft-2 d-flex flex-column align-items-center justify-content-center mt-3">
                    <h5>Policy</h5>
                    <ul>
                    <li className="nav-item">
                            <Link to="/privacy-policy" >
                                Privacy Policy
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/terms-of-use" >
                                Terms of Use
                            </Link>
                        </li>
                       
                    </ul>
                </div>
                
               
            </div>
        </div>
    </div>
    <div className="col-12 text-light d-flex align-items-center justify-content-center " style={{ backgroundColor: '#010101' }}>
            <p className='mt-2'>
                2023 Vani-Verse Technologies Pvt. Ltd. All Rights Reserved.
            </p>
    </div>
   
</>
  )
}

export default Footer