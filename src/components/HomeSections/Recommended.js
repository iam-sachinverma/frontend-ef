
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

const callouts = [
    {
      id:1,
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: 'https://ik.imagekit.io/de3sec/Toothbrush/Charcoal/Charcoal_Hanging_qyu2PA5gf.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659207614930',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '/',
    },
    { 
      id:2,
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: 'https://ik.imagekit.io/de3sec/Toothbrush/Nano/Nano_Hanging_ehUyIlAdy.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659207618816',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    { 
      id:3,
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
    { 
      id:4,
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://ik.imagekit.io/de3sec/Toothbrush/Green/Green_Profile_AN7R_MTlU.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659207617208',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
    { 
      id:5,
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://ik.imagekit.io/de3sec/Toothbrush/Nano/Nano_Profile_1CajJ99nh.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659207619325',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    }
    ,{ 
      id:6,
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://ik.imagekit.io/de3sec/Toothbrush/Nano/Nano_Bristles_quVxFKb1-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659207618242',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
]

  
export default function Recommended() {
  const products = useSelector((state) => state.product.products);
  const [newProduct, setNewProduct] = useState([]);
  useEffect(() => {
    const newProducts = products.slice().sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
    }).slice(0, 6);
    setNewProduct(newProducts);
    return () => {
      setNewProduct([]);
    }
  }, [products]);
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-2xl font-extrabold text-gray-900">
              Collections
            </h2>

            { newProduct ?
              <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {newProduct.map((product) => (
                <a href={`/product/${product._id}`} key={product._id}>
                  <div className="relative group">
                    <div className="relative rounded-t-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64">
                      <div className="flex w-full bg-transparent items-center justify-center">
                        <img
                          src={product.image[0].url}
                          alt={product.pname+"image ecofriendly eco envioronment products ecofreaky"}
                          className="w-50 h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="p-1 mt-0 mb-6 text-sm text-blue bg-lightgreen rounded-b-md">
                      {product.pname}
                    </h3>
                  </div>
                </a>
              ))}
              </div>
              : <div>
                <h1>loading...</h1>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }