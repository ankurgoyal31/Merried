// 'use client'
// import React from 'react'
// import Link from 'next/link'
// import { Player } from '@lottiefiles/react-lottie-player';
// import { useState } from 'react';
// import { useSession } from 'next-auth/react';
// import { signOut } from 'next-auth/react';
// import { redirect } from 'next/dist/server/api-utils';
// const Page = () => {
//   const { data: session } = useSession()
//   const [first, setfirst] = useState(false)
//   const sho = ()=>{
//     setfirst(!first)
//   }
//   return (
//     <>
//        <div  className='q2'> 
//         <div className='j8'>
//           <div className='qw'>
//             <div>
//               <h1>welcome to the event website</h1>
//             </div>
//           </div> 
//           <div className='j6'>
//             <div className='j7'>
//               <Link href='/' className='d9'>
//                 <div>EVENT</div>
//               </Link>  
//               <div>
//                 <Player autoplay loop src="fg.json" style={{ height: '40px', width: '40px' }} />
//               </div>
//             </div>
//             <div style={{display:'flex', gap:'280px', marginLeft:'-280px'}}> 
//               <div style={{display:'flex', gap:'100px'}}>  
//                 {session && (
//                   <div onClick={sho} className='w3' style={{color:'white', display:'flex', height:'23px', textAlign:'center', width:'250px'}}>
//                     <div>
                      
//                       <img  style={{width:'25px', height:'25px'}} src={session.user?.image} alt="" />
//                     </div>
//                     <div style={{marginLeft:'15px'}}>
//                       {session.user?.email}
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <div>
//                 {!session && <Link href="/login/" className='w9'><div className='w3'>LOGIN</div></Link>}
//                 {session && (<div onClick={() => signOut()} className='w3' style={{color:'white'}}>LOGOUT</div>)}
//               </div>
//             </div>
//           </div> 
//         </div>
//       </div>
//       <div className='o1'> 
//       {first && <div className='as11'>
//         <div className='do'>X</div>
//              <div> <Link href='/' className='dp'><div style={{color:'white'}} className='do'>HOME</div></Link></div> 
//             <Link href='/dash' className='dp'><div style={{color:'white'}} className='do'>DASHWORD</div></Link>
//             <Link href='/eventd' className='dp'><div style={{color:'white'}} className='do'>CREATE EVENT</div></Link>
//           </div>   
//           }
//           </div>
      
//             {/* <video autoPlay loop muted playsInline className="abv"><source src="https://pin.it/3LTLGHffw" type="" /></video> */}
//  <div>     
//     <video autoPlay loop muted playsInline className="abv"><source src="/video/kp.mp4" type="video/mp4" /></video>
// </div>  
//     <div className='as10'><Link href='/eventd' className='d0'><div style={{color:'white'}} className='o1'>crete your event</div></Link></div>  
//  <div className='vde'> 
//   <h1 style={{marginTop:'100px', position:'absolute',  marginLeft:'40%', color:'white'}}>know about website</h1>  
//     <video autoPlay loop muted playsInline className="abl"><source src="/video/kt.mp4" type="video/mp4" /></video>
// </div>
//     </>
//   )
// }

// export default Page









'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Player } from '@lottiefiles/react-lottie-player'
import { useSession, signOut } from 'next-auth/react'
import Navbar from '../../nabar/navb'
const Page = () => {
  const { data: session } = useSession()
  const [open, setOpen] = useState(false)

  return (
    <>
    
<Navbar/>
      {/* HERO VIDEO */}
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
