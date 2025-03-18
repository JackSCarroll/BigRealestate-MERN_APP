import { useContext, useState } from 'react';
import './fileUploader.scss';
import apiRequest from '../../lib/apiRequest';
import { AuthContext } from '../../context/AuthContext';

export default function FileUploader({setAvatar, userId}) {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState("");
    const { currentUser, updateUser } = useContext(AuthContext);

    function handleFileChange(e) {
        if(e.target.files) {
            // Single file input
            setFile(e.target.files[0]);
        }
    }

    async function handleFileUpload() {
        if (!file) return;

        setStatus('uploading');
        const formData = new FormData();
        formData.append('avatar', file);

        try {
            setStatus('uploading');
            const res = await apiRequest.post(`/upload/uploadSingle/${userId}`, formData);
            console.log(res);
            setStatus('idle');
            setAvatar(res.data.file);

            // Update user's avatar field in database
            const res2 = await apiRequest.put(`/users/${userId}`, {avatar: res.data.file});
            updateUser(res2.data);
            setFile(null);
            setError(res.data.message);
        } catch(e) {
            console.log(e);
            setStatus('idle');
            setFile(null);
            setError(e.response.data.message);
        }
    }
    return (
    <div className="fileUploader">
        <label>Upload a file</label>
        <br/>
        <input type="file" onChange={handleFileChange}/>
        {file && (
            <div className="fileInfo">
                <p>Filename: {file.name}</p>
                <p>Filetype: {file.type}</p>
                <p>Size in bytes: {(file.size / 1024).toFixed(2)} KB</p>
            </div>
        )}
        {file && status != 'uploading' && (
            <button onClick={handleFileUpload}>Upload</button>
        )}
        {status === 'uploading' && <p>Uploading...</p>}
        {error && <span className='error'>{error}</span>}
    </div>
    );
}