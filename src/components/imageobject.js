import {useEffect, useLayoutEffect, useState } from "react"
import "../styles/object.css"

function Imageobject(props) {
    const {data, setter} = props
    const [body, setBody] = useState({})

    // useEffect(() => {
    //     setBody(data)
    // }, [data])

    useEffect(() => {
        setter((prev) => {
            return {...prev, backgroundLayer: body}
        })
    }, [body])


    const chooseImage = (data) => {
        console.log(data)
    }

    const changeX = (data) => {
        setBody((prevData) => {
            try {
                    const xy = prevData["xy"] || []
                    xy[0] = Number(data.target.value)
                    console.log({...prevData, xy: xy})
                    return {...prevData, xy: xy}
            }
            catch (e) {
                console.log(e)
            }
        })
    }

    const changeY = (data) => {
        setBody((prevData) => {
            try {
                    const xy = prevData["xy"] || []
                    xy[1] = Number(data.target.value)
                    console.log({...prevData, xy: xy})
                    return {...prevData, xy: xy}
            }
            catch (e) {
                console.log(e)
            }
        })
    }

    return (
        <div className="imageObject">
            <div className="field">
                <p>Image:</p>
                <input type="file" onChange={chooseImage}/>
            </div>
            <div className="field">
                <p>x:</p>
                <input type="text" className="xy" onChange={changeX} required/>
                <p>y:</p>
                <input type="text" className="xy" onChange={changeY} required/>
            </div>
        </div>
    )
}

export default Imageobject;