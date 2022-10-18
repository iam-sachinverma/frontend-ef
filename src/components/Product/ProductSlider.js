import React from 'react';
import { useState } from "react";
import styled from "styled-components";
import {ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/outline';
import { mobile } from "../../responsive";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

// const images = [{
//     "id": 1,
//     "link": "https://twitter.com/kendalmintcode",
//     "imageUrl": "https://placeimg.com/300/300/any"
//   },
//   {
//     "id": 2,
//     "link": "https://ark-labs.co.uk",
//     "imageUrl": "https://placeimg.com/300/300/animals"
//   },
//   {
//     "id": 3,
//     "link": "https://twitter.com/kendalmintcode",
//     "imageUrl": "https://placeimg.com/300/300/architecture"
//   },
//   {
//     "id": 4,
//     "link": "https://robkendal.co.uk",
//     "imageUrl": "https://placeimg.com/300/300/nature"
//   },
//   {
//     "id": 5,
//     "link": "https://twitter.com/kendalmintcode",
//     "imageUrl": "https://placeimg.com/300/300/people"
//   },
// ]


export const ProductSlider = ({image}) => {
  return (

        <Carousel showThumbs={true} showArrows={true}>
            {image.map((items, id) => (
                <div id={id} className='lg:h-full object-fill'>
                    <img src={items.url}></img>
                </div>
            ))}
        </Carousel>
  )
}
