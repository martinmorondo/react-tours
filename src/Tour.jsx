import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Tour = ({ id, images, image, info, name, price, removeTour }) => {

    const [readMore, setReadMore] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <article className='single-tour'>
             <Slider {...settings}>
        {images.map((image, id) => (
          <div key={id}>
            <img src={image} alt={name} />
          </div>
        ))}
      </Slider>
            <footer>

                <div className='tour-info'>
                    <h4>{name}</h4>
                    <h4 className='tour-price'>${price}</h4>
                </div>

                <p>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {
                            readMore ? 
                            'show less' 
                            : 'read more'
                        }
                    </button>
                </p>

                <button className='delete-btn' onClick={() => removeTour(id)}>
                    Not interested.
                </button>
            </footer>
        </article>
    );
}

export default Tour;
