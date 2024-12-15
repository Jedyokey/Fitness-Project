import React, { useRef } from 'react'
import "./Join.css"
import emailjs from "@emailjs/browser"

const Join = () => {
    const form = useRef();
    emailjs.init('Znnm1JpbVrsrym_WX'); // Initialize EmailJS with Public Key


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_fefh6dv', 'template_4l5hml6', form.current, {
            publicKey: 'Znnm1JpbVrsrym_WX',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
        );
    };

  return (
    <div className='join' id='join-us'>
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>Ready to</span>
                <span>Level up</span>
            </div>
            <div>
                <span>your body</span>
                <span className='stroke-text'>with us?</span>
            </div>
        </div>
        {/* left join section end */}

        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter your email address' />
                <button className='btn btn-join'>Join Now</button>
            </form>
            
        </div>
        {/* right join section end */}
      
    </div>
  )
}

export default Join
