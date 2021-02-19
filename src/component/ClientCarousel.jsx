import React from 'react';
import Carousel from 'react-elastic-carousel';
import CarouselCard from './CarouselCard';



const ClientCarousel =()=> {

    // breakPoints handles the number of cards to show depending on the screen size
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4}
    ]
    return (
        <div>
            <Carousel breakPoints = {breakPoints}>
                {/* we pass the props number, here and place whatever we want in it */}
                <CarouselCard number="Zenith Bank" />
                <CarouselCard number="NNPC" />
                <CarouselCard number="GtBank" />
                <CarouselCard number="4" />
                <CarouselCard number="5" />
                <CarouselCard number="6" />
                <CarouselCard number="7" />
                <CarouselCard number="8" />
            </Carousel>
        </div>
    )
}
export default ClientCarousel;