import React from 'react'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'
import Navbar from '../src/components/Navbar/navbar'
import Sidebar from '../src/components/SideBar/sidecomp'
class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Navbar />
                <Sidebar />
                
                <RoomList />
                <MessageList />
                
                <SendMessageForm />
                
            </div>
        );
    }
}

export default App