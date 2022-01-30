import React from 'react';
import PropTypes from 'prop-types';

const Button = ({children,version,type,isDisabled}) => {
  return (

    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
{children}

    </button>


  )
};

Button.defaultProps = {

    reverse :'primary',
    type:'button',
    isDisabled: false
}


Button.propTypes = {
    children : PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.string,

};

export default Button;