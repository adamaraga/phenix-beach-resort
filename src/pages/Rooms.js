import React from 'react'
import Hero from '../component/Hero'
import {Link } from 'react-router-dom'
import Banner from '../component/Banner'
import RoomsContainer from '../component/RoomsContainer'

const Rooms = () => {
    return (
       <>
            <Hero hero='roomsHero' >
                <Banner title='our rooms' >
                    <Link to='/' className='btn-primary'> return home</Link>
                </Banner>
                
            </Hero>
            <RoomsContainer/>
        </>
    )
}

export default Rooms
