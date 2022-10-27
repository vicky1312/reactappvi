import React from "react"
import "./zuri.css"

const Greet = () =>{
    return(
        <>
        <div className="zuriproj">
            <section className="profile">
                <div className="profilepic" id="profile_image">
                    <img src= {require ("./meme.jpeg")} alt="Victory Abayomi"></img>
                </div>
                <p id="twitter">Twitter: @justheretolurkp</p>
                <p id="slack">Vi</p>
            </section>
            
            <div className="butns">
                <button id="butn_zuri"><a href="https://training.zuri.team/" target="_blank" rel="noreferrer">Zuri Team</a></button>
                <button id="books"><a href=" http://books.zuri.team" target="_blank" rel="noreferrer">Zuri Books</a></button>
                <button id="book_python"><a href="https://books.zuri.team/python-for-beginners?ref_id=vi" target="_blank" rel="noreferrer">Python Books</a></button>
                <button id="pitch"><a href=" https://background.zuri.team" target="_blank" rel="noreferrer">Background Check For Coders</a></button>
                <button id="book_design"><a href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer">Design Books</a></button>
            </div>
            <div id="socials">

            </div>
        </div>
        </>
    ) 
} 

export default Greet