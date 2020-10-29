import React from 'react'
import Header from '../components/Header'
import Cards from '../components/Cards'
import EmailSection from '../components/EmailSection';
import Footer from '../components/Footer';

export const HomePage = () => {
    return (
        <div>
           <Header/>
            <Cards/>  
            <EmailSection/>
            <Footer/>
      </div>
    )
}

export default HomePage