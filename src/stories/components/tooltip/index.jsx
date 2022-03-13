import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Tooltip = ({ color, backgroundColor, position, text, children, disabled = false }) => {
  return (
    <div
      className={'ui-tooltip--trigger'}
    >
      {disabled ? '' : <div style={backgroundColor && { backgroundColor, color }} className={['ui-tooltip', `ui-tooltip--${position}`].join(' ')}>
        {text}
        </div>
      }


      {children}
    </div>
  );
};

Tooltip.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

Tooltip.defaultProps = {
  color: 'white',
  backgroundColor: 'black',
  position: 'top',
  text: null
};
