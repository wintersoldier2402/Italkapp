import React from 'react';
import './MessageList.css'

class MessageList extends React.Component {
    state = {
        chat: []
      }
      componentDidMount(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://frontend-api.s3.ap-south-1.amazonaws.com/messages.json"; // site that doesn’t send Access-Control-*
        fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
        .then((res) =>{res.json().then((result) => {
            console.warn(result.data,"00000")
            this.setState({chat:result.data.chat})
            //console.log(this.state.chat);
        })})
         }
   
 
    render(){
        
        var{chat}=this.state;

        return (
            <div className="message-list">
            <ul>
             {this.state.chat.map((item) =>
                {return(
                    <div>
                <p className="day">{item.dateBreak}
                </p>{
                    item.messages.map((item)=>
                    {return(
                                
                        <div>
                        <div>{item.data.text}</div>
                        <img style={{height:"150px"}} src={item.data.imageUrl} />
                        <div>{item.data.timestamp}</div>
                        </div>
                    )

                    })
                }
                </div>
             )})}
                 
             </ul>              
        </div>
        )
    }
}

export default MessageList