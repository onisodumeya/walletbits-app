import PropTypes from 'prop-types';
import { PriBtn } from './Buttons';

function Cards({ image, title, description, buttonText }) {
  return (
    <>
    <div className="cards px-5 gap-5 py-10">
      <h1 className="header">{title}</h1>
      <img src={image} alt="Card visual" />
      <p>{description}</p>
      <button className="cardbutton">{buttonText}</button>
    </div>
    <div className='desk'>
        <div className="divs gap-2 items-start">
            <h1 className="header">{title}</h1>
            <p>{description}</p>
            <button className="cardbutton">{buttonText}</button>
        </div> 
        <img src={image} alt="image" className='card-img' />
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

export default Cards;
