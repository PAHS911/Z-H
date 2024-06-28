import React, { useState } from "react";

const Catalog = () => {
  const [activeMenu, setActiveMenu] = useState(""); // State to manage active menu

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? "" : menuName); // Toggle active menu
  };

  return (
    <div className="w-1/5 pt-4 px-2 h-full mt-12 fixed flex flex-col bg-blue-300 text-white">
      <div>
        <button
          className="py-2 px-4 mb-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          onClick={() => toggleMenu("electronics")}
        >
          Electronics
        </button>
        <ul
          className={`mt-2 ${
            activeMenu === "electronics" ? "block" : "hidden"
          }`}
        >
          <li className="cursor-pointer">Smartphones & Accessories</li>
          <li className="cursor-pointer">Laptops & Computers</li>
          <li className="cursor-pointer">Audio & Headphones</li>
          <li className="cursor-pointer">Cameras & Photography</li>
          <li className="cursor-pointer">Home Appliances</li>
          <li className="cursor-pointer">Wearable Technology</li>
        </ul>
      </div>
      <div>
        <button
          className="py-2 px-4 mb-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          onClick={() => toggleMenu("fashion")}
        >
          Fashion and Apparel
        </button>
        <ul className={`mt-2 ${activeMenu === "fashion" ? "block" : "hidden"}`}>
          <li className="cursor-pointer">Men's Clothing</li>
          <li className="cursor-pointer">Women's Clothing</li>
          <li className="cursor-pointer">Shoes & Accessories</li>
          <li className="cursor-pointer">Kids' Clothing</li>
          <li className="cursor-pointer">Sportswear</li>
          <li className="cursor-pointer">Luggage & Bags</li>
        </ul>
      </div>
      <div>
        <button
          className="py-2 px-4 mb-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          onClick={() => toggleMenu("home-kitchen")}
        >
          Home and Kitchen
        </button>
        <ul
          className={`mt-2 ${
            activeMenu === "home-kitchen" ? "block" : "hidden"
          }`}
        >
          <li className="cursor-pointer">Furniture</li>
          <li className="cursor-pointer">Kitchen Appliances</li>
          <li className="cursor-pointer">Home Décor</li>
          <li className="cursor-pointer">Bedding & Linens</li>
          <li className="cursor-pointer">Storage & Organization</li>
          <li className="cursor-pointer">Cleaning Supplies</li>
        </ul>
      </div>
      <div>
        <button
          className="py-2 px-4 mb-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          onClick={() => toggleMenu("beauty-care")}
        >
          Beauty and Personal Care
        </button>
        <ul
          className={`mt-2 ${
            activeMenu === "beauty-care" ? "block" : "hidden"
          }`}
        >
          <li className="cursor-pointer">Skincare</li>
          <li className="cursor-pointer">Haircare</li>
          <li className="cursor-pointer">Makeup & Cosmetics</li>
          <li className="cursor-pointer">Personal Hygiene</li>
          <li className="cursor-pointer">Fragrances</li>
          <li className="cursor-pointer">Men's Grooming</li>
        </ul>
      </div>
      <div>
        <button
          className="py-2 px-4 mb-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          onClick={() => toggleMenu("books-media")}
        >
          Books and Media
        </button>
        <ul
          className={`mt-2 ${
            activeMenu === "books-media" ? "block" : "hidden"
          }`}
        >
          <li className="cursor-pointer">Fiction Books</li>
          <li className="cursor-pointer">Non-fiction Books</li>
          <li className="cursor-pointer">Children's Books</li>
          <li className="cursor-pointer">Audiobooks</li>
          <li className="cursor-pointer">Movies & TV Shows</li>
        </ul>
      </div>
      <div>
        <button
          className="py-2 px-4 mb-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          onClick={() => toggleMenu("toys-games")}
        >
          Toys and Games
        </button>
        <ul
          className={`mt-2 ${activeMenu === "toys-games" ? "block" : "hidden"}`}
        >
          <li className="cursor-pointer">Action Figures & Dolls</li>
          <li className="cursor-pointer">Board Games & Puzzles</li>
          <li className="cursor-pointer">Outdoor Play</li>
          <li className="cursor-pointer">Educational Toys</li>
          <li className="cursor-pointer">Video Games & Consoles</li>
        </ul>
      </div>
      <div>
        <button
          className="py-2 px-4 mb-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          onClick={() => toggleMenu("health-wellness")}
        >
          Health and Wellness
        </button>
        <ul
          className={`mt-2 ${
            activeMenu === "health-wellness" ? "block" : "hidden"
          }`}
        >
          <li className="cursor-pointer">Vitamins & Supplements</li>
          <li className="cursor-pointer">Fitness Equipment</li>
          <li className="cursor-pointer">Personal Care</li>
          <li className="cursor-pointer">Sports Nutrition</li>
          <li className="cursor-pointer">Meditation & Relaxation</li>
        </ul>
      </div>
      <div>
        <button
          className="py-2 px-4 mb-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          onClick={() => toggleMenu("auto-tools")}
        >
          Automotive and Tools
        </button>
        <ul
          className={`mt-2 ${activeMenu === "auto-tools" ? "block" : "hidden"}`}
        >
          <li className="cursor-pointer">Car Accessories</li>
          <li className="cursor-pointer">Tools & Equipment</li>
          <li className="cursor-pointer">Motorcycle Gear</li>
          <li className="cursor-pointer">Garage & Storage</li>
          <li className="cursor-pointer">Tires & Wheels</li>
        </ul>
      </div>
      <div>
        <button
          className="py-2 px-4 mb-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          onClick={() => toggleMenu("pet-supplies")}
        >
          Pet Supplies
        </button>
        <ul
          className={`mt-2 ${
            activeMenu === "pet-supplies" ? "block" : "hidden"
          }`}
        >
          <li className="cursor-pointer">Dog Food & Treats</li>
          <li className="cursor-pointer">Cat Food & Treats</li>
          <li className="cursor-pointer">Pet Toys</li>
          <li className="cursor-pointer">Pet Beds & Furniture</li>
          <li className="cursor-pointer">Grooming Supplies</li>
        </ul>
      </div>
      <div>
        <button
          className="py-2 px-4 mb-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          onClick={() => toggleMenu("miscellaneous")}
        >
          Miscellaneous
        </button>
        <ul
          className={`mt-2 ${
            activeMenu === "miscellaneous" ? "block" : "hidden"
          }`}
        >
          <li className="cursor-pointer">Gifts & Novelties</li>
          <li className="cursor-pointer">Party Supplies</li>
          <li className="cursor-pointer">Office Supplies</li>
          <li className="cursor-pointer">Travel Accessories</li>
          <li className="cursor-pointer">Seasonal Decor</li>
        </ul>
      </div>
    </div>
  );
};

export default Catalog;
