import { useContext, useState, useTransition } from 'react';
import './Card.scss';
import { Link, Navigate } from 'react-router-dom';
import { useOptimistic } from 'react';
import { AuthContext } from '../../context/AuthContext';
import apiRequest from '../../lib/apiRequest';

function Card({item, isSaved}) {
    const [saved, setSaved] = useState(isSaved);
    const [optimisticSaved, setOptimisticSaved] = useOptimistic(saved);
    const [isPending, startTransition] = useTransition();
    const {currentUser} = useContext(AuthContext);

    const handleSave = async () => {
        if (!currentUser) {
            Navigate("/login");
        }
        startTransition(() => {
            setOptimisticSaved((prev) => !prev);
        });
        try {
            const id = item.id;
            await apiRequest.post("/users/save", { postId: id });
            setSaved((prev) => !prev);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='card'>
            <Link className='imageContainer' to={`/${item.id}`}>
                <img src={item.images[0]} alt=""/>
            </Link>
            <div className="textContainer">
                <h2 className='title'>
                    <Link to={`/${item.id}`}>{item.title}</Link>
                </h2>
                <p className='address'>
                    <img src="/pin.png" alt="" />
                    <span>{item.address}, {item.city}</span>
                </p>
                <p className='price'>$ {item.price}</p>
                <div className="bottom">
                    <div className="features">
                        <div className="feature">
                            <img src="/bed.png" alt="" />
                            <span>{item.bedroom} Bedrooms</span>
                        </div>
                        <div className="feature">
                            <img src="/bath.png" alt="" />
                            <span>{item.bathroom} Bathrooms</span>
                        </div>
                    </div>
                    <div className="icons">
                        <div className="icon">
                            <img src="/chat.png" alt="" />
                        </div>
                        <div className="icon" disabled={isPending} onClick={handleSave} style={{
                            background: saved? "#fbb03b" : "white",
                        }}>
                            <img src="/save.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;