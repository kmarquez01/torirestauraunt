import {useState} from "react"

function Contact(){
    return(
        <section id = "contact">
            <div className = "contact-container">
                <div className = "contact-inner-container">
                    <h1>Have any inquiries? Feel free to contact us!</h1>
                    <form className = "contact-form">

                        <div className = "names">
                            <div className ="form">
                                <input type = "text" name = "name" placeholder = "First Name" className = "names" required></input>
                            </div>
                            <div className = "form">
                                <input type = "text" name = "name" placeholder = "Last Name" className = "names" required></input>
                            </div>
                        </div>

                        <div className ="form">
                            <input type = "text" name = "email" placeholder = "Email" required></input>
                        </div>
                        <div className ="form">
                            <textarea className = "description" rows = {10} cols = {24} name = "company" placeholder = "Description" required></textarea>
                        </div>
            
                        <input type ="submit" value ="Send" className = "btn-primary"></input>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact