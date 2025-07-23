import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { FaBell } from "react-icons/fa";


function Headbar({ header, subHeader }) {
    return (
        <div className="justify-between gap-4 flex items-center h-fit w-full bg-gray-100">
            <div className="flex-col h-fit">
                <h1 className="font-bold text-2xl text-black">{header}</h1>
                {subHeader && <p className="text-gray-500">{subHeader}</p>}
            </div>
            <div className="flex w-2/5 items-center justify-between">
                <FaBell className="text-2xl" />
                <div className="relative w-3/4">
                    <FiSearch className="absolute ml-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
                    <input
                        type="text"
                        name="fake-email"
                        placeholder="Search"
                        autoComplete="off"
                        className="w-full pl-10 pr-4 py-2 border-[1.5px] rounded-xl bg-gray-100 border-gray-500"
                    />
                </div>
                <div className="rounded-full h-10 w-10 border border-gray-500"></div>
            </div>
        </div>
    );
}

export default Headbar;
