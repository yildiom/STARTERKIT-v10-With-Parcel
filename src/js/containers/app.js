import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  static propTypes = {
    age: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: 'David',
    };
  }

  render() {
    const { name } = this.state;
    const { age } = this.props;
    return (
      <>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </>
    );
  }
}

export default App;
