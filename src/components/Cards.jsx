import { useRef, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive';
import { PriBtn } from './Buttons';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

function Cards({ image, title, description, link, buttonText, refer }) {
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  return (
    <>
      <div ref={refer} className={`desk flex flex-col ${!isMobile && `flex-row`}`}>
        <div className="divs gap-2 items-start">
            <h1 className={`header font-bold w-full ${isMobile && `text-center`}`}>{title}</h1>
            {!isMobile && 
              <div className='flex flex-col gap-5'>
                <p>{description}</p>
                <Link to={link}><button className="cardbutton">{buttonText}</button></Link>
              </div>
            }
        </div> 
        <img src={image} alt="image" className={`w-full ${!isMobile && `w-4/12`}`} />
        {isMobile && 
          <div className='flex flex-col text-center gap-5 pb-5'>
            <p>{description}</p>
            <Link to={link}><button className="cardbutton">{buttonText}</button></Link>
          </div>
        }
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
