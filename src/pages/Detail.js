import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'

export function Detail ( props ) {
    const[ keyboardData, setKeyboardData ] = useState()

    let { keyboardId } = useParams()

    useEffect( () => {
        if(!keyboardData) {
            props.getter("keyboards", keyboardId)
            .then( (data) => {
                setKeyboardData(data)
            } )
        }
    })

    if( keyboardData ) {
    return(
        <div className="container my-4">
            <div className="row">
                <div className="col">
                    <h2>{ keyboardData.KeebName}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2>{keyboardId}</h2>
                    <h3>Keybaord Picture</h3>
                </div>
                <div className="col">
                    <h3>Manufacture</h3>
                    <h3>Summary</h3>
                    <button className="btn btn-info">Add to Favouries</button>
                    <button className="btn btn-info">Review this keyboard</button>
                    <a className="btn btn-outline-primary" href = "https://dailyclack.com/products/matrix-corsa-keyboard-kit">Learn more.</a>
                </div>
            </div>
        </div>
    )
    }
    else {
        return(
            <div className="container my-4"></div>
        )
    }
}