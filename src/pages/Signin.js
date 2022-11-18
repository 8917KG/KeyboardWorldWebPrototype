import { useNavigate,Link } from "react-router-dom"
import { useState, useEffect } from "react"
export function Signin(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)

    const navigate = useNavigate()

    useEffect (() => {
        if (success) {navigate('/')}
    })

    const submitHandler = (event) => {
        //stop the form from refreshing the page
        event.preventDefault()
        //reset error msg
        // capture data from form 
        const data = new FormData(event.target)
        props.handler(data.get('useremail'), data.get('userpw'))
            .then(() => setSuccess(true))
            .catch((error) => {

            })
    }

    return (
        <div className="container">
            <div className="row">
                <form className="col-md-4 offset-md-4" onSubmit={submitHandler}>
                    <h2>Sign in to your Account</h2>
                    <div className="mb-3">
                        <label htmlFor="useremail">Email</label>
                        <input
                            type="email"
                            id="useremail"
                            name="useremail"
                            placeholder="you@domain.com"
                            className="form-control"
                            value ={email}
                            onChange = {(event) => setEmail(event.target.value)}

                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="userpw">Password</label>
                        <input
                            type="password"
                            id="userpw"
                            name="userpw"
                            placeholder=""
                            className="form-control"
                            value ={password}
                            onChange = {(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="d-grid">
                        <button
                            type="submit"
                            className="btn btn-primary">
                            Sign in
                        </button>
                    </div>
                </form>
                <div className="row">
                <div className="col text-center">
                    <Link className="btn btn-link" to="/signup">
                        Don't have an Account? Sign up here
                    </Link>
                </div>
            </div>
            </div>
        </div>
    )
} 