import React from 'react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <div id='top'>

        <div className="head-contain">
        <motion.h1 
        className='header'
        initial = {{x: -200}}
        animate= {{x: 0}}
        transition={{duration: 2,
        }}
        >The Apostolic Workshop</motion.h1>
        </div>
        <div className="subhead-contain">
            <motion.h5 
            className='subhead-h5'
            initial = {{x: -1000}}
            animate= {{x: [0, 900, 0]}}
            transition={{duration: 2,
           }}
            >
              The school of the Apostles and the Prophets and the Biblical Teachings of the Fivefold Ministry
            </motion.h5>
            <div className="number">
              <p className="subhead"> 
                1.   We will be focusing on the correct Scriptural teachings and trainings of the office of prophets (Deut. 18: 21-22) (Jeremiah 28:9) who is called and sent by God
              </p>
              <ul>
                <li>Teachings on false prophets and true prophecy Jeremiah Ch. 23</li>
                <li>Will teach on the books of major and minor prophets of the Bible</li>
                <li>Teaching and understanding prophecy in the book of Revelation</li>
                <li>Teachings of Jesus ministry and its application in these contemporary times (Logos and Rhema word)</li>
              </ul>
            </div>

            <div className="number" >
              <p className="subhead"> 
                2.   We will be focusing on the correct biblical scriptural teachings of the true Apostles (2 Corinthians 12:12)
              </p>
              <p className="subhead"> 
                Some major biblical scriptural characteristics required are as follows:
              </p>
              <ul>
                <li>Restoring strength to the limbs of the lame (see Acts 14:8-10)</li>
                <li>Casting out demons (see Acts 16:16-18)</li>
                <li>Transferring God's healing power through aprons or napkins taken from Paul's body to the bedridden who couldn't attend his meetings because of their physical conditions (see Acts 19:11-12)</li>
                <li>Raising the dead (see Acts 20:9-12)</li>
                <li>Healing the sick (see Acts 28:8-9)</li>
              </ul>
            </div>

            <div className="number">
              <p className="subhead"> 
                3.   The teaching and training of the offices of the Five-fold ministries (Apostles, prophets, teachers, evangelists, and pastors) according to biblical scripture and the Apostolic doctrine taught by Jesus Christ
              </p>

              <ul>
                <li>Teaching and training on the commissioning instructions given by Jesus to the discipes before His ascension to heaven (Mark 16:14-20)</li>
                <li>Teaching and training (proper application) on the spiritual gifts according to (1 corinthians chapter 12)</li>
                <li>Teaching of Jesus ministry and its application in these contemporary times (Logos and Rahm word)</li>
                <li>Teaching and understanding of prophecy in the book of Revelation</li>
                <li>Teachings on the 7 periods of dispensations</li>
                <li>Teachings on seeing in the spirit realm and understanding the Seer</li>
                <li>Teachings on Angels and demons and their relationship to spiritual warfare</li>
                <li>Spiritual discernment and deliverance training and application</li>
                <li>Biblical interpretation of dreams and understanding of signs and symbols that are related to visions and dreams</li>
                <li>Understanding proper application and interpretations when speaking in tongues (Divers and heavenly communication of tongues given by the Holy spirit)</li>
                <li>The teachings of Hebrew holidays that are to be honored and practiced by the Church today and in the future according to the bible</li>
              </ul>
            </div>
              <br/>
            <p className="subhead"> 
                This is just a preview of the teaching curriculum, that will be developed and planned for the School of the Apostles and the Prophets: and the Five-Fold Ministries. This school will be under the New Millennium World Ministries, Founded by Apostle Donald L. Tonkins, who wil be assisted by Prophetess Bronna M. Tonkins in its development and operations. We are hoping that the virtual part of the school will be in operations by Fall of 2024 (TBA) and campus setting developed by and in operation during the Fall of 2025 (TBA) if God's willing to approve this timeline. 
              </p> 
           
        </div>
        

    </div>
  )
}

export default HeroSection