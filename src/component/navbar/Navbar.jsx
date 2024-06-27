import { useState } from "react";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [addSearch, setAddSearch] = useState([]);

  const handleSearch = () => {
    setSearch(search.trim() !== "");
    setSearch("");
  };

  const handleAdd = () => {
    if (search.trim() !== "") {
      setAddSearch([...addSearch, search]);
      handleSearch();
      console.log("from search! ");
    }
  };

  return (
    <div className="px-4 py-2 bg-blue-500 flex justify-between items-center">
      <div className="flex items-center">
        <div className="text-white font-bold text-lg mr-2">Logo</div>
        <div className="text-white text-lg">Z & H</div>
      </div>

      <div className="flex items-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search..."
          className="px-3 py-1 mr-2 rounded-lg outline-none bg-white text-gray-800"
        />
        <button
          onClick={handleAdd}
          type="button"
          className="px-4 py-1 bg-white text-blue-500 rounded-lg hover:bg-blue-200 transition-colors duration-300"
        >
          Add
        </button>
      </div>

      <div className="flex items-center">
        <div className="text-white mr-4">Login/SignUp</div>
        <MdOutlineDarkMode className="text-white text-2xl cursor-pointer" />
        <MdDarkMode className="text-white text-2xl cursor-pointer hidden" />
      </div>
    </div>
  );
};

export default Navbar;
