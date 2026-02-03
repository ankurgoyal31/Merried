"use client"
import { signIn } from "next-auth/react";
import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import Link from 'next/link';
import { useState } from "react";
import { useSession } from "next-auth/react";
const Page = () => {
  const { data: session } = useSession();
  const[r,x] = useState(false)
  const sho = () => {
     x(true);
  };
   const ht = ()=>{
    x(false)
  }
  return (
    <>
 {/* <div  className='q2'> 
        <div className='j8'>
          <div className='qw'>
            <div>
              <h1>welcome to the event website</h1>
            </div>
          </div> 
          <div className='j6'>
            <div className='j7'>
              <Link href='/' className='d9'>
                <div>EVENT</div>
              </Link>  
              <div>
                <Player autoplay loop src="fg.json" style={{ height: '40px', width: '40px' }} />
              </div>
            </div>
            <div style={{display:'flex', gap:'280px', marginLeft:'-280px'}}> 
              <div style={{display:'flex', gap:'100px'}}>  
                {session && (
                  <div onClick={sho} className='w3' style={{color:'white', display:'flex', height:'23px', textAlign:'center', width:'250px'}}>
                    <div>
                      
                      <img  style={{width:'25px', height:'25px'}} src={session.user?.image} alt="" />
                    </div>
                    <div style={{marginLeft:'15px'}}>
                      {session.user?.email}
                    </div>
                  </div>
                )}
              </div>
              <div>
                {!session && <Link href="/login/" className='w9'><div className='w3'>LOGIN</div></Link>}
                {session && (<div onClick={() => signOut()} className='w3' style={{color:'white'}}>LOGOUT</div>)}
              </div>
            </div>
          </div> 
        </div>
      </div>
      <div className='o1'> 
      {r && <div className='as11'>
        <div onClick={ht} className='do'>X</div>
             <div> <Link href='/' className='dp'><div style={{color:'white'}} className='do'>HOME</div></Link></div> 
            <Link href='/dash' className='dp'><div style={{color:'white'}} className='do'>DASHWORD</div></Link>
            <Link href='/eventd' className='dp'><div style={{color:'white'}} className='do'>CREATE EVENT</div></Link>
          </div>   
          }
          </div> */}

      {/* <div className='ws'>
       </div>

      <div className='rs'>
        <center>login to more support / gets the help</center>
      </div>
       <div className="welcome-text">
        <h2 style={{ textAlign: 'center', margin: '10px 0' }}>Welcome</h2>
      </div>
      <div className='ft'>
        <div className='ea'>
           <div onClick={() => signIn("Github")} className='buto'>Github</div>
        </div>
        <div className='ea'>
                     <div onClick={() => signIn("Google")} className='buto'>Google</div>
  </div>
        <div className='ea'>
                     <div onClick={() => signIn("github")} className='buto'>Github</div>
        </div>
      </div> */}



      <div className="login-root">
  <div className="login-glass">

    <div className="brand">
      <div className="logo">E</div>
      <h2>Eventify</h2>
      <p>Sign in to continue</p>
    </div>

    <div className="login-buttons">
      <div onClick={() => signIn("Google",{ callbackUrl: "/" })} className="login-btn google">
        <span>Continue with Google</span>
      </div>

      <div onClick={() => signIn("Github", { callbackUrl: "/" })} className="login-btn github">
        <span>Continue with GitHub</span>
      </div>
    </div>

    <div className="login-footer">
      <span>Secure • Fast • Free</span>
    </div>

  </div>
</div>

    </>
  )
}
export default Page;