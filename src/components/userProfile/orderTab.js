const OrderTab = ({ orders }) => {
  return (
    <div className="tab-content flex flex-col gap-5 bg-white rounded drop-shadow-md h-full p-5">
      <span className="block font-bold text-xl">My Orders</span>
      {/* Orders Filters */}
      {/* <div className="flex flex-wrap justify-between gap-5">
        <form className="search" action="#">
          <div className="flex overflow-hidden h-[40px] rounded-[50px] bg-gray-100">
            <input
              className="search bg-transparent w-full border-none focus:ring-0 focus:ring-transparent focus:border-none py-[5px] pl-5 text-slate-600"
              type="search"
              placeholder="Search..."
            />
            <button className="btn-search text-slate-600 px-3" type="submit">
              <i className="bi bi-search text-xl flex"></i>
            </button>
          </div>
        </form>
        <ul className="order-mix flex flex-wrap">
          <li
            className="control relative cursor-pointer py-2 px-3 rounded"
            data-filter=".mix-main"
          >
            <span>All</span>
          </li>
          <li
            className="control relative flex items-center gap-2 cursor-pointer py-2 px-3 rounded"
            data-filter=".mix-processing"
          >
            <i className="bi bi-clock-history text-yellow-300"></i>
            <span>Processing</span>
          </li>
          <li
            className="control relative flex items-center gap-2 cursor-pointer py-2 px-3 rounded"
            data-filter=".mix-completed"
          >
            <i className="bi bi-check-circle text-green-300"></i>
            <span>Completed</span>
          </li>
          <li
            className="control relative flex items-center gap-2 cursor-pointer py-2 px-3 rounded"
            data-filter=".mix-cancelled"
          >
            <i className="bi bi-x-circle text-red-300"></i>
            <span>Cancelled </span>
          </li>
        </ul>
      </div> */}
      <div className="mix-elements mix-all grid grid-cols-12">
        {/* Adjust mix- class as per order status mix-processing mix-completed mix-cancelled*/}

        {Object.keys(orders).length !== 0 ? (
          orders?.map((order) => (
            <div
              className="col-span-12 mix mix-main mix-processing"
              key={order._id}
            >
              {order.products.map((product, index) => (
                <a
                  key={index}
                  className="order-product flex md:flex-row justify-start items-start md:items-center rounded-md border border-slate-200 shadow-sm w-full"
                >
                  <div className="w-40 md:w-32">
                    <img
                      className="hidden md:block"
                      src={product.image}
                      alt="prod_image"
                    />
                    <img
                      className="md:hidden "
                      src={product.image}
                      alt="girl-in-red-dress"
                    />
                  </div>
                  <div className="flex justify-start md:justify-between items-start md:items-center  flex-col md:flex-row w-full p-4 md:px-8">
                    <div className="flex flex-col md:flex-shrink-0  justify-start items-start">
                      <small className="text-gray-600 pb-2">
                        Order id: {order._id}
                      </small>
                      <h3 className="text-lg md:text-xl  w-full font-semibold leading-6 md:leading-5  text-gray-800">
                        {product.pname}
                      </h3>
                      <div className="flex flex-row justify-start  space-x-4 md:space-x-6 items-start mt-4 ">
                        <p className="text-sm leading-none text-gray-600">
                          Size:{" "}
                          <span className="text-gray-800">
                            {" "}
                            {product.selectedSize?.name}
                          </span>
                        </p>
                        <p className="text-sm leading-none text-gray-600">
                          Quantity:{" "}
                          <span className="text-gray-800">
                            {product.quantity}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex mt-4 md:mt-0 md:justify-end items-center w-full ">
                      <p className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">
                        ₹{product.pprice}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
              <div className="flex bg-lightgreen/70 border border-green/40 rounded-b-md p-1 md:justify-end items-center w-full ">
                <p className="text-xl lg:text-xl uppercase font-light leading-5 lg:leading-6 text-gray-800">
                  {order.status}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-12 text-center w-full">
            <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">
              You have no orders
            </h1>
          </div>
        )}
      </div>

      {/* <button className="mx-auto border bg-gray-100 py-2 px-3 rounded transition-all-300 hover:bg-gray-200">
        Show More
      </button> */}

      {/* <a
        className="btn-open-modal block relative p-4 transition-all-300 hover:bg-gray-100"
        href="#"
        data-target=".order-details-modal"
      >
        <div className="flex flex-col sm:flex-row gap-5 pointer-events-none">
          <div className="relative">
            <div className="border bg-white rounded-lg h-[80px] w-[80px] min-w-[80px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="img/product/prod-1.jpg"
                alt="product"
              />
            </div>
            <div className="absolute -top-2 -right-2 border bg-white rounded-lg h-[30px] w-[30px] min-w-[30px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="img/cards/mousepad.jpg"
                alt="product"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <span className="font-semibold text-lg clamp-2 break-all">
              Ryzen 5 3600x
              <span>, Mousepad Hyperx Fury S Pro Speed </span>
            </span>
            <div className="flex items-center gap-1 text-xs my-1">
              <i className="bi bi-clock flex"></i>
              <span>08/01/2022</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-light">Transaction. ID</span>
              <span className="text-sm font-semibold">#1998ARG</span>
            </div>
          </div>
          <div className="flex flex-col mt-auto sm:ml-auto">
            <span className="text-xs font-light whitespace-nowrap">
              Total Payment
            </span>
            <span className="text-sm font-semibold">$37.00</span>
          </div>
          <span className="absolute top-0 right-0 text-sm bg-yellow-200 text-yellow-500 m-2 py-px px-2 rounded-xl">
            {order.status}
          </span>
        </div>
      </a> */}
    </div>
  );
};

export default OrderTab;
