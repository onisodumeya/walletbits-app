import PropTypes from 'prop-types';

function Cards({ image, title, description, buttonText }) {
  return (
    <>
    <div className="card">
      <h1 className="header">{title}</h1>
      <img src={image} alt="Card visual" />
      <p>{description}</p>
      <button className="cardbutton">{buttonText}</button>
    </div>
    <div className='desk'>
        <div className="divs">
            <h1 className="header">{title}</h1>
            <p>{description}</p>
            <button className="cardbutton">{buttonText}</button>
        </div> 
        <div  className="divs"><img src={image} alt="image" className="img"/></div>
    </div>
    </>
  );
}


Cards.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
};


Cards.defaultProps = {
  title: 'Why Choose Walletbits',
  description: `Walletbits is a smart choice for everyone looking to exchange gift cards 
quickly, securely, and at competitive rates. Walletbits makes the entire process seamless—
whether you are trading Amazon, iTunes, Steam, or other popular gift cards. Customers can enjoy 
instant payouts into their Nigerian bank accounts in naira—backed by 24/7 customer support.`,
  buttonText: 'Check Rates',
};

export default Cards;
