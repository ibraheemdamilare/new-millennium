import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import {NavHashLink} from 'react-router-hash-link'

const Navbar = () => {

  const [visible, setVisible] = useState(true)
  return (
    <div className='navbar'>
        <div className="flex">  
            <div >
              <img className="icon-text-new" src="IMG-20231021-WA0017.jpg" alt="" />
            </div>
            <div onClick={() => setVisible(!visible)}>
            {visible ? <FaBars className='icon'/> : <FaTimes className='icon left'/>}
            </div>
            {!visible && <div className='navbar-list-bg'>
              <ul>
                <li onClick={() => setVisible(true)}><NavHashLink to="#top" smooth>Home</NavHashLink></li>
                <li onClick={() => setVisible(true)}><NavHashLink smooth to='#mission'>Mission Statement</NavHashLink></li>
                <li onClick={() => setVisible(true)}><NavHashLink smooth to='#service'>Service</NavHashLink></li>
                <li onClick={() => setVisible(true)}><NavHashLink smooth to='#biography'>Biography</NavHashLink></li>
                <li onClick={() => setVisible(true)}><NavHashLink smooth to='#apply'>Contact Us</NavHashLink></li>
              </ul>
        </div>
        }
            
        </div>
       
    </div>
  )
}

export default Navbar