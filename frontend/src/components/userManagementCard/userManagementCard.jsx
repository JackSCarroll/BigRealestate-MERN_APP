import "./userManagementCard.scss";
import { useContext, useState, useTransition } from 'react';
import { useOptimistic } from 'react';
import { AuthContext } from '../../context/AuthContext';
import apiRequest from '../../lib/apiRequest';

function UserManagementCard({ user }) {
    const { currentUser } = useContext(AuthContext);
    const [role, setRole] = useState(user.role);
    const [optimisticRole, setOptimisticRole] = useOptimistic(role);
    const [isPending, startTransition] = useTransition();
    const handleDelete = () => {
        //onDelete(user.id);
    };
    const handleUpdate = () => {
        //onDelete(user.id);
    };

    const handleRole = async (role_input) => {
        //onUpdate(user.id);
        if(currentUser.role === "admin"){
            // Update user role logic
            startTransition(() => {
                setOptimisticRole(role_input);
            });
            try {
                // Make API request to update user role
                if (role_input === "agent") {
                    await apiRequest.put(`/users/agent/${user.id}`);
                }
                if (role_input === "admin") {
                    await apiRequest.put(`/users/role/${user.id}`, { role: "admin" });
                }
                if (role_input === "user") {
                    await apiRequest.put(`/users/role/${user.id}`, { role: "user" });
                }
                setRole(role_input);
            } catch (err) {
                console.log(err);
                alert(err.response.data.message);
            }
        }
        else{
            alert("You are not authorized to update user roles.");
        }
    };

    return (
        <div className="userManagementCard">
            <div className="userInfo">
                <div className="details">
                    <img src={user.avatar || "noavatar.jpg"} alt="" />
                    <div className="names">
                        <h2>{user.username}</h2>
                        <p>{user.email}</p>
                    </div>
                </div>
                <div className="role">
                    <select name="role" id="role" defaultValue={role} onChange={(e) => handleRole(e.target.value)}>
                        <option value="user">User</option>
                        <option value="agent">Agent</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
            </div>
            <div className="actions">
                <button className="update" onClick={handleUpdate}>Update</button>
                <button className="delete" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}
export default UserManagementCard;