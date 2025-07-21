import { IoClose } from "react-icons/io5"

const Filter = ({toggleFilter, searchQuery, setSearchQuery, resetFilter}) => {
  return (
    <div className='bg-white space-y-10 px-3 py-2 rounded-xl [box-shadow:6px_6px_10px_0px_#00000040]' >
      <header className='flex justify-between items-center space-x-3'>
        <p className="font-semibold text-xl">Filter Transactions</p>
        <div onClick={toggleFilter} className='w-[40px] h-[40px] rounded-[50%] cursor-pointer bg-[#3333331A] flex justify-center items-center'>
            <IoClose color="#656977" size={20} />
        </div>
      </header>
      <main className="space-y-5">
        <div className="flex justify-between space-x-3 items-center">
            <div>
                <p className="font-semibold text-md">Data Range:</p>
            </div>
        <select name="" id="" className="border-1 border-[#00000033] w-[250px] cursor-pointer py-1 px-2">
            <option value="Last 30 day">Last 30 days</option>   
            <option value="Last 15 days">Last 15 days</option>
            <option value="Last 5 days">Last 5 days</option>
        </select>
        </div>
        <div className="flex justify-between space-x-3 items-center">
            <div>
            <p className="font-semibold text-md">Search Id:</p>
        </div>
        <input type="text" placeholder='Transaction ID...' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className="border-1 border-[#00000033]  w-[280px] py-1 px-2" />
        </div>
        <div className="flex justify-center items-center gap-2">
            <button onClick={toggleFilter} className="bg-[#D470B7] cursor-pointer min-w-[100px] border-1 border-[#D470B7] p-[12px] text-md text-[white] font-semibold rounded-2xl ">Apply filter</button>
            <button onClick={resetFilter} className="border-[#00000033] cursor-pointer min-w-[100px] border-1 py-[10px] px-[12px] text-md text-[#000000] font-semibold rounded-2xl ">
                Reset
            </button>
        </div>
      </main>
    </div>
  )
}

export default Filter
