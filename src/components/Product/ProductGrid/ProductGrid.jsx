import { useState } from "react";
import { ArrowCircleRightIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import ListCard from "./ListCard";

function ProductGrid({products}) {
  const [flexType, setFlexType] = useState("flex-col");

  return (
    <>
      {/* <div className="flex justify-end items-center w-full px-4 py-6">
        <button
          onClick={() => {
            setFlexType("flex-row");
          }}
          class="hover:text-gray-500 text-gray-600 bg-gray-100 py-3.5 px-3 mx-5 rounded-sm flex flex-row justify-center items-center space-x-3"
        >
          <svg
            class="fill-stroke"
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 14.6452V9.33875"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 6.30645V1"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 14.6452V7.82263"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 4.79032V1"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 14.6452V10.8549"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 7.82258V1"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 9.33875H7"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 4.79028H15"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 10.8549H23"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p class="hidden md:block text-sm leading-none">List</p>
        </button>

        <button
          onClick={() => {
            setFlexType("flex-col");
          }}
          class="hover:text-gray-500 text-gray-600 bg-gray-100 py-3.5 px-3 rounded-sm flex flex-row justify-center items-center space-x-3"
        >
          <svg
            class="fill-stroke"
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 14.6452V9.33875"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 6.30645V1"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 14.6452V7.82263"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 4.79032V1"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 14.6452V10.8549"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 7.82258V1"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 9.33875H7"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 4.79028H15"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 10.8549H23"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p class="hidden md:block text-sm leading-none">Grid</p>
        </button>
      </div> */}
      <section className="w-full">
        {/* <div
          className={
            flexType === "flex-col"
              ? `grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-y-4 gap-x-4`
              : `grid grid-cols-1 gap-y-4 gap-x-4`
          }
        >
          {products.map((product) => (
            <ListCard
              flexType={flexType}
              productData={product}
              key={product._id}
            ></ListCard>
          ))}
        </div> */}
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-1 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* <h2 className="mb-4 ml-4 text-black underline underline-offset-4">New Arrivals &rarr;</h2> */}

            <div className="grid grid-cols-2 border border-slate-100 rounded-md p-2 gap-y-6 gap-x-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <a
                  key={product._id}
                  href={`/product/${product._id}`}
                  className="group border border-transparent rounded-md shadow-sm bg-beige overflow-hidden"
                >
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={product.image[0].url}
                      alt={product.pname}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-items-center">
                    <h3 className="mt-4 text-xs text-gray-700">
                      {product.pname}
                    </h3>
                    <p className="mt-1 text-xl text-blue font-medium text-gray-900">
                      ₹{product.pprice}
                    </p>
                    {product.aprice && <p className="mt-1 text-xs line-through text-blue font-medium text-gray-900">
                      ₹{product.aprice}
                    </p>}
                    <span className="text-black bg-white p-2 items-center justify-center w-full text-sm inline-flex">
                      <small className="uppercase text-sm text-blue">
                        View Product
                      </small>
                      <span>
                        <ArrowCircleRightIcon className="h-4 w-4 mx-1 mb-1 text-blue"></ArrowCircleRightIcon>
                      </span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductGrid;
