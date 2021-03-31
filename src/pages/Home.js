import React from 'react'
import Banner from '../component/Banner'
import Hero from '../component/Hero'
import {Link } from 'react-router-dom'
import Services from '../component/Services'
import FeaturedRooms from '../component/FeaturedRooms'
import Reviews from '../component/Reviews'
import Footer from '../component/Footer'


const Home = () => {
    return (
        
        <React.Fragment>
        <Hero hero='defaultHero'>
                <Banner title='luxurious rooms' subtitle= 'deluxe rooms starting at $299'>
                    <Link to='/rooms' className='btn-primary'>
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
            <Reviews />
            <Footer />
            
            
        </React.Fragment>
        
    )
}

export default Home

