import React from 'react';
import Carousel from "react-material-ui-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AdvertisementImage = () => {
  const stepFourCarousel = [
    {
      url: '/images/soccer1.jpg',
    },
    {
      url: '/images/soccer2.jpg',
    },
    {
      url: '/images/soccer3.jpg',
    },
    {
      url: '/images/soccer4.jpg',
    },
  ];
 

    return (
    <Carousel width= {'100px'}
      height={'100'}
      cycleNavigation={true} 
      >
      {stepFourCarousel.map((content) => (
        <>
          <img src={content.url} width={400}/>
        </>
      ))}
    </Carousel>
    );
}
  
  export default AdvertisementImage;