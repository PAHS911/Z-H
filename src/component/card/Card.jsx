import React from "react";

const Card = () => {
  return (
    <>
      <div className="w-4/5 pt-16 relative left-[20%]  px-2 grid grid-cols-3 grid-rows-8  gap-4    ">
        <div className="bg-white  rounded-lg overflow-hidden">
          <div className="relative h-60">
            <img
              src="your-image-url"
              alt="Product Image"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-gray-400 text-lg font-semibold mb-2">
              Product Name
            </h2>
            <p className="text-gray-400 mb-4">
              Product description goes here...
            </p>
            <div className="flex items-center mb-4">
              <button className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">
                +
              </button>
              <span className="text-gray-700 mx-2">1</span>
              <button className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">
                -
              </button>
            </div>
            <button className="py-2 text-white px-4 mb-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white  rounded-lg overflow-hidden">
          <div className="relative h-60">
            <img
              src="your-image-url"
              alt="Product Image"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-gray-400 text-lg font-semibold mb-2">
              Product Name
            </h2>
            <p className="text-gray-400 mb-4">
              Product description goes here...
            </p>
            <div className="flex items-center mb-4">
              <button className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">
                +
              </button>
              <span className="text-gray-700 mx-2">1</span>
              <button className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">
                -
              </button>
            </div>
            <button className="py-2 text-white px-4 mb-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white  rounded-lg overflow-hidden">
          <div className="relative h-60">
            <img
              src="your-image-url"
              alt="Product Image"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-gray-400 text-lg font-semibold mb-2">
              Product Name
            </h2>
            <p className="text-gray-400 mb-4">
              Product description goes here...
            </p>
            <div className="flex items-center mb-4">
              <button className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">
                +
              </button>
              <span className="text-gray-700 mx-2">1</span>
              <button className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">
                -
              </button>
            </div>
            <button className="py-2 text-white px-4 mb-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
