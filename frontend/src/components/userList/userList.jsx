import UserManagementCard from "../userManagementCard/userManagementCard";
import "./userList.scss";

function UserList({ users = [] }) {
    return (
        <div className="userList">
            {users.map(user => (
                <UserManagementCard key={user.id} user={user}/>
            ))}
        </div>
    );
}
export default UserList;