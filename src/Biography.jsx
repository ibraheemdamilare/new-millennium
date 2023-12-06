import React from 'react'
import {CgProfile} from 'react-icons/cg'
import {motion} from 'framer-motion'

const Biography = () => {
  return (
    <div>
        <div className="icon-heading padding" id='biography'>
            <motion.div 
            className="icon-bg"
            initial= {{opacity: 0, scale: 0}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.6 }}
            >
              <CgProfile className='body-icon' color='white'/>
            </motion.div>

        </div>
        <h3 className="biography">Biography</h3>
        <img src="IMG-20231103-WA0056.jpg" alt="" />
        <img src="IMG-20231103-WA0055.jpg" alt="" />
        <p className="biography-body">Donald Lamont Tonkins was born on July 3, 1954 in Smithfield North Carolina. During the time of his birth, there were arrangements made between his biological birth parents, Matthew and Jessie Newsome, and family relatives, Ernest and Viola Tonkins, to be adopted at the age of 3 years old. His adoptive parents were responsible for raising him up in a Christian environment that taught him how to be grounded and rooted in the word of God. As a member of the First Missionary Baptist Church in Smithfield, NC, Donald received his Christian training and development as a youth. His parents, James and Viola Tonkins, died before he finished high school in 1968 and 1970. Donald graduated from Smithfield-Selma Senior High School in 1972 where he excelled in the areas of sports, music and dramatics. He attended North Carolina Agricultural and Technical State University in the fall of 1972. He studied political science with a concentration in pre-law. After graduating, he received a BA degree in political science.
        <br/>
        In 1977, Donald L. Tonkins had a spiritual encounter with God in Durham, North Carolina while visiting a friend, which spiritually changed him. This was the beginning of his long life's journey in fulfilling the office of his ministry calling, as an Apostle of the Lord. In the spring of 1977, while visiting a friend in Durham N.C. he found out some heart breaking news regarding his relationship with his friend. Shortly upon receiving this news; on the same day he had a spiritual encounter with the Lord. He was prompted by the Holy Spirit to leave the room where he was sitting with others and was told by the Holy Spirit to go to the bathroom. Within seconds of entering the room he heard the auditable voice of God speak to him and says; <span className='italics'>"I have not called you to do the things that you are doing; I have called you to preach the Gospel of Jesus Christ, which is the word of God to the entire world."</span> As he heard the voice of God speaking to him, he felt a hand upon his right shoulder and because of the weight of the hand, he fell to his knees as the room began to illuminate into a very bright light. As the room brightens with the glory of the Lord, he ended up in a fetal position while acknowledging the Lord's presence. Donald responded to the voice of the lord saying <span className="italics">"yes Lord I will, yes Lord, I understand!"</span> His encounters with the Lord on that day seem to him to have lasted about 10 minutes. However, it was approximately 30 minutes that he had been in the presence of God's glory. While remaining in reverence and fear of the Lord during his encounters, he never attempted to see or look at what was taking place behind him. <br/>
        In May 1977, he was led by the Holy Spirit to enter into the United States Marines Corp not knowing why, until the Lord would reveal to him years later that it was to teach him discipline, faith, trust in God and boldness for the ministry that was to come. After an honorable discharge from the US Marine Corp in 1979, he rededicated his life in service to the Lord, while becoming a member of New Light Missionary Baptist Church, in Greensboro, NC. During this period of time, he met his wife, Bronna Hall Tonkins, who he has been married to for 42 years and together they have three children LaTasha, Jason and Ashley. In 1983, Donald returned back to school to obtain his Masters in Public Affairs with concentration in Public Administration, from the University of North Carolina, in the fall of 1985. In 1994, he attended Shaw University School of Divinity where he studied course work for the Masters of Divinity.
        <br/>
        He was a member of the Cornerstone Tabernacle church where he studied and trained for the application and teaching of the five-fold ministry, under Prophet/Pastor Dr. Clifton and Antoinette Sawyer. He also was a member of the Trustee Board and Director of Planning and development. In january of 1996, he was ordained and licensed as a minister of the Gospel of Jesus Christ. As of the year 2008, Donald Lamont Tonkins has been ministering the gospel of Jesus Christ for te past 27 years. <br/>
        In 2001, Donald was an associate pastor of Joy Tabernacle in Greensboro, NC under leadersship of Apostle/Prophetess Jakki Hunter until 2002. In 2003, he became an itenerant minister travelling to different churches as led by the Holy Spirit to preach the word of God. In 2008, he founded the "New Millennium World Ministries" and began pastoring with his wife Prophetess Bronna M. Tonkins to this present date.
        </p>

    </div>
  )
}

export default Biography