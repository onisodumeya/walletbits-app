import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Cards from './components/cards.jsx'
import image from './assets/pngs/img1.png'
import imag from './assets/pngs/img2.png'
import imags from './assets/pngs/img3.png'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Cards image={image}
             title=" why choose walletbits?"
             description= "Walletbits is a smart choice for everyone looking to exchange gift cards quickly, securely, and at competitive rates. Walletbits makes the entire process seamless—whether you are trading Amazon, iTunes, Steam, or other popular gift cards. Customers can enjoy instant payouts into their Nigerian bank accounts in naira—backed by 24/7 customer support."
             buttonText="register now"
      /> 
    <Cards image={imag}
     title="Best Transaction Rates"
      description="when you choose walletbits, you dont just exchange gift cards, you unlock nigeria's most competitive rate on the market.we constantly benchmark our exchange rate against leading platforms like cardtonic, apexpay and our rate consistently comes out ahead of others. that means more value to your unused Amazon, itunes, goggle play or other gift cards"
      buttonText="check rates"/>
      <Cards image={imags}
      title="secure and hassle free"
      description="walletbits offers secure and hassle free experience to everyone looking to exchange giftcards with confidence.your transactions are protected with industry-standard encryption and multi-layered verification, ensuring your data and funds remains safe at all times. from card submission to instant payout,everytime happens quickly and transparently"
      buttonText="start trading"/>
    </Router>
  );
}

export default App;