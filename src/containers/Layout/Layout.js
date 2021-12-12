import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
