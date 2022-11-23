import { Navigation } from "./Navigation"
import { Link } from "react-router-dom"
export function Header(props) {
    return (

        <header>
            <div className="navbar navbar-expand-lg  bg-dark">
                <div className="container-fluid align-item-end">
                    <div className="">
                        <Link className='navbar-brand text-white' to='/signin'>Sign in</Link>
                    </div>
                </div>
            </div>
            <header className='navbar p-3 navbar-expand-lg' >
                <div className='container-fluid' >
                    <Link className='navbar-brand' to='/'>{props.title}</Link>
                    <div className="row align-item-end ">
                        <div className="collapse navbar-collapse ">
                            <Navigation items={props.headernav} />
                        </div>
                    </div>
                </div>
            </header>
        </header>



    )
}  