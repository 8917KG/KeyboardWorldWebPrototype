import { Link } from "react-router-dom"
//import "/Users/kuldipgurung/Downloads/Advanced Web/8917_Keyboard World/keyboard-world/src/css/Footercss.css";

export function Footer(props){
    return(
        <footer className="footer-container-fluid">
            <div className='text-black'>
                    <div className='col'>
                        <form className="col-md-4 offset-md-4">
                            <p className="new">Subscribe our newsletter to get the latest updates.</p>
                            <div className='d-grid gap-1'>
                                <input type="email" name="email" placeholder="Your Email"/>
                                <button type="submit" className="btn btn-light btn-sm">Subscribe</button>
                                <div className='footer-links'>
                                    <div className='footer-link-wrapper'>
                                        <div className='footer-link-items d-grid gap-2'>
                                            <h1 className="text-center">Important Stuffs</h1>
                                            <div className="vstack text-center">
                                                <Link className="p-1" to='/about'>About us</Link>
                                                <Link className="p-1" to='/contact'>Contact us</Link>
                                                <Link className="p-1" to='/product'>Our Products</Link>
                                            </div>
                                            <div className="social icons text-center">
                                                <Link className="social-icon-link facebook p-2" 
                                                to='/' target="_blank" 
                                                aria-label="Facebook">Facebook
                                                </Link>
                                                <Link className="social-icon-link instagram p-2" 
                                                to='/' target="_blank" 
                                                aria-label="Instagram">Instagram
                                                </Link>
                                                <Link className="social-icon-link twitter p-2" 
                                                to='/' target="_blank" 
                                                aria-label="Twitter">Twitter
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                <p> &copy; {props.year} all rights reserved.</p>
            </div>
        </footer>
    )
} 