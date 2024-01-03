import {useState} from "react"

import styles from "../styles/Home.module.css"


function MainContent(){

    const [readMore, setRead] = useState(false)

    const expanded = <div>
        <p>Hello World!</p>
    </div>

    let linkN;
    
        if (readMore === true){
            linkN = "Read less"
        }
        else{
            linkN = "Read more"
        }
    
    

    return (
        <section className ="showcase">
        <div className ="container grid">
            <div className ="showcase-text">
                <h1>Food Suggestions</h1>
                <p>Not seeing the item you wish to order? Feel free to recommend the item and we will work on the possibility of adding it to our menu!
                {readMore && expanded}</p>
                
                <a className ="btn btn-outline" onClick = {() => {setRead(!readMore)}}>{linkN}</a>
                
            </div>

            <div className = "showcase-form card" >
                <h2>Request an Item</h2>
                <form>
                    <div className = "form">
                        <input type = "text" name = "name" placeholder = "Name" required></input>
                    </div>
                    <div className ="form">
                        <input type = "text" name = "company" placeholder = "Short description" required></input>
                    </div>
                    <div className ="form">
                        <input type = "text" name = "email" placeholder = "Email" required></input>
                    </div>
                    <input type ="submit" value ="Send" className = {styles.btn}></input>
                </form>
            </div>
        </div>
    </section>
    )
}

export default MainContent