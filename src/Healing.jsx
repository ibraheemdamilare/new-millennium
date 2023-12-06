import React from 'react'
import { motion } from 'framer-motion'

const Healing = () => {
  return (
    <div>
        <img className='healing-image' src="IMG-20231021-WA0020.jpg" alt="" />
        <motion.div
        initial= {{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 0.6 }}
        >
          <p className="topic-body"><strong>Laying Hand</strong> <br/> <br/>Laying on of hands was associated with Christ healing the sick (Luke 4:40) and after His ascension, the receiving of the Holy Spirit (Acts 8:14-19). Initially, the Apostles laid hands on new believers as well as believers (Acts 6:5-6). Laying of hand is also one of the work of our ministry through the help of the Holy Spirit </p>
        </motion.div>

    </div>
  )
}

export default Healing