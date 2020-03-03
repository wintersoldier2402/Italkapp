import React, { Component } from 'react';
import './sidecomp.css';
import Message from '../Navbar/message.svg';
import User from '../Navbar/users.svg';
import Video from '../Navbar/video.svg';
import Italk from '../Navbar/italk.png'


const sidecom=(props)=>{
        return (
            <div className="flex-container1">
            <div className="underline-on-hover1"><img src={Message} /> Messages</div>
            <span className="underline-on-hover2">Chats</span>
            <span className="underline-on-hover2">Send Message</span>
            <div className="underline-on-hover1"><img src={User} /> Groups</div>
            <span className="underline-on-hover2">History</span>
            <span className="underline-on-hover2">Create Groups</span>
            <div className="underline-on-hover1"><img src={Video} /> Video Calls</div>  
            <span className="underline-on-hover2">History</span>
            <span className="underline-on-hover2">Calls</span>
            </div>

            
            
        )
    }

export default sidecom 