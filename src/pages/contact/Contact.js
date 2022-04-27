import React from 'react';
import { Container } from 'react-bootstrap';
import "./Contact.css"

export const Contact = () => {
    return (
        <Container className=" py-3 px-5" id="contact-page">
           <div className='header'>
               <div className='overlay'>
               <div className='txt py'>
               <div className='txt1'><h1 className='header-txt'>CONTACT US</h1></div>
               <div className='txt2'><p>WE WOULD LOVE TO HEAR FROM YOU</p></div>
               </div>
           </div>    
           </div>
           <section className='sec1 py'>
               <div className='form'>
                   <form>
                       <h1>INQUIRY & FEEDBACK</h1>
                       <p>Feel free to let us know your thought about us, your comments and suggestion will be appreciated as well for our improvement.</p>
                        <div className='name py1'>
                        <label>Name</label>
                        <input type='text' placeholder='Enter name' className='px' />
                        </div>
                        <div className='email py1'>
                        <label>Email</label>
                        <input type='text' placeholder='example@gmail.com' className='px' />
                        </div>
                        <div className='title py1'>
                        <label>Subject</label>
                        <input type='text' placeholder='title of message' className='px' />
                        </div>
                        <div className='message py1'>
                        <label>Your message</label>
                        <textarea placeholder='message in full' className='px'></textarea>
                        </div>
                        <div className='btn'>
                        <a href='/'>Send</a>
                        </div>
                   </form>
               </div>
               
           </section>
           
        </Container>
    )
}

export default Contact
