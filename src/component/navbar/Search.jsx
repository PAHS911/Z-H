import { useState } from "react";

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
    <>
      

      <div className="flex items-center">
        <input
          onKeyDown={handleKey}
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
    </>
  );
};

export default Search;
