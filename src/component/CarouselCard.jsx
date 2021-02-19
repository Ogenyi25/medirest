import React from 'react';

//the props number handles what is displayed in each carousel card
const CarouselCard = ({number}) => {
    return (
        <div className="carouselcard">{ number }</div>
    )
}
export default CarouselCard;