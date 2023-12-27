import '../styles/videoLine.css';


function VideoLine(props) {
    const {data} = props
    return (
        <div className="VideoLine">
           {
            Object.entries(data).map((each, index) => {
                return (
                    <div className='layer'>
                        <div className="trackName">
                            {each[0]}
                        </div>
                        <div className="track">
                            {
                                each[1].map(x => {
                                    return (
                                        x
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            })
           }
        </div>
    )
}

export default VideoLine;