import { Navigation } from "./Navigation"
import { Link } from "react-router-dom"
export function Header(props) {
    return (

        <header>
            <nav className="navbar bg-dark navbar-expand-lg">
                <div className="container-fluid">
                    <div className="nav navbar-nav ms-auto">
                        <Link className='nav-item text-white text-decoration-none' to='/signin'>Sign in</Link>
                    </div>
                </div>

            </nav>
            <nav className="navbar bg-light navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <div className="row align-item-end ">
                        <div className="collapse navbar-collapse">
                            <Navigation items={props.headernav} />
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}

