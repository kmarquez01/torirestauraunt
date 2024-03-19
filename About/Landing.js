import {motion} from "framer-motion"

function Landing(){
    return(
        <section className = "landing">
             <img className = "person" src = "https://images.unsplash.com/photo-1590577976322-3d2d6e2130d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
            <div className = "about-txt">
                <div className = "about-txt-wrapper">
                    <h1 className = "quote">"Comfort is reassuring, but nothing grows there."</h1>
                </div>
            </div>
        </section>
    )
}

export default Landing

