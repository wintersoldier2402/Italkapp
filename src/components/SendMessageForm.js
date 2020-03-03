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
                    <div className="btn"><img src={Logo} /> Send</div>
                    
                   
            </div>
            
            )
    }
}

export default SendMessageForm