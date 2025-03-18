import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import apiRequest from '../../lib/apiRequest';
import { useNavigate } from 'react-router-dom';
import FileUploader from '../../components/fileUploader/fileUploader';
import './profileUpdatePage.scss';

function ProfileUpdatePage(){
  const [error, setError] = useState("");
  const { currentUser, updateUser } = useContext(AuthContext);
  const [avatar, setAvatar] = useState(currentUser.avatar);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username') || currentUser.username;
    const email = formData.get('email') || currentUser.email;
    const {oldPassword, newPassword, confirmPassword} = Object.fromEntries(formData);

    try{
      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        oldPassword,
        newPassword,
        confirmPassword,
      });
      updateUser(res.data);
      navigate('/profile');
    } catch(err){
      console.log(err);
      setError(err.response.data.message);
    }
  }

  return (
      <div className="profileUpdatePage">
          <div className="formContainer">
              <h1>Update Account Info</h1>
              <form onSubmit={handleSubmit}>
                <div className="item">
                  <label htmlFor='username'>Username</label>
                  <input name="username" type="text" placeholder={currentUser.username} />
                </div>
                <div className="item">
                  <label htmlFor='email'>Email</label>
                  <input name="email" type="text" placeholder={currentUser.email} />
                </div>
                <h3>Change Password</h3>
                <div className="item">
                  <input name="oldPassword" type="password" placeholder="Old Password" />
                </div>
                <div className='item'>
                  <input name="newPassword" type="password" placeholder="New Password" />
                </div>
                <div className='item'>
                  <input name="confirmPassword" type="password" placeholder="Confirm New Password" />
                </div>
                <button>Update</button>
                {error && <span className='error'>{error}</span>}
              </form>
          </div>
          <div className="sideContainer">
            <img src={ avatar || "/noavatar.jpg"} alt="" className='avatar'/>
            <FileUploader 
              setAvatar={setAvatar}
              userId={currentUser.id}
            />
          </div>
      </div>
  )
}

export default ProfileUpdatePage;