import React from 'react'
import './RoomList.css';
import Barchart from './../photo/bar-chart-2.svg';
import Eye from './../photo/eye.svg';
class RoomList extends React.Component {
    state={
        friend:[]
     /*   friends : [
            {
                "name" : "John Doe",
                "thumbnail" : "https://frontend-api.s3.ap-south-1.amazonaws.com/4.jpeg",
                "previewMsg" : "Looks like we need to plan a trip soon! 🚶‍♀️",
                "timestamp" : "19 Jan 2019 | 00:04 AM",
                "stats" : "20 Replies | 100 views"
            },
            {
                "name" : "Olivia Sal",
                "thumbnail" : "https://frontend-api.s3.ap-south-1.amazonaws.com/1.jpeg",
                "previewMsg" : "Hello there! What's up?",
                "timestamp" : "18 Jan 2019 | 00:04 AM",
                "stats" : "20 Replies | 100 views"
            },
            {
                "name" : "Rebecca",
                "thumbnail" : "https://frontend-api.s3.ap-south-1.amazonaws.com/2.jpeg",
                "previewMsg" : "Hope you are doing well!",
                "timestamp" : "17 Jan 2019 | 01:00 PM",
                "stats" : "20 Replies | 100 views"
            },
            {
                "name" : "Jake Peralta",
                "thumbnail" : "https://frontend-api.s3.ap-south-1.amazonaws.com/3.jpg",
                "previewMsg" : "Amy! I cracked the case!",
                "timestamp" : "16 Jan 2019 | 02:00 PM",
                "stats" : "20 Replies | 100 views"
            },
            {
                "name" : "John Doe",
                "thumbnail" : "https://frontend-api.s3.ap-south-1.amazonaws.com/4.jpeg",
                "previewMsg" : "Looks like we need to plan a trip soon! 🚶‍♀️",
                "timestamp" : "19 Jan 2019 | 00:04 AM",
                "stats" : "20 Replies | 100 views"
            },
            {
                "name" : "Olivia Sal",
                "thumbnail" : "https://frontend-api.s3.ap-south-1.amazonaws.com/1.jpeg",
                "previewMsg" : "Hello there! What's up?",
                "timestamp" : "18 Jan 2019 | 00:04 AM",
                "stats" : "20 Replies | 100 views"
            },
            {
                "name" : "Rebecca",
                "thumbnail" : "https://frontend-api.s3.ap-south-1.amazonaws.com/2.jpeg",
                "previewMsg" : "Hope you are doing well!",
                "timestamp" : "17 Jan 2019 | 01:00 PM",
                "stats" : "20 Replies | 100 views"
            },
            {
                "name" : "Jake Peralta",
                "thumbnail" : "https://frontend-api.s3.ap-south-1.amazonaws.com/3.jpg",
                "previewMsg" : "Amy! I cracked the case!",
                "timestamp" : "16 Jan 2019 | 02:00 PM",
                "stats" : "20 Replies | 100 views"
            },
            {
                "name" : "John Doe",
                "thumbnail" : "https://frontend-api.s3.ap-south-1.amazonaws.com/4.jpeg",
                "previewMsg" : "Looks like we need to plan a trip soon! 🚶‍♀️",
                "timestamp" : "19 Jan 2019 | 00:04 AM",
                "stats" : "20 Replies | 100 views"
            },
            {
                "name" : "Olivia Sal",
                "thumbnail" : "https://frontend-api.s3.ap-south-1.amazonaws.com/1.jpeg",
                "previewMsg" : "Hello there! What's up?",
                "timestamp" : "18 Jan 2019 | 00:04 AM",
                "stats" : "20 Replies | 100 views"
            },
            {
                "name" : "Rebecca",
                "thumbnail" : "https://frontend-api.s3.ap-south-1.amazonaws.com/2.jpeg",
                "previewMsg" : "Hope you are doing well!",
                "timestamp" : "17 Jan 2019 | 01:00 PM",
                "stats" : "20 Replies | 100 views"
            },
            {
                "name" : "Jake Peralta",
                "thumbnail" : "https://frontend-api.s3.ap-south-1.amazonaws.com/3.jpg",
                "previewMsg" : "Amy! I cracked the case!",
                "timestamp" : "16 Jan 2019 | 02:00 PM",
                "stats" : "20 Replies | 100 views"
            },
            {
                "name" : "John Doe",
                "thumbnail" : "https://frontend-api.s3.ap-south-1.amazonaws.com/4.jpeg",
                "previewMsg" : "Looks like we need to plan a trip soon! 🚶‍♀️",
                "timestamp" : "19 Jan 2019 | 00:04 AM",
                "stats" : "20 Replies | 100 views"
            },
            {
                "name" : "Olivia Sal",
                "thumbnail" : "https://frontend-api.s3.ap-south-1.amazonaws.com/1.jpeg",
                "previewMsg" : "Hello there! What's up?",
                "timestamp" : "18 Jan 2019 | 00:04 AM",
                "stats" : "20 Replies | 100 views"
            },
            {
                "name" : "Rebecca",
                "thumbnail" : "https://frontend-api.s3.ap-south-1.amazonaws.com/2.jpeg",
                "previewMsg" : "Hope you are doing well!",
                "timestamp" : "17 Jan 2019 | 01:00 PM",
                "stats" : "20 Replies | 100 views"
            },
            {
                "name" : "Jake Peralta",
                "thumbnail" : "https://frontend-api.s3.ap-south-1.amazonaws.com/3.jpg",
                "previewMsg" : "Amy! I cracked the case!",
                "timestamp" : "16 Jan 2019 | 02:00 PM",
                "stats" : "20 Replies | 100 views"
            },
            {
                "name" : "John Doe",
                "thumbnail" : "https://frontend-api.s3.ap-south-1.amazonaws.com/4.jpeg",
                "previewMsg" : "Looks like we need to plan a trip soon! 🚶‍♀️",
                "timestamp" : "19 Jan 2019 | 00:04 AM",
                "stats" : "20 Replies | 100 views"
            },
            {
                "name" : "Olivia Sal",
                "thumbnail" : "https://frontend-api.s3.ap-south-1.amazonaws.com/1.jpeg",
                "previewMsg" : "Hello there! What's up?",
                "timestamp" : "18 Jan 2019 | 00:04 AM",
                "stats" : "20 Replies | 100 views"
            },
            {
                "name" : "Rebecca",
                "thumbnail" : "https://frontend-api.s3.ap-south-1.amazonaws.com/2.jpeg",
                "previewMsg" : "Hope you are doing well!",
                "timestamp" : "17 Jan 2019 | 01:00 PM",
                "stats" : "20 Replies | 100 views"
            },
            {
                "name" : "Jake Peralta",
                "thumbnail" : "https://frontend-api.s3.ap-south-1.amazonaws.com/3.jpg",
                "previewMsg" : "Amy! I cracked the case!",
                "timestamp" : "16 Jan 2019 | 02:00 PM",
                "stats" : "20 Replies | 100 views"
            },
            {
                "name" : "John Doe",
                "thumbnail" : "https://frontend-api.s3.ap-south-1.amazonaws.com/4.jpeg",
                "previewMsg" : "Looks like we need to plan a trip soon! 🚶‍♀️",
                "timestamp" : "19 Jan 2019 | 00:04 AM",
                "stats" : "20 Replies | 100 views"
            },
            {
                "name" : "Olivia Sal",
                "thumbnail" : "https://frontend-api.s3.ap-south-1.amazonaws.com/1.jpeg",
                "previewMsg" : "Hello there! What's up?",
                "timestamp" : "18 Jan 2019 | 00:04 AM",
                "stats" : "20 Replies | 100 views"
            },
            {
                "name" : "Rebecca",
                "thumbnail" : "https://frontend-api.s3.ap-south-1.amazonaws.com/2.jpeg",
                "previewMsg" : "Hope you are doing well!",
                "timestamp" : "17 Jan 2019 | 01:00 PM",
                "stats" : "20 Replies | 100 views"
            },
            {
                "name" : "Jake Peralta",
                "thumbnail" : "https://frontend-api.s3.ap-south-1.amazonaws.com/3.jpg",
                "previewMsg" : "Amy! I cracked the case!",
                "timestamp" : "16 Jan 2019 | 02:00 PM",
                "stats" : "20 Replies | 100 views"
            }
        ]

    }
*/}
    componentDidMount(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://frontend-api.s3.ap-south-1.amazonaws.com/friends.json"; // site that doesn’t send Access-Control-*
        fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
        .then((res) =>{res.json().then((result) => {
            console.warn(result.data,'ooooooooo')
            this.setState({friend:result.data.friends})
            // console.log(this.state.friends);
        })})
         }
   
    render () {
        var {friend}=this.state;
        return(
            <div className="rooms-list">
            <div>
            { this.state.friend.map((item)=> {return (<div className="container">
                <div className="image-1">
                <img src={item.thumbnail} style={{height:"50px", borderRadius:"60px" }}/>{' '} {' '} 
                <div className="div-name">
                {item.name}
                </div>
                <div className="name-1">
                {item.previewMsg}
                </div>
                <div className="div-name1"> {item.timestamp}</div>
                <div className="div-name2"><img src={Eye} />{item.stats}</div>
                </div></div>)})  }
            </div>
            </div>
        )
    }
}

export default RoomList