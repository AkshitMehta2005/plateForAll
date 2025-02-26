import React from 'react'
import HomePage from './component/home'
import Header from './layout/Header'
import Footer from './layout/Footer'
import About from './navbarLink/aboutus'
import DonateFood from './navbarLink/DonateFood'

const App = () => {
  return (
    <div>
      <Header></Header>
      <HomePage></HomePage>
      {/* <DonateFood/> */}
     
       {/* <About></About>  */}
        <Footer></Footer>


    </div>
  )
}

export default App