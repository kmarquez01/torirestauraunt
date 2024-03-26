import mainImage from "../public/images/imgPerson.jpg"

function Landing(){
    return(
        <section className = "landing">
             <img className = "person" src = {mainImage.src} />
            <div className = "about-txt">
                <div className = "about-txt-wrapper">
                    <h1 className = "quote">"Comfort is reassuring, but nothing grows there."</h1>
                </div>
            </div>
        </section>
    )
}

export default Landing

