import Slide from "./slide";

import "./hero-slider.css";

import Slider from "./script";
import { useEffect } from "react";

const HeroSlider = ({slides}) => {
  useEffect(() => {
    Slider();
  }, []);

  return (
    <section
      class="herosection w-full mx-auto justify-items-center justify-center mt-0 mb-5"
      id="section--3"
    >
      <div class="heroslider rounded-sm">
        <Slide slides={slides}></Slide>
        <button className="heroslider__btn slider__btn--left">&larr;</button>
        <button className="heroslider__btn slider__btn--right">&rarr;</button>
        <div className="dots">
          
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
