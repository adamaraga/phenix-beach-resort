import React from 'react'
// import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
// import { useLocation } from 'react-router-dom'
import {useState} from 'react'



function Navbar() {
    const [state, setState] = useState({
              isOpen:false
             })

    const handleToggle = ()=> {
        setState({
                    isOpen: !state.isOpen
                })
        }

    // const { pathname } = useLocation();
    // style={{  border: pathname === '/' && '2px solid white' }}
    
        
    return (
        <div>
        <nav className="navbar">
                 <div className="nav-center">
                     <ul className="nav-links">
                         <li>
                             <Link     to='/'>Home</Link>
                           
                         </li>
                         <li>
                             <Link    to='/rooms'>Rooms</Link>
                         </li>
                     </ul>
                     <div className="nav-header">
                         <div className="logo">
                             <Link to='/' >
                                 {/* <img src={logo} alt="logo" id='logo-img'/> */}
                                 phenix beach resort
                             </Link>
                         </div>
                         <button type='button' className='nav-btn' onClick={handleToggle} >
                            {state.isOpen? <AiOutlineClose className='nav-icon' />: <FaAlignRight className='nav-icon' />} {/* <FaAlignRight className='nav-icon' /> */}
                         </button>
                     </div>
                     <ul className="nav-links" id='nav-link-right' >
                       
                         <li>
                             <HashLink smooth to="/#contact">
                                 contact
                             </HashLink>
                         </li>
                       

                         <li>
                             {/* <Link to='/rooms'>gallary</Link> */}
                             <Link  to="/gallary">
                                 gallary
                             </Link>
                         </li>
                       
                     </ul>
                 </div>
                 <div className={state.isOpen? 'side-bar open': 'side-bar'} onClick={handleToggle}>
                    <ul>
                         <li>
                             <Link to='/'>Home</Link>
                           
                         </li>
                         <li>
                             <Link  to='/rooms'>Rooms</Link>
                         </li>
                         <li>
                            <HashLink smooth to="/#contact">
                                 contact
                            </HashLink>
                         </li>
                         <li>
                             <Link  to='/gallary'>gallary</Link>
                         </li>
                    </ul>
                 </div>
             </nav>
        </div>
    )
}

export default Navbar


// export default function navbar() {

//     const [state, setState] = useState({
//         isOpen:false
//     })

//     const { pathname } = useLocation();
//     // state= {
//     //     isOpen:false
//     // }
//     const handleToggle = ()=> {
//         setState({
//             isOpen: !state.isOpen
//         })
//     }

    

    
        
         
//         return (
//             <nav className="navbar">
//                 <div className="nav-center">
//                     <ul className={state.isOpen? 'nav-links': 'nav-links'}>
//                         <li>
//                             <Link className={pathname === '/' && 'active-link'}  to='/'>Home</Link>
//                         </li>
//                         <li>
//                             <Link to='/rooms'>Rooms</Link>
//                         </li>
//                     </ul>
//                     <div className="nav-header">
//                         <div className="logo">
//                             <Link to='/' >
//                                 <img src={logo} alt="logo" id='logo-img'/>
//                                 phenix-beach-resort
//                             </Link>
//                         </div>
//                         <button type='button' className='nav-btn' onClick={handleToggle} >
//                            {this.state.isOpen? <AiOutlineClose className='nav-icon' />: <FaAlignRight className='nav-icon' />} {/* <FaAlignRight className='nav-icon' /> */}
//                         </button>
//                     </div>
//                     <ul className={state.isOpen? 'nav-links': 'nav-links'} id='nav-link-right' >
                       
//                         <li>
//                             <HashLink smooth to="/#contact">
//                                 contact
//                             </HashLink>
//                         </li>
                       

//                         <li>
//                             {/* <Link to='/rooms'>gallary</Link> */}
//                             <HashLink smooth to="/#gallary">
//                                 gallary
//                             </HashLink>
//                         </li>
                       
//                     </ul>
//                 </div>
//             </nav>
//         )
    
// }
