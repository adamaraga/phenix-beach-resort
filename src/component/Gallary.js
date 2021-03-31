import React from 'react';
// import data from './GallaryData'
import {Link } from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';
import { withRoomConsumer } from '../Context';
import Loading from './Loading';


function Gallary({context}) {
    const { gallary, loading } = context;

    if(loading) {
        return<Loading title='gallary' />
    }

    return (
        <section id='gallary' className='gallary-con' >
            {/* <Title title='gallary' /> */}
            <div className="gallary">
                {gallary.map((img) => {
                    const {id, gallaryimage} = img;
                   return <div className='gallary-div'> <img className='gallary-pic' key={id} src={gallaryimage} alt=" resort gallary pictures"/> </div>
                })}
            </div>
            <div className='gallary-link'>
                <h2>create mermories with the perfect holiday</h2>
                <h2>at phenix beach resort</h2>
                <Link to='/rooms' className='btn-primary'>
                        book now <BsArrowRight className='arrow'/>
                    </Link>
            </div>
        </section >
    )
}

export default withRoomConsumer(Gallary)
