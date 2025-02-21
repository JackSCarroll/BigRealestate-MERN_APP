import { useState } from 'react'
import './Chat.scss'

function Chat(){

    const [chat, setChat] = useState(null);
    return(
        <div className='chat'>
            <div className="messages">
                <h1>Messages</h1>

                <div className="message" onClick={()=>{setChat(true)}}>
                    <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/7/22/1437566053687/16df9aa9-5eb1-4ab0-87d5-b4ff14517f53-1020x612.jpeg?width=1900&dpr=1&s=none&crop=none" alt=''/>
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur...
                    </p>
                </div>
                <div className="message" onClick={()=>{setChat(true)}}>
                    <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/7/22/1437566053687/16df9aa9-5eb1-4ab0-87d5-b4ff14517f53-1020x612.jpeg?width=1900&dpr=1&s=none&crop=none" alt=''/>
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur...
                    </p>
                </div>
                <div className="message" onClick={()=>{setChat(true)}}>
                    <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/7/22/1437566053687/16df9aa9-5eb1-4ab0-87d5-b4ff14517f53-1020x612.jpeg?width=1900&dpr=1&s=none&crop=none" alt=''/>
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur...
                    </p>
                </div>
                <div className="message" onClick={()=>{setChat(true)}}>
                    <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/7/22/1437566053687/16df9aa9-5eb1-4ab0-87d5-b4ff14517f53-1020x612.jpeg?width=1900&dpr=1&s=none&crop=none" alt=''/>
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur...
                    </p>
                </div>
                <div className="message" onClick={()=>{setChat(true)}}>
                    <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/7/22/1437566053687/16df9aa9-5eb1-4ab0-87d5-b4ff14517f53-1020x612.jpeg?width=1900&dpr=1&s=none&crop=none" alt=''/>
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur...
                    </p>
                </div>
                <div className="message" onClick={()=>{setChat(true)}}>
                    <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/7/22/1437566053687/16df9aa9-5eb1-4ab0-87d5-b4ff14517f53-1020x612.jpeg?width=1900&dpr=1&s=none&crop=none" alt=''/>
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur...
                    </p>
                </div>
                <div className="message" onClick={()=>{setChat(true)}}>
                    <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/7/22/1437566053687/16df9aa9-5eb1-4ab0-87d5-b4ff14517f53-1020x612.jpeg?width=1900&dpr=1&s=none&crop=none" alt=''/>
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur...
                    </p>
                </div>
                <div className="message" onClick={()=>{setChat(true)}}>
                    <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/7/22/1437566053687/16df9aa9-5eb1-4ab0-87d5-b4ff14517f53-1020x612.jpeg?width=1900&dpr=1&s=none&crop=none" alt=''/>
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur...
                    </p>
                </div>
            </div>
            {chat&& <div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/7/22/1437566053687/16df9aa9-5eb1-4ab0-87d5-b4ff14517f53-1020x612.jpeg?width=1900&dpr=1&s=none&crop=none" alt="" />
                        John Doe
                    </div>
                    <span className='close' onClick={()=>{setChat(null)}}>X</span>
                </div>
                <div className="center">
                    <div className="chatMessage own">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, maiores eligendi. Sequi suscipit, autem molestiae commodi nostrum perspiciatis, tempore alias omnis corrupti asperiores repudiandae laudantium doloremque placeat nisi quas accusantium.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, maiores eligendi. Sequi suscipit, autem molestiae commodi nostrum perspiciatis, tempore alias omnis corrupti asperiores repudiandae laudantium doloremque placeat nisi quas accusantium.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, maiores eligendi. Sequi suscipit, autem molestiae commodi nostrum perspiciatis, tempore alias omnis corrupti asperiores repudiandae laudantium doloremque placeat nisi quas accusantium.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, maiores eligendi. Sequi suscipit, autem molestiae commodi nostrum perspiciatis, tempore alias omnis corrupti asperiores repudiandae laudantium doloremque placeat nisi quas accusantium.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, maiores eligendi. Sequi suscipit, autem molestiae commodi nostrum perspiciatis, tempore alias omnis corrupti asperiores repudiandae laudantium doloremque placeat nisi quas accusantium.</p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>}
        </div>
    )
}

export default Chat