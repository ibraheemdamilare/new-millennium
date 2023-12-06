import React from 'react'
import {FaChurch} from 'react-icons/fa'
import {motion} from "framer-motion"

const Service = () => {
  return (
    <div className='church-service' id='service'>
        <div className="icon-heading">
            <motion.div 
              className="icon-bg"
              initial= {{opacity: 0, scale: 0}}
              whileInView={{opacity: 1, scale: 1}}
              transition={{duration: 0.6 }}
              >
            <FaChurch className='body-icon' color='white'/>
            </motion.div>
        </div>

        <motion.div
        initial= {{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 0.6 }}
        >
        <h3 className="heading-text">SUNDAY SERVICE</h3>
        <p className="body-text">Every Second and Third Sunday of the month</p>
        <p className="body-text">Time:   11:30 AM EST</p>
        <p className="body-text">Dial In:   (605) 472-5105  Code:  578-5979</p>
        <p className="body-text">Playback:   (605) 313-4105  Code:  578-5979</p>


        <h3 className="heading-text">BIBLE STUDY</h3>
        <p className="body-text">Every Wednesday</p>
        <p className="body-text">Time:   07:30 PM EST</p>
        <p className="body-text">Dial In:   (605) 472-5105  Code:  578-5979</p>
        <p className="body-text">Playback:   (605) 313-4105  Code:  578-5979</p>
        </motion.div>
  
       
    </div>
  )
}

export default Service