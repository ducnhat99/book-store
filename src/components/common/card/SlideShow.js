import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../../../styles/slideshow.css'
import slide1 from '../../../images/slidebar1.png'
import slide2 from '../../../images/slidebar2.png'
import slide3 from '../../../images/slidebar3.png'
import slide4 from '../../../images/slidebar4.png'

const slideImages = [
    slide1,
    slide2,
    slide3,
    slide4
];

const SlideShow = () => {
    return (
        <div>
            <Slide easing="ease" className="slide">
                {slideImages.map((item) => {
                    return <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${item})` }}>
                        </div>
                    </div>
                })}

            </Slide>
        </div>
    )
}

export default SlideShow