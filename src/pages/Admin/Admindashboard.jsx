import { useState, useEffect } from 'react';
import { FiActivity } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';


import Adminbar from '../../components/AdminBar';
import Adminheadbar from '../../components/AdminHeadbar';
import AccountCard from '../../components/FinanceCard';
import PriceChart from '../../components/BitcoinCard';
import TransactionTable from '../../components/TransactionTable';
import RecentOrders from '../../components/RecentOrder';
import UsersActivity from '../../components/UserActivities';

import teth from '../../assets/pngs/tether.png'
import btc from '../../assets/pngs/btc.png'
import eth from '../../assets/pngs/eth.png'
import usdt from '../../assets/pngs/usdt.png'

function AdminDashboard() {
  const [filterTransaction, setFilterTransaction] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFilter = () => {
    setFilterTransaction(!filterTransaction);
  };

  const allTransactions = [
    {
      id: 1,
      assets: eth,
      type: 'Sent',
      amount: '-15 ETH',
      status: 'Completed',
      date: '1st June',
      reference: 'BAE344wr',
      action: 'Seen',
    },
    {
      id: 2,
      assets: btc,
      type: 'Sent',
      amount: '$12',
      status: 'Completed',
      date: '2nd June',
      reference: 'TAE2345r',
      action: 'Seen',
    },
    {
      id: 3,
      assets: usdt,
      type: 'Recieved',
      amount: '$45',
      status: 'Failed',
      date: '3rd June',
      reference: 'AD2345r',
      action: 'Seen',
    },
    {
      id: 4,
      assets: teth,
      type: 'Recieved',
      amount: '+67BTC',
      status: 'Pending',
      date: '5th June',
      reference: 'AD200ol',
      action: 'Seen',
    },
    {
      id: 5,
      assets: btc,
      type: 'Sent',
      amount: '$470',
      status: 'Failed',
      date: '7th June',
      reference: 'AP07ol',
      action: 'Seen',
    },
    {
      id: 6,
      assets: eth,
      type: 'Recieved',
      amount: '2.90ETH',
      status: 'Failed',
      date: '9th July',
      reference: 'TXN0345K',
      action: 'Seen',
    },
    {
      id: 7,
      assets: teth,
      type: 'Sent',
      amount: '-2.50BTC',
      status: 'Failed',
      date: '10th July',
      reference: 'IOP2345r',
      action: 'Seen',
    },
    {
      id: 8,
      assets: usdt,
      type: 'Recieved',
      amount: '$50',
      status: 'Completed',
      date: '11th July',
      reference: 'SDF2345r',
      action: 'Seen',
    },
  ];

  const filteredTransaction = allTransactions.filter((item) =>
    item.reference.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="flex">
        
        <div className="w-[15%] relative h-screen">
          <Adminbar />
        </div>

        
        <div className="w-[85%] gap-4 p-4 bg-gray-300 flex flex-col">
          <Adminheadbar />

          
          <div className="flex gap-2 p-4 mt-6">
            <AccountCard icon={FaUser} title="total user" />
            <AccountCard icon={FiActivity} title="total trades" />
            <AccountCard icon={FiActivity} title="revenue" />
            <AccountCard icon={FiActivity} title="pending trades" />
            <AccountCard icon={FiActivity} title="completed trades" />
            <AccountCard icon={FiActivity} title="support tickets" />
          </div>

      
          <div className="bg-gray-100 p-8">
            <PriceChart title="bitcoin chart" />
          </div>

    
          <div>
            
            <section className="mt-6">
              <TransactionTable
                allTransactions={allTransactions}
                filteredTransaction={filteredTransaction}
              />
            </section>
          </div>
          <div className='flex'><div className='w-[65%]'><RecentOrders/></div><div className='w-[30%]'><UsersActivity/></div></div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
