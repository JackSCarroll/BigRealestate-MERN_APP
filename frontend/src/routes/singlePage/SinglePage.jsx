import './singlePage.scss';
import Slider from '../../components/slider/Slider';
import Map from '../../components/map/Map';
import { singlePostData, userData } from '../../lib/dummydata';

function SinglePage() {
    return (
        <div className='singlePage'>
            <div className="details">
                <div className="wrapper">
                    <Slider images={singlePostData.images} />
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{singlePostData.title}</h1>
                                <div className="address">
                                    <img src='/pin.png' alt='' />
                                    <span>{singlePostData.address}</span>
                                </div>
                                <div className="price">$ {singlePostData.price} </div>
                            </div>
                            <div className="user">
                                <img src={userData.img} alt='' />
                                <span>{userData.name}</span>
                            </div>
                        </div>
                        <div className="bottom">
                            {singlePostData.description}
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
                                <p>Renter is responsible</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src='/pet.png' alt='' />
                            <div className="featureText">
                                <span>Pet Policy</span>
                                <p>Pets allowed</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src='/fee.png' alt='' />
                            <div className="featureText">
                                <span>Bond</span>
                                <p>Bond is one month&apos;s rent</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Sizes</p>
                    <div className="listHorizontal">
                        <div className="feature">
                            <img src="/size.png" alt='' />
                            <div className="featureText">
                                <span>Size</span>
                                <p>{singlePostData.size}m^2</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/bed.png" alt='' />
                            <div className="featureText">
                                <span>Bedrooms</span>
                                <p>{singlePostData.bedRooms}</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/bath.png" alt='' />
                            <div className="featureText">
                                <span>Bathrooms</span>
                                <p>{singlePostData.bathroom}</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Nearby Places</p>
                    <div className="listHorizontal">
                    <div className="feature">
                            <img src='/school.png' alt='' />
                            <div className="featureText">
                                <span>School</span>
                                <p>{singlePostData.school}</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src='/bus.png' alt='' />
                            <div className="featureText">
                                <span>Bus Stop</span>
                                <p>{singlePostData.bus}</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src='/restaurant.png' alt='' />
                            <div className="featureText">
                                <span>Restaurant</span>
                                <p>{singlePostData.restaurant}</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Location</p>
                    <div className="mapContainer">
                        <Map items={[singlePostData]}/>
                    </div>
                    <div className="buttons">
                        <button>
                            <img src='/chat.png' alt='' />
                            <span>Send an enquiry</span>
                        </button>
                        <button>
                            <img src='/save.png' alt='' />
                            <span>Save property</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage;