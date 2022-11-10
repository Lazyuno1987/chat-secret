import React, { useContext } from 'react'
import Video from '../img/cam.png'
import Add from '../img/add.png'
import More from '../img/more.png'
import Messages from './Messages'
import  Input from './Input'
import { ChatContext } from '../context/ChatContext'
function Chat() {
const {data} = useContext(ChatContext)

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{ data.user?.displayName}</span>
        <div className="chatIcons">
          <img width={24} src={Video} alt="" />
          <img width={24} src={Add} alt="" />
          <img width={24} src={More} alt="" />
        </div>
      
      </div>
      <Messages />
      <Input/>
    </div>
  )
}

export default Chat
