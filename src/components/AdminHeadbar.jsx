import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { FaBell } from "react-icons/fa";

function Adminheadbar({ profile, Name }) {
  return (
    <div className=" flex justify-between items-center h-1/7 bg-white -m-4">
      
      <div className="w-[40%] p-4 flex items-center border rounded-full h-2/4 border-gray-300 -mt-2 ml-4">
        <FiSearch className="text-xl text-gray-500 ml-2" />
        <input
          type="text"
          placeholder="Search"
          autoComplete="off"
          className="w-full p-2 outline-none "
        />
      </div>

      
      <div className="flex w-[30%] items-center gap-4 ml-4 -mt-2">
        <FaBell className="text-xl text-gray-700 hover:bg-pink-400" />
        <div className=" flex text-white font-bold bg-gray-200 w-[80%] rounded-full">
          {profile || <CgProfile className="text-2xl w-12 h-12 bg-gray-300 rounded-full" />}
          <span className="font-medium">{Name}</span>
        </div>
        
      </div>
    </div>
  );
}

export default Adminheadbar;
