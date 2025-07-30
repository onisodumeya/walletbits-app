import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


function PriceChart({data, gap, size, title}) {
    return(
        <div className='bg-white text-[#000000B2] shadow-md shadow-gray-200 h-fit w-full p-5 rounded-3xl flex flex-col gap-5'>
        
                                <div className='flex justify-between w-full h-fit'>
                                        <h3 className='text-2xl font-semibold'>{title}</h3>
                                        <select className="rounded-full px-3 py-1 bg-[#D470B7] text-white custom-select">
                                            <option>Today</option>
                                            <option>This Week</option>
                                            <option>This Month</option>
                                            <option>This Year</option>
                                        </select>
                                </div>
                                
                                <div className='flex gap-5'>
                                    <div className='flex gap-2 items-center'>
                                        <div className='h-2.5 w-2.5 bg-[#D470B7] rounded-full'></div>
                                        <h4 className='font-semibold text-lg'>Income</h4>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                            <div className='h-2.5 w-2.5 bg-[#2F4F7F] rounded-full'></div>
                                        <h4 className='font-semibold text-lg'>Expenses</h4>
                                    </div>
                                </div>
        
                                <ResponsiveContainer className='w-full' height={300}>
                                    <BarChart data={data} margin={{ top: 0, right: 0, left: -25, bottom: 0 }} barGap={gap} barSize={size}>
                                        <XAxis dataKey="month" />
                                        <YAxis tickFormatter={(value) => `$${value}`} />
                                        <Tooltip formatter={(value) => `$${value}`} />
                                        
                                        <Bar dataKey="income" fill="#D470B7" radius={[20, 20, 0, 0]} />
                                        <Bar dataKey="expense" fill="#2F4F7F" radius={[20, 20, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
        
                            </div>
    )
}

export default PriceChart