import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import {Link} from 'react-router-dom'
const AboutIconLink = () => {
  return <div className='about-link'>
      <nav>
      <Link to={{
          pathname: '/about'
      }}>
      <FaQuestion size={30}/>
      </Link>
      </nav>
  </div>;
};

export default AboutIconLink;
