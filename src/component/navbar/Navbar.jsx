import Search from "./Search";
import Logsign from "./Logsign";

const Navbar = () => {
  return (
    <div className="px-4 py-2 bg-blue-500 flex justify-between items-center">
      <div className="flex items-center">
        <div className="text-white font-bold text-lg mr-2">Logo</div>
        <div className="text-white text-lg">Z & H</div>
      </div>

      <Search />

      <Logsign />
    </div>
  );
};

export default Navbar;
