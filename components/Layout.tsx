import React from 'react';
import Header from './Header';

const Layout = ({ children }: any) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
