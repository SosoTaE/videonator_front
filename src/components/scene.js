import { useEffect, useState } from "react"
import "../styles/object.css"
import Imageobject from "./imageobject"

function Scene(props) {
    const {data, setter, index} = props
    const [_body, _setBody] = useState({})
 
    console.log(_body)
    const changeDuration = (data) => {
        _setBody({..._body, duration:Number(data.target.value)})
    }

    useEffect(() => {
        setter((prev) => {
            const arr = [...prev]
            arr[index] = {..._body}
            return arr
        })
    }, [_body])
   
    return (
        <div className="object">
            <div className="field">
                <p>duration:</p>
                <input type="text" onChange={changeDuration} />
            </div>
            <Imageobject data={_body} setter={_setBody}/>
        </div>
    )
}

export default Scene