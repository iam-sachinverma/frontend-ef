import React from "react";
import Hero from "../../components/slider/hero";
import Categories from "../../components/categories/categories";
import Testimonials from "../../components/testimonial/testimonial";
import Footer from "../../components/Footer/footer";
import Recommended from "../../components/HomeSections/Recommended";
import OurPicks from "../../components/HomeSections/OurPicks";
import { ProductWrapper } from "../../components/product/ProductWrapper";
import { ProductSlider }   from "../../components/product/ProductSlider";
import { Product } from "../../components/product/Product";
import Slider from "../../components/carousel/carousel";



const Home = () =>{
    const slideData = [
        {
          index: 0,
          headline: 'Oral Care',
          button: 'Shop now',
          src: 'https://images.unsplash.com/photo-1589365252845-092198ba5334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        },
        {
          index: 1,
          headline: 'Bamboo products',
          button: 'Explore',
          src: 'https://images.unsplash.com/photo-1519056230453-a120bf859c2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
        },
        {
          index: 2,
          headline: 'Sell your products',
          button: 'Know more',
          src: 'https://images.unsplash.com/photo-1632142334452-7efccdbf9a1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
        },
      ]
    return (
        <div>
           {/* <div className="sticky top-0 z-30">
            <Header></Header>
            </div> */}
            <div className="p-1">
            {/* <Hero /> */}
            <Hero/>
            </div>
            <div className="mx-5 my-3 justify-items-center lg:relative lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full lg:flex-grow-1 overflow-x-hidden">
                <span className="text-4xl bg-beige p-4">Categories</span>
            <Slider heading="Example Slider" slides={slideData} />
                <Recommended/>
                <OurPicks/>
            </div>
            <ProductWrapper sort={"newest"}></ProductWrapper>
            <div className="flex flex-col items-center">
            <h1 className="mb-4 text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-black underline">Testimonials</h1>
                <Testimonials></Testimonials>
            </div>   
               <Footer/>  
        </div>
        
    )
}

export default Home;


