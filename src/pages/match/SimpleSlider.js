import React from "react";

import Carousel from 'react-material-ui-carousel';

const SimpleSlider = () => {
  var items = [
    {
      imgAddress: "/images/soccer1.jpg"
    },
    {
      imgAddress: "/images/soccer2.jpg"
    },
    {
      imgAddress: "/images/soccer3.jpg"
    }
];

  return (
    <div>
<Carousel indicators={false} swipe={true} >
    {
        items.map(
            (item, i) =>
                <div style={{width: '470px',height:'360px'}} >
                    <img alt="Advertisement" src={item.imgAddress} style={{width: '100%', height: '100%'}} />
                </div>
        )
    }
</Carousel>
    </div>
  );
}
export default SimpleSlider;