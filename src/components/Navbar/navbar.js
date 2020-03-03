import React, { Component } from 'react'
//import React from 'react';
import Bell from './bell.svg';
import Italk from './Italk.png';
import Help from './help.svg';
import Message from './message.svg';
import User from './users.svg';
import Video from './video.svg';
import './navbar.css';
const images=[User,Message,Video];
const icons=[Help,Bell];

export default class navbar extends Component {
    state={
        initial:[]
    }
    componentDidMount(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://frontend-api.s3.ap-south-1.amazonaws.com/friends.json"; // site that doesn’t send Access-Control-*
        fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
        .then((res) =>{res.json().then((result) => {
            console.warn(result.data,'ooooooooo')
            this.setState({initial:result.data.friends})
            // console.log(this.state.friends);
        })})
         }
   
    render() {
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
          
           
        )
    }
}
