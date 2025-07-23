import Headbar from '../../components/Headbar.jsx';
import Sidebar from '../../components/Sidebar.jsx';
import FinanceCard from '../../components/FinanceCard.jsx';

function Market() {
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
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Topbar */}
        <Headbar />

        {/* Page Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Crypto Market Overview</h2>
          <p className="text-gray-500">Real-time cryptocurrency market data and analysis</p>
        </div>

        {/* Top Cryptocurrencies Table */}
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
      </div>

       {/* FinanceCard Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <FinanceCard />
        </div>

    </div>
  );
}

export default Market;