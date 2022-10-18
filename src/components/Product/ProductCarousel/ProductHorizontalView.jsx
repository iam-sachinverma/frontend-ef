import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import ProductCard from "./ProductCard";

import "./productCarousel.css";
import { publicRequest } from "../../../requestMethods";

const ProductHorizontalView = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        console.log(category);
        const response = await publicRequest.get(
          !category ? `products` : `products?cat=${category}`
        );
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [category]);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isMdScreen = useMediaQuery({ query: "(min-width: 768px)" });

  let totalSlide = () => {
    if (isBigScreen) return 6;
    else if (isDesktopOrLaptop) return 4;
    else if (isMdScreen) return 3;
    else return 1;
  };

  const value = totalSlide();
  // console.log(value);

  return (
    <CarouselProvider
      visibleSlides={`${value}`}
      totalSlides={products.length}
      step={1}
      naturalSlideWidth={400}
      naturalSlideHeight={500}
    >
      <div className="bg-lightgreen/40">
        <div className="mx-auto my-auto max-w-2xl py-8 h-full px-1 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 relative">
          <h2 className="mb-4 ml-4 text-black underline underline-offset-4">
            New Arrivals &rarr;
          </h2>
          <Slider className="mx-10">
            {products &&
              products.map((product) => (
                <Slide index={product._id} key={product._id}>
                  <ProductCard product={product}></ProductCard>
                </Slide>
              ))}
          </Slider>
          <ButtonBack className="buttonBack w-11 h-11 ml-2 shrink-0 grow-0 rounded-full bg-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </ButtonBack>
          <ButtonNext className="buttonNext w-11 h-11 shrink-0 grow-0 mr-2 rounded-full bg-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </ButtonNext>
        </div>
      </div>
    </CarouselProvider>
  );
};

export default ProductHorizontalView;
