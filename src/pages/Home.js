import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
//import "/Users/kuldipgurung/Downloads/Advanced Web/8917_Keyboard World/keyboard-world/src/css/Homecss.css"
export function Home(props) {
    const [pageData, setPageData] = useState([])
    useEffect(() => {
        setPageData(props.listData)
    })

    if (pageData.length > 0) {
        const itemCollection = pageData.map((item, key) => {
            return (
                <div className=" home-container-fluid col-md-4 p-2" key={key}>
                    <div className="card">
                        <Image urlgetter={props.imageGetter} imgPath={"keyboard_images/" + item.KeebPhoto} />
                        <div className="card-body">
                            <h5 className="card-title">{item.KeebName}</h5>
                            <Link to={"/keyboards/" + item.id}><button type="button" className="btn btn-info btn-sm">Learn More Here</button></Link>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="container my-4">
                <div className="row">
                    {itemCollection}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container"></div>
        )
    }
}

function Image(props) {
    const [imageURL, setImageURL] = useState()

    useEffect(() => {
        if (!imageURL) {
            props.urlgetter(props.imgPath)
                .then((url) => setImageURL(url))
                .catch((error) => console.log(error))
        }
    })
    if (imageURL) {
        return (
            <img src={imageURL} className="card-img-top" alt={props.KeebName} />
        )
    }
    else {
        return (
            <div>Loading...</div>
        )
    }
}