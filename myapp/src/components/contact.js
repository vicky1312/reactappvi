import React from 'react'
import "./contact.css"
import "./Zuri.Internship_Logo.png"
import "./I4G.png"

function Contact() {
  return (
    <>
    <body>
    <div id='head'>
        <h1 id='htag'>Contact Me</h1>
        <p id='par'>Hi there, contact me about anything you have in mind</p>
      </div>

      <div id='form'>
      <form>
            <div className='inform' id='inform'>
                <div className='names' id='name'>
                    <div id='fname'>
                        <label for="firstname">First Name</label>
                        <input type="text" id='first_name' placeholder='Enter your firstname'></input>
                    </div>
                
                    <div id='lname'>
                        <label for="lastname">Last Name</label>
                        <input type="text" id='last_name' placeholder='Enter your last name'></input>
                    </div>

                </div>
                <div id='info'>
                    <label for="email">Email</label>
                    <input type="text" id='email' placeholder='yourname@email.com' required></input>

                    <label for="message">Message</label>
                    <textarea id='message' placeholder="Send me a message, and I'll reply you as soon as possible..." name='message' rows="7" cols="70"></textarea>
                    <div id='error'>
                        <p> Please enter a message</p>
                    </div> 
                </div>
            </div>
            
            <div id='checks'>
                <label id='check'>
                    <input id='checkbox' type="checkbox" required></input>
                </label>
                <span id="checkpar">You agree to providing your data to Abayomi Victory who may contact you</span>
            </div>

            <button id='btn__submit'>Submit Message</button>

        </form>
      </div>
        

    </body>
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

export default Contact
