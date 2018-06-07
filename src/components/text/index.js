import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class Text extends React.Component {
  render() {
    return (
      <div className='rb-text'>{ this.props.children }</div>
    );
  }
}

Text.propTypes = {
  children: PropTypes.string,
};

export default Text;
