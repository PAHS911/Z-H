import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
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

  const handleKey = (event) => {
    if (event.key === "Enter") {
      handleAdd();
      console.log("from enter! ");
    }
  };

  return (
    <div className="flex items-center">
      <div className="relative">
        <input
          onKeyDown={handleKey}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search..."
          className="w-96 px-3 py-1 pl-10 rounded-lg outline-none bg-white text-gray-800"
        />
        <FaSearch className="absolute left-3 top-2 text-gray-500" />
      </div>
      {/* <button
        onClick={handleAdd}
        type="button"
        className="px-4 py-1 bg-white text-blue-500 rounded-lg hover:bg-blue-200 transition-colors duration-300"
      >
        Add
      </button> */}
    </div>
  );
};

export default Search;
