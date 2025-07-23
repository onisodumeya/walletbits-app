import Headbar from '../../components/Headbar.jsx';
import SideBar from '../../components/Sidebar.jsx';
import FinanceChart from '../../components/PriceChart.jsx';
import MarketCard from '../../components/market-cards/MarketCard.jsx';

function Market() {
  const data = [
    { month: 'Jan', income: 45, expense: 30 },
    { month: 'Feb', income: 35, expense: 25 },
    { month: 'Mar', income: 45, expense: 20 },
    { month: 'Apr', income: 30, expense: 22 },
    { month: 'May', income: 45, expense: 28 },
    { month: 'Jun', income: 55, expense: 25 },
    { month: 'Jul', income: 45, expense: 30 },
    { month: 'Aug', income: 65, expense: 32 },
    { month: 'Sep', income: 25, expense: 17 },
    { month: 'Oct', income: 40, expense: 10 },
    { month: 'Nov', income: 36, expense: 20 },
    { month: 'Dec', income: 32, expense: 12 },
  ];

  const cryptos = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$28,000',
      change: '+2.2%',
      marketCap: '$500B',
      volume: '$30B',
      supply: '19M'
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$1,800',
      change: '-1.3%',
      marketCap: '$300B',
      volume: '$20B',
      supply: '120M'
    },
    {
      name: 'Tether',
      symbol: 'USDT',
      price: '$1.00',
      change: '+0.1%',
      marketCap: '$90B',
      volume: '$80B',
      supply: '90B'
    },
    {
      name: 'BNB',
      symbol: 'BNB',
      price: '$240',
      change: '-0.4%',
      marketCap: '$40B',
      volume: '$2B',
      supply: '160M'
    },
    {
      name: 'Solana',
      symbol: 'SOL',
      price: '$90',
      change: '+3.1%',
      marketCap: '$30B',
      volume: '$3B',
      supply: '500M'
    }
  ];

  return (
    <>
      <div className="flex bg-gray-100 gap-5 px-5 relative">
        <div className='h-screen w-1/5 py-5 sticky top-0'>
          <SideBar />
        </div>

        <div className="flex flex-col gap-5 p-6 w-full">
          <Headbar
            header="Crypto Market Overview"
          />

          <div className='w-full flex justify-between gap-5'>
            <MarketCard title='Total Market Cap' amount='$58.1T' percentage='22.87%' />
            <MarketCard title='24h Volume' amount='$5.6B' percentage='22.87%' />
            <MarketCard title='Bitcoin Dominance' amount='23.5%' percentage='22.87%' />
            <MarketCard title='Active Crypto' amount='12,890' percentage='22.87%' />
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Top Cryptocurrencies</h3>
              <button className="text-purple-600 hover:underline">View all</button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <thead>
                  <tr className="text-gray-500 border-b">
                    <th className="py-2 px-4">Asset</th>
                    <th className="py-2 px-4">Price</th>
                    <th className="py-2 px-4">24h %</th>
                    <th className="py-2 px-4">Market Cap</th>
                    <th className="py-2 px-4">Volume</th>
                    <th className="py-2 px-4">Supply</th>
                  </tr>
                </thead>
                <tbody>
                  {cryptos.map((c, i) => {
                    const isPositive = c.change.includes('+');
                    return (
                      <tr key={i} className="border-t hover:bg-gray-50">
                        <td className="py-2 px-4">{c.name} ({c.symbol})</td>
                        <td className="py-2 px-4">{c.price}</td>
                        <td className={`py-2 px-4 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                          {c.change}
                        </td>
                        <td className="py-2 px-4">{c.marketCap}</td>
                        <td className="py-2 px-4">{c.volume}</td>
                        <td className="py-2 px-4">{c.supply}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-full">
            <FinanceChart
              gap={5}
              size={20}
              data={data}
              title='Bitcoin Price Chart'

            />
          </div>
        </div>


      </div>
    </>
  );
}

export default Market;