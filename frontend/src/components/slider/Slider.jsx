import './Slider.scss'
import { useState } from 'react'

function Slider({images}) {
    const [imageIndex, setImageIndex] = useState(null);

    const changeSlide = (direction) => {
        if (direction === 'left') {
            setImageIndex(imageIndex !== 0 ? imageIndex - 1 : images.length - 1);
        } else if (direction === 'right') {
            setImageIndex(imageIndex !== images.length - 1 ? imageIndex + 1 : 0);
        }
    }
    return (
        <div className="slider">
            {imageIndex !== null && (
                <div className="fullSlider">
                    <div className="arrow">
                        <img src="/arrow.png" alt="" onClick={()=> changeSlide('left')}/>
                    </div>
                    <div className="imgContainer">
                        <img src={images[imageIndex]} alt="" />
                    </div>
                    <div className="arrow">
                        <img src="/arrow.png" className="right" alt="" onClick={()=> changeSlide('right')}/>
                    </div>
                    <div className="close" onClick={()=> setImageIndex(null)}>X</div>
                </div>
            )}
            <div className="bigImage">
                <img src={images[0]} alt="" onClick={()=> setImageIndex(0)}/>
            </div>
            <div className="smallImages">
                {images.slice(1).map((image, index)=>(
                    <img src={image} key={index} alt="" onClick={()=> setImageIndex(index+1)}/>
                ))}
            </div>
        </div>
    )
}

export default Slider;