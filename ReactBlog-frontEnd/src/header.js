import React from 'react';
import store from './redux/store';
import Nav from './components/Nav';

const Header = () => (
  <Nav userInfo={store.getState()} />
);

export default Header;
