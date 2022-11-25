import { Link } from "react-router-dom"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./footer.css"
//import "/Users/kuldipgurung/Downloads/Advanced Web/8917_Keyboard World/keyboard-world/src/css/Footercss.css";

export function Footer(props) {
    return (
        <div class="d-flex flex-column h-100 ">
            <footer class="footer w-100 py-4 flex-shrink-0 bg-dark ">
                <div class="container py-4">
                    <div class="row gy-4 gx-5">
                        <div class="col-lg-4 col-md-6">
                            <h5 class="h4 text-white"><strong>Reach us</strong></h5>
                            <form action="!#">
                                <div class="input-group mb-3">
                                    <input class="form-control" type="text" placeholder="your@domain.com" />

                                </div>
                                <p class="small text-muted mb-0"><a class="text-primary" href="!#"><button type="button" class="btn btn-light">SUBSCRIBE NOW</button></a></p>
                            </form>

                        </div>
                        <div class="col-lg-4 col-md-7">
                            <h5 class="text-white "><b>IMPORTANT STUFF</b></h5>
                            <div class="list-unstyled text-muted ms-auto  ">
                                <Link className="p-1 text-white text-decoration-none" to='/about'>Contact Us</Link> <br />
                                <Link className="p-1 text-white text-decoration-none" to='/about'>Freight & Shipping</Link><br />
                                <Link className="p-1 text-white text-decoration-none" to='/about'>Return, Terms and conditions</Link><br />
                                <Link className="p-1 text-white text-decoration-none" to='/about'>What is a Group Buy?</Link><br />
                                <Link className="p-1 text-white text-decoration-none" to='/about'>Pre-Orderes & Retails Sales</Link><br />
                                <Link className="p-1 text-white text-decoration-none" to='/about'>Terms of Serive</Link><br />
                                <Link className="p-1 text-white text-decoration-none" to='/about'>Refund policy</Link><br />

                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h5 class="text-white mb-3"><strong>FOLLOW US</strong></h5>
                            <Link className='text-white  socialicons'><FaFacebook /></Link>
                            <Link className='text-white socialicons'><FaInstagram /></Link>
                            <Link className='text-white  socialicons '><FaYoutube /></Link>

                        </div>

                    </div>  </div>
                <p> &copy; {props.year} all rights reserved.</p>
            </footer>
        </div>
    )
}