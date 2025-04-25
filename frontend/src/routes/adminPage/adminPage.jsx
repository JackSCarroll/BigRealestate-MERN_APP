import "./adminPage.scss";
import { useContext, useState, useEffect, Suspense } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLoaderData, Await } from "react-router-dom";
import TabButton from "../../components/tabButton/tabButton";
import UserList from "../../components/userList/userList";
import apiRequest from "../../lib/apiRequest";

function AdminPage() {
    const { currentUser } = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState("user");
    const [data, setData] = useState([]);
    

    useEffect(() => {
        apiRequest.get(`/admin/${activeTab}s`)
            .then((response) => {
                console.log("User data:", response);
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }, []);
    useEffect(() => {
        apiRequest.get(`/admin/${activeTab}s`)
            .then((response) => {
                console.log("User data:", response);
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }, [activeTab]);
    
    if (!currentUser || currentUser.role !== "admin") {
        return (
            <div className="adminPage">
                <h1>Access Denied</h1>
                <p>You do not have permission to view this page.</p>
            </div>
        );
    }
    // Admin-specific content goes here


    return (
        <div className="adminPage">
        <h1>Administration Panel</h1>
        
        <TabButton active={activeTab} setActive={setActiveTab}/>
        <div className="tabContainer">
            {/* User view */}
            {activeTab === "user" && (
                <div className="userView">
                    {/* User management content */}
                    <div className="tabContent">
                        <Suspense fallback={<p>Loading...</p>}>
                            <Await
                                resolve={data}
                                errorElement={<p>Error loading posts</p>}
                            >
                                {(data) => <UserList users={data}/>}
                            </Await>
                        </Suspense>
                    </div>
                </div>
            )}
            
            {/* Agent view */}
            {activeTab === "agent" && (
                <div className="agentView">
                    {/* Agent management content */}
                    <div className="tabContent">
                        <Suspense fallback={<p>Loading...</p>}>
                            <Await
                                resolve={data}
                                errorElement={<p>Error loading posts</p>}
                            >
                                {(data) => <UserList users={data}/>}
                            </Await>
                        </Suspense>
                    </div>
                </div>
            )}
            
            {/* Listing view */}
            {activeTab === "post" && (
                <div className="listingView">
                    <h2>Listing Management</h2>
                    {/* Listing management content */}
                </div>
            )}
        </div>

        </div>
    );
}

export default AdminPage;