import React from 'react'
import Header from '../components/Header'
import Cards from '../components/Cards'
import EmailSection from '../components/EmailSection';
import Footer from '../components/Footer';

export const HomePage = () => {
    return (
        <div className= "h-screen w-full relative">
           <Header/>
            <Cards/>  
            <EmailSection/>
            <Footer/>
      </div>
    )
}

export default HomePage