import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
  <Fragment>
    <Navbar/>
    <Main/>
    <Footer/>
  </Fragment>
  )
}

export default App