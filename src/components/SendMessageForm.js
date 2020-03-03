import React from 'react';
import Logo from './send.svg';
import AddButton from './Addbutton';

class SendMessageForm extends React.Component {
    render() {
        return (
            
            
            <div className="send-message-form">
            <AddButton />
            <input
                    placeholder="SendMessageForm"
                    type="text" />
                   <div className="btn"><img style={{position:"relative" ,right: "35px",top: "30px"}}src={Logo} />
                   <a className='link'>Send</a>
                   </div>
                    
                   
            </div>
            
            )
    }
}

export default SendMessageForm