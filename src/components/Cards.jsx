import { PriBtn } from './Buttons';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

function Cards({ image, title, description, link, buttonText }) {
  return (
    <>
    <div className="cards px-5 gap-5 py-10">
      <h1 className="header">{title}</h1>
      <img src={image} alt="Card visual" />
      <p>{description}</p>
      <Link to={link}><button className="cardbutton">{buttonText}</button></Link>
    </div>
    <div className='desk'>
        <div className="divs gap-2 items-start">
            <h1 className="header">{title}</h1>
            <p>{description}</p>
            <Link to={link}><button className="cardbutton">{buttonText}</button></Link>
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
