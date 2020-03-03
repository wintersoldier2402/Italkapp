import React from 'react';
import Bell from './bell.svg';
import Italk from './Italk.png';
import Help from './help.svg';
import Message from './message.svg';
import User from './users.svg';
import Video from './video.svg';
import './navbar.css';
 

const images=[User,Message,Video];
const icons=[Help,Bell];


const navbar=(props)=>{                                              {/*declaration of functional component.*/}
    return (
        <div className="navbar">
        {/*{
            images.map(images=>{
                return (<div><img src={images} />{props.title}</div>)
            })
        }*/}    
        <img src={Italk} className="img-1" />    
            <div className="heading">
            <span class="underline-on-hover"><img src={User} /> Groups</span> 
            <span class="underline-on-hover"><img src={Message} /> Message</span> 
            <span class="underline-on-hover"><img src={Video} /> Video Calls</span>
            </div> 
            <div className="icons">
            {icons.map(icon=>{return <img style={{margin: "0px 0 0 20px"}} src={icon} />})} {/* used here */}
            {/*<img src={Help} />
               <img src={Bell} />*/}
            </div>
           
            </div>  
            )}
export default navbar