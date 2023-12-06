import React from 'react'
import { NavHashLink } from 'react-router-hash-link'

const Bottom = () => {
  return (
    <div className='bottom-section' id='contact'>
      <h4 className="bottom-head">
        Join New Millennium World Ministry, the Apostolic Workshop
      </h4>
      <p className="bottom-body">
        To join New Millennium World Ministry, click the button below to fill an enquiry form. We will be in touch with you as soon as we can to guide you through the process. Thank you for considering New Millennium World Ministry as your ministry home. 
      </p>
      <button className="apply" >
        <NavHashLink smooth to='#apply'>
          APPLY NOW
        </NavHashLink>
        
      </button>
    </div>
  )
}

export default Bottom