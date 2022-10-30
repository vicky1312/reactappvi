import React from "react"
import "./zuri.css"
import "./_Avatar share button.png";
import "./_Avatar share button mobile.png";
import {AiOutlineCamera} from "react-icons/ai"
import "./slack.png"
import "./Zuri.Internship_Logo.png"
import "./I4G.png"
import "./Icon.png";


const Greet = () =>{
    return(
        <>
        <div className="zuriproj">
            <section className="profile">
                <div id="share">
                    <img alt="avatar" src={require("./_Avatar share button.png")}></img>
                </div>
                <div id="more">
                    <img alt="avatar" src={require("./_Avatar share button mobile.png")}></img>
                </div>
                <div className="profilepic">
                    <img id="profile_img" src= {require ("./meme.jpeg")} alt="Victory Abayomi"></img>
                    <div id="camera">
                        < AiOutlineCamera />
                    </div>
                </div>
                <p id="twitter">endtheworldnowO</p>
                <p id="slack">Vi</p>
            </section>
            
            <div className="butns">
                <button id="twitters"> <a href="https://twitter.com/endtheworldnowO">Twitter Link</a></button>
                <button id="butn_zuri"><a href="https://training.zuri.team/" target="_blank" rel="noreferrer">Zuri Team</a></button>
                <button id="books"><a href=" http://books.zuri.team" target="_blank" rel="noreferrer">Zuri Books</a></button>
                <button id="book_python"><a href="https://books.zuri.team/python-for-beginners?ref_id=<vi>" target="_blank" rel="noreferrer">Python Books</a></button>
                <button id="pitch"><a href=" https://background.zuri.team" target="_blank" rel="noreferrer">Background Check For Coders</a></button>
                <button id="book_design"><a href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer">Design Books</a></button>
            </div>
            <div id="socials">
                    <img alt="slack" id="icon" src={require("./slack.png")}></img>

                    <img alt="icon" id="icon" src={require("./Icon.png")}></img>
            </div>
        </div>

        <hr></hr>
        <footer>
            <div id="foot">
                <div id="zuri">
                <img alt="zuri" id="footer_img" src={require("./Zuri.Internship_Logo.png")}></img>
                </div>
                <div id="hng">
                    <p> HNG Internship 9 Frontend Task </p>
                </div>
                <div id="i4g">
                    <img alt="i4g" id="footer_img" src={require("./I4G.png")}></img>
                </div>
            </div>
        </footer>
        </>
    ) 
} 

export default Greet