import "./profilePage.scss";
import List from '../../components/list/List'
import Chat from '../../components/chat/Chat'

function ProfilePage(){
    return (
        <div className='profilePage'>
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>Avatar:
                            <img src='https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/7/22/1437566053687/16df9aa9-5eb1-4ab0-87d5-b4ff14517f53-1020x612.jpeg?width=1900&dpr=1&s=none&crop=none' alt='' />
                        </span>
                        <span>Username: <b>Brian Limmond</b></span>
                        <span>Email: <b>limmy@limmyland.co.uk</b></span>
                    </div>
                    <div className="title">
                        <h1>My Listings</h1>
                        <button>Create Listing</button>
                    </div>
                    <List/>
                    <div className="title">
                        <h1>Saved Property</h1>
                    </div>
                    <List/>
                </div>
            </div>
            <div className="chatContainer">
                <Chat/>
            </div>
        </div>
    )
}

export default ProfilePage;