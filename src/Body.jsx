import React from 'react'
import {FaDove} from 'react-icons/fa'
import Healing from './Healing'
import Service from './Service'
import Biography from './Biography'
import { motion } from 'framer-motion'

const Body = () => {
  return (
    <div className='body'>
      <div className="item" id='mission'>
        <motion.div 
          className="icon-bg"
          initial= {{opacity: 0, scale: 0}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 0.6 }}
          >
          <FaDove className='body-icon' color='white'/>
        </motion.div>

        <motion.div
          initial= {{opacity: 0, scale: 0}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 0.6 }}
        >

          <h3 className="topic">Mission Statement</h3> 
          <p className="topic-body">A calling, in Putting God's House in Order for it is a house of prayer. This is needed to ensure that the body of Christ is receiving the proper teaching of the Five-fold ministries, according to the Apostolic doctrine, that was taught by Jesus Christ and not by the ideologies of theologians past or present. We will initiate this effort, with the understanding and knowledge that the church foundation is built upon the leadership of the Apostles and the prophets and Jesus Christ being the chief cornerstone. For we, as the army of the Lord will enter the fields of the unsaved. Therefore, this body of Christ must and will ensure that the saints will be properly equipped to usher in the final harvest of lost souls before the return of Jesus Christ. Amen.</p>

        </motion.div>
        
      </div>
        <Healing />
        <Service />
        <Biography />
    </div>
  )
}

export default Body