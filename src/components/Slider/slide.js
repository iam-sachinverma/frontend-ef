
import "./slide.css";

const Slide = ({slides}) => {
  return (
    <>
      {slides?.map((slide, index) => {
        return (       <div className="heroslide" key={index}>
        <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full h-1/3">
          <span>
            <h1 className="text-white text-sm font-bold p-5 underline decoration-indigo-500/30">
              <a href={slide.href}>Shop Now &rarr;</a>
            </h1>
          </span>
        </div>
        <img
          loading="lazy"
          src={slide.image}
          alt=""
          className="w-full h-full object-center object-cover"
        />
      </div>
        );
      })}
    </>
  );
};

export default Slide;
