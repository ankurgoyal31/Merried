
'use client'
import React, { useState } from 'react'
import Link from 'next/link'
 import { useSession, signOut } from 'next-auth/react'
import Navbar from '../../nabar/navb'
const Page = () => {
  const { data: session } = useSession()
  const [open, setOpen] = useState(false)

  return (
    <>
    
<Navbar/>
       <section className="hero">
        <video className='abn' autoPlay loop muted playsInline>
          <source src="/video/kp.mp4" type="video/mp4" />
        </video>
        {session &&<Link href="/eventd" className="cta">Create your event</Link>}
        {!session &&<Link href="/login" className="cta">SignIn to Create Event</Link>}
      </section>
    <h2 className='sample23' style={{color:'white'}}>Samples</h2>
      <div className='imageset'> 
      <img className="im122" src="/video/img1.png"alt=""/>
            <img className="im122" src="/video/img2.png"alt=""/>
      <img className="im122" src="/video/img3.png"alt=""/>
            <img className="im122" src="/video/im4.png"alt=""/>

</div>
                            {/* <h2 className='sample26' style={{color:'white'}}>How To Creates</h2> */}

       <section className="info">
         {/* <video autoPlay loop muted playsInline>
          <source src="/video/kt.mp4" type="video/mp4" />
        </video> */}
      </section>
 
    </>
  )
}

export default Page
