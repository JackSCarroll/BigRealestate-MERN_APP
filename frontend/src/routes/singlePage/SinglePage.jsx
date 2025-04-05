import './singlePage.scss';
import Slider from '../../components/slider/Slider';
import Map from '../../components/map/Map';
import { useLoaderData, useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { useContext, useState, useOptimistic, useTransition } from 'react';
import { AuthContext } from '../../context/AuthContext';
import apiRequest from '../../lib/apiRequest';

function SinglePage() {
    const  post = useLoaderData();
    console.log(post);
    const [saved, setSaved] = useState(post.isSaved);
    const [optimisticSaved, setOptimisticSaved] = useOptimistic(saved);
    const [isPending, startTransition] = useTransition();
    const {currentUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSave = async () => {
        if (!currentUser) {
          navigate("/login");
        }
        startTransition(() => {
            setOptimisticSaved((prev) => !prev);
        });
        try {
            const id = post.id;
            await apiRequest.post("/users/save", { postId: id });
            setSaved((prev) => !prev);
        } catch (err) {
          console.log(err);
        }
      };
    return (
        <div className='singlePage'>
            <div className="details">
                <div className="wrapper">
                    <Slider images={post.images} />
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{post.title}</h1>
                                <div className="address">
                                    <img src='/pin.png' alt='' />
                                    <span>{post.address}</span>
                                </div>
                                <div className="price">$ {post.price} </div>
                            </div>
                            <div className="user">
                                <img src={post.user.avatar} alt='' />
                                <span>{post.user.username}</span>
                            </div>
                        </div>
                        <div 
                            className="bottom" 
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.postDetail.desc)}}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="wrapper">
                    <p className="title">General</p>
                    <div className="listVertical">
                        <div className="feature">
                            <img src='/utility.png' alt='' />
                            <div className="featureText">
                                <span>Utilities</span>
                                {
                                    <p> {post.postDetail.utilities === "owner" ? "Owner" : "Tenant"} is responsible</p>
                                }
                            </div>
                        </div>
                        <div className="feature">
                            <img src='/pet.png' alt='' />
                            <div className="featureText">
                                <span>Pet Policy</span>
                                {post.postDetail.pet === "allowed" ? (
                                    <p>Pets allowed</p>
                                ) : (
                                    <p>Pets not allowed</p>
                                )}
                            </div>
                        </div>
                        <div className="feature">
                            <img src='/fee.png' alt='' />
                            <div className="featureText">
                                <span>Bond</span>
                                <p>{post.postDetail.bond}</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Sizes</p>
                    <div className="listHorizontal">
                        <div className="feature">
                            <img src="/size.png" alt='' />
                            <div className="featureText">
                                <span>Size</span>
                                <p>{post.postDetail.size}m^2</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/bed.png" alt='' />
                            <div className="featureText">
                                <span>Bedrooms</span>
                                <p>{post.bedroom}</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/bath.png" alt='' />
                            <div className="featureText">
                                <span>Bathrooms</span>
                                <p>{post.bathroom}</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Nearby Places</p>
                    <div className="listHorizontal">
                    <div className="feature">
                            <img src='/school.png' alt='' />
                            <div className="featureText">
                                <span>School</span>
                                <p>{post.postDetail.school > 999 ? post.postDetail.school/1000 + "km" : post.postDetail.school + "m"} away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src='/bus.png' alt='' />
                            <div className="featureText">
                                <span>Bus Stop</span>
                                <p>{post.postDetail.bus > 999 ? post.postDetail.bus/1000 + "km" : post.postDetail.bus + "m"} away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src='/restaurant.png' alt='' />
                            <div className="featureText">
                                <span>Restaurant</span>
                                <p>{post.postDetail.restaurant > 999 ? post.postDetail.restaurant/1000 + "km" : post.postDetail.restaurant + "m"} away</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Location</p>
                    <div className="mapContainer">
                        <Map items={[post]}/>
                    </div>
                    <div className="buttons">
                        <button>
                            <img src='/chat.png' alt='' />
                            <span>Send an enquiry</span>
                        </button>
                        <button onClick={handleSave} disabled={isPending} className={`saveButton ${optimisticSaved ? "saved" : ""}`}>
                            <img src='/save.png' alt='' />
                            {saved ? "Propery Saved" : "Save property" }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage;