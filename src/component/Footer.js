import React from 'react'
import {AiOutlinePhone, AiFillInstagram, AiOutlineCopyrightCircle} from 'react-icons/ai'
import {FiMail} from 'react-icons/fi'
import {ImLocation2} from 'react-icons/im'
import {Link } from 'react-router-dom'

function Footer() {
    return (
        <>
        <div className='footer'>
            <div className='footer-con'>
                <h4>About us</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus culpa earum consectetur quo at iusto ullam, ipsam recusandae fugit placeat accusantium atque ducimus dolor quam error aspernatur officiis. Delectus?</p>
            </div>
            <section id='contact' className="footer-con">
                <h4>contact</h4>
                <p><AiOutlinePhone className='footer-icon'/> phone: 09094120232</p>
                <p><FiMail className='footer-icon'/> mail:  <a href="www.aragaadam@gmail.com">aragaadam@gmail.com</a> </p>
                <p><ImLocation2 className='footer-icon' /> location: Lorem ipsum dolor sit amet.</p>
                <p><AiFillInstagram className='footer-icon'/> instagram: Lorem, ipsum dolor.</p>
            </section>
            <div className="footer-con footer-links">
                <h4>Links</h4>
                <ul>
                    <li><Link to='/'>Home</Link> </li>
                    <li><Link to='/rooms'>Rooms</Link></li>
                    <li><Link to=''>Gallary</Link></li>
                    <li> <Link to=''>Contact</Link></li>
                </ul>
            </div>
            <div className="other footer-con">
                <p>Terms & Condtion</p>
                <p>Pricing and Policy</p>

            </div>
        </div>
        <div className='footer-copy' >
            <p><AiOutlineCopyrightCircle /> phenix beach resort by adam araga a.</p>

        </div>
        </>
    )
}

export default Footer
