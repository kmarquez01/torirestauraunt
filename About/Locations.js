const locations = ["Oshokuji-dokoro Asuka", "Den Shichi Sushi Saiin", "Gion Karyo", "Tousuiro"]

const updatedlocations = locations.map((locations) => {
    return <li className = "location-list">{locations}</li>
})

function Locations(){
    return(
        <section id = "Locations">
            <div className = "location-container">
                <div className = "location-text">
                    <title className = "location-title">Locations</title> 
                    <ul>
                        {updatedlocations}
                    </ul>
               </div>
                <iframe className = "map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.303838770957!2d-122.78135358408065!3d49.15684078759952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d0b1ccc41d6b%3A0xeb1d67eaa14c6dfb!2sSunny%20Dragon%20Korean%20and%20Japanese%20Restaurant!5e0!3m2!1sen!2sca!4v1620768312200!5m2!1sen!2sca" ></iframe>
            </div>
            
        </section>
    )
}

export default Locations