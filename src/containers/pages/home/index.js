import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

import Text from '../../../components/text';

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Text>It Works</Text>
        <Link to='/nextpage'>Next Page</Link>
      </React.Fragment>
    );
  }
}

export default HomePage;
