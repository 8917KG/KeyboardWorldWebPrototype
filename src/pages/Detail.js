import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { Reviews } from "../components/Reviews"


export function Detail(props) {
    const [keyboardData, setKeyboardData] = useState()
    const [keyboardReviews, setKeyboardReviews] = useState([])

    let { keyboardId } = useParams()

    useEffect(() => {
        if (!keyboardData) {
            props.getter("keyboards", keyboardId)
                .then((data) => {
                    setKeyboardData(data)
                })
        }
    })

    // to get keyboard reviews
    useEffect(() => {
        if (keyboardReviews.length == 0) {
            props.getReviews(keyboardId)
        }
    }, [keyboardData])

    useEffect(() => {
        setKeyboardReviews(props.reviews)
    }, [props.reviews])

    const reviewSubmitHandler = (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        props.addReview(data.get("keyboardId"), data.get("reviewtext"), data.get("userId"))
            .then((res) => console.log(res))
    }





    if (keyboardData) {
        return (
            <div className="container my-4">
                <div className="row">
                    <div className="col">
                        <h2>{keyboardData.KeebName}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <DetailImage data={keyboardData} getter={props.imageGetter} />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Keyboard Name</h4>
                                <p>{keyboardData.KeebName}</p>
                                <h5>Manufacturer</h5>
                                <p>{keyboardData.Manufacturer}</p>
                                <h5>Typing angle</h5>
                                <p>{keyboardData.TypingAngle}</p>
                            </div>
                            <div className="col-md-6">
                                <h5>Keyboard Material</h5>
                                <p>{keyboardData.Material}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                {keyboardData.Summary}
                            </div>
                        </div>


                        <div style={(props.auth) ? { display: "block" } : { display: "none" }}>
                            {/* <button className="btn btn-info">Add to Favourites</button> */}
                            <form method="post" onSubmit={reviewSubmitHandler}>
                                <label className="form-label">
                                    <h5>Write a review for {keyboardData.KeebName}</h5>
                                </label>
                                <textarea
                                    cols="30"
                                    rows="5"
                                    name="reviewtext"
                                    className="form-control"
                                    placeholder="I love this keyboard!..."
                                ></textarea>
                                <input type="hidden" name="userId" value={(props.auth) ? props.auth.uid : ""} />
                                <input type="hidden" name="keyboardId" value={keyboardId} />
                                <button className="btn btn-info my-2">Review this keyboard</button>

                                <h5>For purchase:
                                    <button className="btn btn-info my-4">
                                        Buy here
                                    </button>
                                </h5>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Reviews</h2>
                        <Reviews reviews={keyboardReviews} />
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container my-4"></div>
        )
    }
}

function DetailImage(props) {
    const [imgUrl, setImgUrl] = useState()

    const ImageLoadingStyle = {
        display: "grid",
        aspectRatio: "3/4",
        backgroundColor: "#CCCCCC",
        placeItems: "center"
    }

    useEffect(() => {
        if (props.data) {
            props.getter("keyboard_images/" + props.data.KeebPhoto)
                .then((url) => setImgUrl(url))
        }
    }, [props.data])

    if (imgUrl) {
        return (
            <img src={imgUrl} style={{ width: "100%" }} alt="KeebPhoto" />
        )
    }
    else {
        return (
            <div style={ImageLoadingStyle}>
                <p>Loading...</p>
            </div>
        )
    }
}