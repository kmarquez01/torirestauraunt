import WhoWeAre from "../../About/WhoWeAre"

import Locations from "../../About/Locations"

import Navigation from "../../Navigation"

import Contact from "../../About/Contact"

import Landing from "../../About/Landing"
import Footer from "../../Home/Footer"

function Abouts(){
    return(
        <div>
            <Navigation />
            <Landing />
            <WhoWeAre />
            <Locations />
            <Contact />
            <Footer />
        </div>
    )
}

export default Abouts