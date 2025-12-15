import React, { useState  } from 'react';
import "./MessageModal.css";
import SectionTitle from './../component/SectionTitle';
import close from "../assets/close.svg"
const MessageModal = ({ onClose }) => {
    return ( 
<>
<div className="modal-overlay">
<div className='messageForm'>
    <div className='formtitlewbutton'>
    <SectionTitle Sectiontitle ="Message Details"/>
<img src={close} alt="close icon" className='close-icon'  onClick={onClose}/>
    </div>

    <div className='secpartform'>
        <div className='senderwinoput'>
            <p className='sender'>Sender:</p>
                        <p className='senderName'>Nadeen Yasser</p>

        </div>
          <div className='senderwinoput'>
            <p className='sender'>Sender:</p>
                        <p className='senderName'>Nadeen Yasser</p>

        </div>  <div className='senderwinoput'>
            <p className='sender'>Sender:</p>
                        <p className='senderName'>Nadeen Yasser</p>

        </div>
          <div className='senderwinoput'>
            <p className='sender'>Message</p>
<div className='messageInput'>
    <p className='message'>I’m currently looking for a designer to collaborate on an upcoming web design project and thought you’d be a great fit.
Would you be interested in discussing this opportunity further? I’d love to hear your thoughts and see if we can work together.
Looking forward to your reply!Best regards,Sarah</p>
</div>
        </div>
        <p className='date'>Received on Nov 22, 2025 at 10:15 AM</p>
    </div>

</div>
</div>


</>

     );
}
 
export default MessageModal;