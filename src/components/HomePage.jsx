import React from 'react'
import WhyChooseUs from './WhyChooseUs'
import OurReviews from './OurReviews'
import Testimonials from './Testimonials'
import OurAchievements from './OurAchievements'
import LoanForEveryOne from './LoanForEveryOne'
import Footer from './Footer'
import About from './About'
import Navbar from './NavBar'
import FAQ from './FAQ'





const HomePage = () => {
  return (
    <div>
        <div className='bg-gray-100 overflow-hidden'>    
            <Navbar navbarColor="bg-blue-500 text-blue-300"/> 
            <About/>
            <WhyChooseUs/>
            <OurAchievements/>
            <LoanForEveryOne/>
            <OurReviews/>
            <Testimonials />
            <FAQ />
            <Footer footerColor="bg-blue-500 text-blue-900"/>

        </div>
    </div>
  )
}

export default HomePage