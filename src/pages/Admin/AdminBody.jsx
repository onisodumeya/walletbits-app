import React from 'react'
import UsersTable from '../../components/UsersTable'
import { GoArrowUpRight } from 'react-icons/go'
import { TiArrowSortedUp } from 'react-icons/ti'
import { BiSolidUser } from 'react-icons/bi'

const AdminBody = () => {
  const CardData = {
    users: {
      icon: <BiSolidUser size={20} />,
      title: "Users & Activities",
      change: 5.4,
      description: "Monitor how users interact with the platform",
      stats: [
        { label: "Registered Users", value: "55,650", change: "+46%" },
        { label: "Active Users", value: "805", change: "+50%" }
      ],
      chart: [
        { label: "July users login percentage", value: "65%", color: "#D470B7" },
        { label: "July platform Feature Usage", value: "90%", color: "#5E52CF" }
      ]
    },
    transactions: {
      icon: <BiSolidUser size={20} />,
      title: "Transactions",
      change: 6.5,
      description: "Track transactions analysis across the platform",
      stats: [
        { label: "Processed transaction today", value: "210", change: "+66%" },
        { label: "Total traded amount today", value: "$43,000", change: "+75%" }
      ],
      chart: [
        { label: "Successful Transactions", value: "70%", color: "#17B21C" },
        { label: "Pending Transactions", value: "40%", color: "#CDDB61" },
        { label: "Failed Transactions", value: "10%", color: "#ED513C" }
      ]
    }
  }

  return (
    <div className='w-full bg-[#F2F2F2] px-9 overflow-y-auto'>
      <header className='pt-2.5 space-y-3'>
        <p className='text-xl font-semibold text-[#00000080]'>Welcome back, Admin Moses</p>
        <h2 className='font-bold text-3xl'>Users Dashboard Overview</h2>
      </header>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 my-7'>
        {
          Object.entries(CardData).map(([key, e]) => (
            <section key={key} className='p-4 rounded-xl bg-white space-y-2.5'>
              <div className='flex justify-between items-center'>
                <div className='flex flex-col space-y-1'>
                  <div className='flex space-x-3 items-center'>
                    {e.icon && e.icon}
                    <p className='font-semibold text-[18px]'>{e.title}</p>
                    <div className='flex gap-1'>
                      <div className='bg-[#17B21C] p-1 rounded-full w-max'>
                        <TiArrowSortedUp color='white' />
                      </div>
                      <p className='text-[#17B21C]'>{e.change}%</p>
                    </div>
                  </div>
                  <p className='text-sm'>{e.description}</p>
                </div>
                <div className='p-2 w-max h-max rounded-sm bg-[#F2F2F2]'>
                  <GoArrowUpRight />
                </div>
              </div>

              <div className='min-h-[280px] rounded-xl w-full py-6 px-9 bg-[#F2F2F2]'>
                <div className='flex justify-between'>
                  {
                    e.stats.map((stat, index) => (
                      <div key={index}>
                        <h3 className='font-semibold text-[20px]'>{stat.value}</h3>
                        <p>
                          <span className='text-[#17B21C] text-[16px]'>{stat.change}</span> {stat.label}
                        </p>
                      </div>
                    ))
                  }
                </div>

                <div className='flex justify-between mt-3.5'>
                  <div className='flex flex-col justify-start'>
                    {
                      e.chart.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 my-2">
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <p className="text-sm">{item.label}</p>
                        </div>
                      ))
                    }
                  </div>

                  {
                    e === CardData.users ?
                      <div className='flex space-x-4'>
                        {
                          e.chart.map((val, index) => (
                            <div key={index} className='w-18 h-[150px] flex flex-col items-center justify-end'>
                              <p className='font-semibold'>{val.value}</p>
                              <div
                                className="w-full rounded-xl"
                                style={{ height: val.value, background: val.color }}
                              />
                            </div>
                          ))
                        }
                      </div>
                      :
                      <div className='space-y-7'>
                        {
                          e.chart.map((val, index) => (
                            <div key={index} className='w-[230px] h-4 bg-gray-300'>
                              <div
                                className="h-full"
                                style={{ width: val.value, background: val.color }}
                              />
                            </div>
                          ))
                        }
                      </div>
                  }
                </div>
              </div>
            </section>
          ))
        }
      </div>

      <div>
        <UsersTable />
      </div>
    </div>
  )
}

export default AdminBody
