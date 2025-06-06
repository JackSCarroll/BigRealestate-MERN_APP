import "./profilePage.scss";
import List from '../../components/list/List'
import Chat from '../../components/chat/Chat'
import apiRequest from "../../lib/apiRequest";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function ProfilePage(){
    const data = useLoaderData();

    const { updateUser, currentUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = async ()=> {
        try{
            await apiRequest.post("/auth/logout");
            updateUser(null);
            navigate("/");
        }catch(err){
            console.log(err);
        }
    };
    return (
        <div className='profilePage'>
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <Link to="/profile/update">
                            <button>Update Profile</button>
                        </Link>
                    </div>
                    <div className="info">
                        <span>Avatar:
                            <img src={currentUser.avatar || "noavatar.jpg"} alt='' />
                        </span>
                        <span>Username: <b>{currentUser.username}</b></span>
                        <span>Email: <b>{currentUser.email}</b></span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    {currentUser.role === "agent" && (
                    <><div className="title">
                            <h1>My Listings</h1>
                            <Link to="/add">
                                <button>Create Listing</button>
                            </Link>
                        </div><Suspense fallback={<p>Loading...</p>}>
                                <Await
                                    resolve={data.postResponse}
                                    errorElement={<p>Error loading posts</p>}
                                >
                                    {(postResponse) => <List posts={postResponse.data.userPosts} />}
                                </Await>
                            </Suspense></>
                    )}
                    <div className="title">
                        <h1>Saved Properties</h1>
                    </div>
                    <Suspense fallback={<p>Loading...</p>}>
                        <Await 
                            resolve={data.postResponse}
                            errorElement={<p>Error loading posts</p>}
                        >
                            {(postResponse) => <List posts = {postResponse.data.savedPosts}/>}
                        </Await>
                    </Suspense>
                </div>
            </div>
            <div className="chatContainer">
                <Chat/>
            </div>
        </div>
    )
}

export default ProfilePage;