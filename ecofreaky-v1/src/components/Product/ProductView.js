import { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import GlobalButton from '../button/GlobalButton'
import Horizontalimgscroll from '../carousel/horizontalimgscroll';
import { useMediaQuery } from 'react-responsive';
import Footer from '../Footer/footer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; 
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartRedux';


// const product = {
//   name: 'Basic Tee 6-Pack',
//   price: 'Rs. 192',
//   breadcrumbs: [
//     { id: 1, name: 'Men', href: '#' },
//     { id: 2, name: 'Clothing', href: '#' },
//   ],
//   images: [
//     {
//       src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
//       alt: 'Two each of gray, white, and black shirts laying flat.',
//     },
//     {
//       src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
//       alt: 'Model wearing plain black basic tee.',
//     },
//     {
//       src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
//       alt: 'Model wearing plain gray basic tee.',
//     },
//     {
//       src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
//       alt: 'Model wearing plain white basic tee.',
//     },
//   ],
//   colors: [
//     { name: 'Brown', class: 'bg-[#C5C5C5]', selectedClass: 'ring-grey' },
//     { name: 'Yellow', class: 'bg-[#E6AF2E]', selectedClass: 'ring-grey' },
//     { name: 'Black', class: 'bg-[#D7F4D2]', selectedClass: 'ring-grey' },
//   ],
//   sizes: [
//     { name: 'XXS', inStock: false },
//     { name: 'XS', inStock: true },
//     { name: 'S', inStock: true },
//     { name: 'M', inStock: true },
//     { name: 'L', inStock: true },
//     { name: 'XL', inStock: true },
//     { name: '2XL', inStock: true },
//     { name: '3XL', inStock: true },
//   ],
//   description:
//     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   highlights: [
//     'Hand cut and sewn locally',
//     'Dyed with our proprietary colors',
//     'Pre-washed & pre-shrunk',
//     'Ultra-soft 100% cotton',
//   ],
//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// }
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductView() {
  const location = useLocation();
  const id = location.pathname.split('/')[2]
  const [product, setProduct] = useState({});
  const [selectedColor, setSelectedColor] = useState([])
  const [selectedSize, setSelectedSize] = useState([])
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  


  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_BASE_URL + `products/find/${id}`);
        const data = await response.data;
        setProduct(data);
      } catch (error) {
        toast.error("Something Went Wrong!")
      }
    };
    getProduct();
    window.scrollTo(0, 0)
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

    const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, selectedColor, selectedSize }));
    console.log(quantity)
    }

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 980px)'
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 980px)' })

  return (
    <div className="bg-white">

      <div className="p-6 lg:p-2">


        {/* Image gallery */}
        {isTabletOrMobile &&

          <div className="productpageimg mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <Horizontalimgscroll imgs={product?.image}></Horizontalimgscroll>
          </div>
        }



        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-black lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{product?.pname}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">{`₹${product?.pprice}`}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-yellow' : 'text-grey',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-black hover:blue">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <div className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm text-black font-medium">Color</h3>

                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                  <div className="flex items-center space-x-3">
                    {product?.colors?.map((item) => (
                      <RadioGroup.Option
                        key={item._id}
                        value={item.color}
                        className={({ active, checked }) =>
                          classNames(
                            item.selectedClass,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                          )
                        }
                      >
                        {item.color && <span
                          aria-hidden="true"
                          className={`h-8 w-8 border border-black border-opacity-10 rounded-full ${item.color}`}
                        />}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm text-black font-medium">Size</h3>
                  { /*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="text-sm font-small text-black hover:text-green hover:underline">
                    Size guide
                  </a>
                </div>

                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product?.sizes?.map((size) => (
                      <RadioGroup.Option
                        key={size._id}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? ' shadow-sm cursor-pointer'
                              : 'bg-lightblue bg-opacity-40 text-black cursor-not-allowed',
                            active ? 'bg-blue text-white ring-2 ring-grey' : '',
                            'group relative border py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-blue border-2' : 'border-transparent',
                                  'absolute -inset-px pointer-events-none'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="absolute -inset-px border-2 border-blue pointer-events-none"
                              >
                                <svg
                                  className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="h-10 w-20 mt-4">
                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                  <button onClick={() => handleQuantity("dec")} className="bg-transparent text-center border-blue border-2 text-black h-full w-auto cursor-pointer outline-none">
                    <span className="p-2 m-auto text-2xl font-thin">&#8722;</span>
                  </button>
                  <input 
                  type="number" 
                  className="text-center w-10 bg-transparent border-blue font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-black" 
                  name="custom-input-number" 
                  value={quantity}>
                  </input>
                  <button onClick={() => handleQuantity("inc")} className="bg-transparent text-center border-blue border-2 text-black h-full w-auto cursor-pointer outline-none">
                    <span className="p-2 m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>

              <GlobalButton clickEvent={handleClick} twcolor="bg-blue" text="Add to cart" textColor="text-white"></GlobalButton>
            </div>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              {
                isDesktopOrLaptop &&
                <div className="productpageimg max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-2 lg:grid lg:grid-cols-2 lg:gap-x-0">
                  <Horizontalimgscroll imgs={product.image}></Horizontalimgscroll>
                  <div className="ml-8 relative pl-3 h-5/6">
                    <span>

                      <div class="card-name uppercase font-bold bg-lightgreen">Seller name</div>
                      <div class="quote opacity-80 text-blue relative p-2">
                        <svg width="80" height="80" viewBox="0 0 330 307" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M302.258 176.221C320.678 176.221 329.889 185.432 329.889 203.853V278.764C329.889 297.185 320.678 306.395 302.258 306.395H231.031C212.61 306.395 203.399 297.185 203.399 278.764V203.853C203.399 160.871 207.902 123.415 216.908 91.4858C226.323 59.1472 244.539 30.902 271.556 6.75027C280.562 -1.02739 288.135 -2.05076 294.275 3.68014L321.906 29.4692C328.047 35.2001 326.614 42.1591 317.608 50.3461C303.69 62.6266 292.228 80.4334 283.223 103.766C274.626 126.69 270.328 150.842 270.328 176.221H302.258ZM99.629 176.221C118.05 176.221 127.26 185.432 127.26 203.853V278.764C127.26 297.185 118.05 306.395 99.629 306.395H28.402C9.98126 306.395 0.770874 297.185 0.770874 278.764V203.853C0.770874 160.871 5.27373 123.415 14.2794 91.4858C23.6945 59.1472 41.9106 30.902 68.9277 6.75027C77.9335 -1.02739 85.5064 -2.05076 91.6467 3.68014L119.278 29.4692C125.418 35.2001 123.985 42.1591 114.98 50.3461C101.062 62.6266 89.6 80.4334 80.5942 103.766C71.9979 126.69 67.6997 150.842 67.6997 176.221H99.629Z" fill="currentColor"></path>
                        </svg>
                      </div>

                    </span>
                    <h3 className="text-4xl p-2 text-grey uppercase absolute mt-10 top-20 font-light">Highlights</h3>

                    <div className="mt-4 -z-5 absolute bottom-4 p-2 rounded-sm bg-">
                      <ul role="list" className="pl-4 list-disc text-xl space-y-2 text-black">
                        {product?.highlights?.map((highlight) => (
                          <li key={highlight} className="text-black">
                            <span className="p-0">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              }
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-black">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                  {product?.highlights?.map((highlight) => (
                    <li key={highlight} className="text-black">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer></Footer>
    </div>
  )
}
