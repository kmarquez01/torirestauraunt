const locations = ["Oshokuji-dokoro Asuka", "Den Shichi Sushi Saiin", "Gion Karyo", "Tousuiro"]

const updatedlocations = locations.map((locations) => {
    return <li className = "location-list">{locations}</li>
})

function Locations(){
    return(
        <section id = "Locations">
            {/* <div className = "location-holder"> */}
                <div className = "location-container">
                    <div className = "location-text">
                        <title className = "location-title">Locations</title> 
                        <ul>
                            {updatedlocations}
                        </ul>
                    </div>
                    <div className = "map-container">
                        <iframe className = "map" src= "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1633.7254895727554!2d135.72232656679526!3d35.020446179528186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010799ea663f23%3A0x1b9362c78b8f2434!2zSmFwYW4sIOOAkjYxNi04MDU3IEt5b3RvLCBVa3lvIFdhcmQsIEhhbmF6b25va2l0c3VqaW1pbmFtaWNoxY0sIDctMTMg44K344Or44Kv6KW_6Zmj!5e0!3m2!1sen!2sca!4v1711488076813!5m2!1sen!2sca"></iframe>
                    </div>
                </div>
            {/* </div> */}
            
        </section>
    )
}

export default Locations