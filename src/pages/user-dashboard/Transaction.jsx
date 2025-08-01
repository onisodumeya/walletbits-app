import Headbar from '../../components/Headbar'
import TransactionTable from '../../components/TransactionTable'
import btctrans from '../../assets/pngs/transbtc.png'
import sent from '../../assets/pngs/sent.png'
import payment from '../../assets/pngs/payment.png'
import pending from '../../assets/pngs/pending.png'
import Filter from '../../modals/Filter'
import teth from '../../assets/pngs/tether.png'
import btc from '../../assets/pngs/btc.png'
import eth from '../../assets/pngs/eth.png'
import usdt from '../../assets/pngs/usdt.png'
import TokenValidation from '../../utils/auth.jsx'

import { SideBarDesktop } from '../../components/Sidebar.jsx'
import { BiFilter } from 'react-icons/bi'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Transaction = () => {

    const [filterTransaction, setFilterTransaction] = useState(false)

    const toggleFilter = () => {
        setFilterTransaction(!filterTransaction)
    }
    const allTransactions = [
  {
    id: 1,
    assets: eth,
    type: 'Sent',
    amount: '-15 ETH',
    status: 'Completed',
    date: '1st June',
    reference: 'BAE344wr',
    action: 'Seen'
  },
  {
    id: 2,
    assets: btc,
    type: 'Sent',
    amount: '$12',
    status: 'Completed',
    date: '2nd June',
    reference: 'TAE2345r',
    action: 'Seen'
  },
  {
    id: 3,
    assets: usdt,
    type: 'Recieved',
    amount: '$45',
    status: 'Failed',
    date: '3rd June',
    reference: 'AD2345r',
    action: 'Seen'
  },
  {
    id: 4,
    assets: teth,
    type: 'Recieved',
    amount: '+67BTC',
    status: 'Pending',
    date: '5th June',
    reference: 'AD200ol',
    action: 'Seen'
  },
  {
    id: 5,
    assets: btc,
    type: 'Sent',
    amount: '$470',
    status: 'Failed',
    date: '7th June',
    reference: 'AP07ol',
    action: 'Seen'
  },
  {
    id: 6,
    assets: eth,
    type: 'Recieved',
    amount: '2.90ETH',
    status: 'Failed',
    date: '9th July',
    reference: 'TXN0345K',
    action: 'Seen'
  },
  {
    id: 7,
    assets: teth,
    type: 'Sent',
    amount: '-2.50BTC',
    status: 'Failed',
    date: '10th July',
    reference: 'IOP2345r',
    action: 'Seen'
  },
  {
    id: 8,
    assets: usdt,
    type: 'Recieved',
    amount: '$50',
    status: 'Completed',
    date: '11th July',
    reference: 'SDF2345r',
    action: 'Seen'
  }
]

 const [searchQuery, setSearchQuery] = useState('')
 const filteredTransaction = allTransactions.filter((item)=> item.reference.toLowerCase().includes(searchQuery.toLowerCase()));

 const token = localStorage.getItem("accessToken");

    if (TokenValidation(token)) {
        console.log("Token is valid. User is logged in.");
        return (
            <>
                <div className="flex bg-gray-100 gap-5 px-5 py-2 relative">
                    <div className='h-screen w-1/5 py-5 sticky top-0'>
                        <SideBarDesktop />
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <Headbar header="Transaction" subHeader="Track your financial activities" />
                        <section className='mt-5 grid grid-cols-1 md:grid-cols-4 gap-3'>
                            {
                                [
                                    {
                                        icon: btctrans,
                                        title: "Total transaction",
                                        value: 15
                                    },
                                    {
                                        icon: sent,
                                        title: "Total sent",
                                        value: 7
                                    },
                                    {
                                        icon: payment,
                                        title: "Total received",
                                        value: 11
                                    },
                                    {
                                        icon: pending,
                                        title: "Pending transaction",
                                        value: 5
                                    }
                                ].map((e) => (
                                    <div className='bg-white rounded-xl [box-shadow:6px_6px_10px_0px_#00000040] p-[10px] space-y-24'>
                                        <img src={e.icon} alt="" className='w-[20px] h-[20px]' />
                                        <div className='flex flex-col gap-1'>
                                            <strong className='text-[18px]'>{e.title}</strong>
                                            <strong className='text-xl'>{e.value}</strong>
                                        </div>
                                    </div>
                                ))
                            }
                        </section>
                        <div className=' relative flex justify-end px-3'>
                            <div onClick={toggleFilter} className='bg-white w-max p-1.5 rounded-sm cursor-pointer'>
                                <BiFilter size={30} />
                            </div>

                            <AnimatePresence>
                                {filterTransaction && (
                                    <motion.div
                                        className='absolute top-14 right-3 z-50'
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Filter
                                            toggleFilter={toggleFilter}
                                            searchQuery={searchQuery}
                                            setSearchQuery={setSearchQuery}
                                            resetFilter={() => setSearchQuery("")}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <section>
                            <TransactionTable filteredTransaction={filteredTransaction} allTransactions={allTransactions} />
                        </section>
                    </div>
                </div>
            </>
        )
    } else {
            console.log("Token is missing or expired. User NOT logged in.");
            return(
                <Modal 
                    openModal={true}
                    priBtnText="Sign in"
                    priBtnLink="/sign-in"
                    heading="Unauthorized entry"
                    headingColor="text-red-500"
                    borderColor="border-red-500"
                    paragragh="You are not signed in, please sign in to continue"
                
                />
            );
    }
}

export default Transaction
