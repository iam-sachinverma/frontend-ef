import styled from "styled-components";
// import { ShoppingBagIcon, InformationCircleIcon, HeartIcon } from '@heroicons/react/outline'
// import { Link } from "react-router-dom";
import Loader from "../loader/loader";

// const Info = styled.div`
//   opacity: 0;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background-color: rgba(0, 0, 0, 0.2);
//   z-index: 3;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.5s ease;
//   cursor: pointer;
// `;

// const Container = styled.div`
//   flex: 1;
//   margin: 5px;
//   min-width: 280px;
//   height: 350px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   &:hover ${Info}{
//     opacity: 1;
//   }
// `;

// const Circle = styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   background-color: white;
//   position: absolute;
// `;

// const Image = styled.img`
//   height: 75%;
//   z-index: 2;
// `;

// const Icon = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color: rgba(0, 0, 0, 0.2);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 10px;
//   transition: all 0.5s ease;
//   &:hover {
//     background-color: #e9f5f5;
//     transform: scale(1.1);
//   }
// `;

const Product = ({ products }) => {
  const arr = products.image.map(item => item.url);
  // console.log(arr[0]);
  // return (
  //   <Container classNameName="border">
  //     <Circle />
  //     <Image src={arr[0]} />
  //     <Info>
  //       <Icon classNameName="backdrop-blur-sm opacity-60">
  //         <Link to=''>
  //           <ShoppingBagIcon classNameName="text-black w-7 opacity-80 hover:text-brown" />
  //         </Link>
  //       </Icon>
  //       <Icon classNameName="backdrop-blur-sm opacity-60">
  //         <Link to={`/product/${products._id}`}>
  //           <InformationCircleIcon classNameName="text-black w-7 opacity-80 hover:text-brown" />
  //         </Link>
  //       </Icon>
  //     </Info>
  //   </Container>
  // );
  return (
    <section>
      <div className="max-w-screen px-4 py-12 mx-auto sm:px-6 lg:px-20">
        {products ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
            <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-12">
              {arr.map((item, index) => (
                <a
                  href={`/product/${products._id}`}
                  className="block"
                  key={index}
                >
                  <div className="aspect-w-1 aspect-h-1 bg-lightgreen bg-opacity-30 rounded-md">
                    <img
                      loading="lazy"
                      alt={products.pname}
                      className="object-cover rounded"
                      src={item}
                    />
                  </div>
                </a>
              ))}
            </div>
            <div className="flex items-center p-8 bg-gray-100 rounded">
              <div className="mx-auto text-center lg:text-left">
                <h2 className="text-2xl px-4 rounded-md font-bold text-blue bg-lightgreen">
                  {products.pname}
                </h2>

                <p className="mt-4 text-md text-gray-700 max-w-[45ch]">
                  {products.pdesc
                    ? products.pdesc
                    : "Ecofriendly Products are made using natural materials such as bamboo, cotton, linen, hemp, wool, silk, corn, sugarcane, rice husk, jute, etc. They are 100% biodegradable and can be recycled easily. These products have been certified by Green Seal, an independent third party certification organization."}
                </p>

                <a
                  href={`/product/${products._id}`}
                  className="inline-block px-6 py-3 mt-6 text-sm uppercase text-green bg-blue rounded"
                >
                  View the Product
                </a>
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
};

export default Product;