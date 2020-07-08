import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = () => {
  return (
    <div>
      {/* <Carousel showArrows={true} onChange={() => 'onChange'} onClickItem={() => 'onClickItem'} onClickThumb={() => 'onClickThumb'}>
     
      </Carousel> */}
      <Carousel showThumbs={false} infiniteLoop={true}>
        <div style={{ height: '400px', color: '#fff' }}>this is slide 1</div>
        <div style={{ height: '400px', color: '#fff' }}>this is slide 2</div>
        <div style={{ height: '400px', color: '#fff' }}>this is slide 3</div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
