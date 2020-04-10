import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link style={linkStyle} to='/'>
        Home
      </Link>
      |
      <Link style={linkStyle} to='/about'>
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
};
const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};
export default Header;

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class Header extends Component {
//     constructor(props) {
//         super(props);

//     }

//     componentWillMount() {

//     }

//     componentDidMount() {

//     }

//     componentWillReceiveProps(nextProps) {

//     }

//     shouldComponentUpdate(nextProps, nextState) {

//     }

//     componentWillUpdate(nextProps, nextState) {

//     }

//     componentDidUpdate(prevProps, prevState) {

//     }

//     componentWillUnmount() {

//     }

//     render() {
//         return (
//             <div>

//             </div>
//         );
//     }
// }

// Header.propTypes = {

// };

// export default Header;
