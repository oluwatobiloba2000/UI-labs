import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

/**
 * Primary UI component for user interaction
 */
export const Tooltip = ({ color, backgroundColor, position, text, children }) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <div
      className={'ui-tooltip--trigger'}
    >
      <div style={backgroundColor && { backgroundColor, color }} className={['ui-tooltip', `ui-tooltip--${position}`].join(' ')}>
        {text}
      </div>


      {children}
    </div>
  );
};

Tooltip.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  text: PropTypes.string.isRequired,
};

Tooltip.defaultProps = {
  color: 'white',
  backgroundColor: 'black',
  position: 'top',
  text: null,
};
