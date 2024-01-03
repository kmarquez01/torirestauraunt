import WhoWeAre from "../../About/WhoWeAre"

import Locations from "../../About/Locations"

import Navigation from "../../Navigation"

import Contact from "../../About/Contact"

import Landing from "../../About/Landing"

function Abouts(){
    return(
        <div>
            <Navigation />
            <Landing />
            <WhoWeAre />
            <Locations />
            <Contact />
        </div>
    )
}

export default Abouts