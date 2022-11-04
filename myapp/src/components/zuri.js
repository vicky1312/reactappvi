import React from "react"
import {useNavigate} from 'react-router-dom'
import "./zuri.css"
import "./_Avatar share button.png";
import "./_Avatar share button mobile.png";
import {AiOutlineCamera} from "react-icons/ai"
import "./slack.png"
import "./Zuri.Internship_Logo.png"
import "./I4G.png"
import "./Icon.png";


const Greet = () =>{
    let navigate = useNavigate();

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
                    <img id="profile__img" src= {require ("./meme.jpeg")} alt="Victory Abayomi"></img>
                    <div id="camera">
                        < AiOutlineCamera />
                    </div>
                </div>
                <p id="twitter">endtheworldnowO</p>
                <p id="slack">Vi</p>
            </section>
            
            <div className="butns">
                <a href="https://twitter.com/endtheworldnowO"><button id="twitters">Twitter Link</button></a>
                <a href="https://training.zuri.team/" target="_blank" rel="noreferrer"><button id="btn__zuri">Zuri Team</button></a>
                <a href=" http://books.zuri.team" target="_blank" rel="noreferrer"><button id="books">Zuri Books</button></a>
                <a href="https://books.zuri.team/python-for-beginners?ref_id=<vi>" target="_blank" rel="noreferrer"><button id="book__python">Python Books</button></a>
                <a href=" https://background.zuri.team" target="_blank" rel="noreferrer"><button id="pitch">Background Check For Coders</button></a>
                <a href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer"><button id="book__design">Design Books</button></a>
                <button onClick={() => {
                    navigate("/contact")
                }} id="contact">Contact Me</button>
                
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