import { Navigation } from "./Navigation"
import { Link } from "react-router-dom"
export function Header(props) {
    return (


        <>
            <nav class="navbar navbar-expand-lg bg-dark ">
                <div class="container-fluid ">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

                        <div class="nav navbar-nav ms-auto">
                            <Link className='nav-item text-white text-decoration-none' to='/signin'>Sign in</Link>
                        </div>

                    </div>
                </div>
            </nav >
            <header className='navbar navbar-expand-lg' >
                <div className='container-fluid' >
                    <Link className='navbar-brand' to='/'>{props.title}</Link>
                    <div className="row align-item-end ">
                        <div className="collapse navbar-collapse ">
                            <Navigation items={props.headernav} />
                        </div>
                    </div>
                </div>
            </header>

        </>


    )
} 