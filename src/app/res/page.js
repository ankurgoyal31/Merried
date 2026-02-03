'use client'
import React from 'react'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useSearchParams } from "next/navigation";
import { xc } from '../back/sr';
import Link from 'next/link';
import { Suspense } from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import { useState } from 'react';

export default function Page() {
  return (
    <Suspense fallback={<div style={{ padding: 20 }}>Loading...</div>}>
      <InfoContent />
    </Suspense>
  )
}
const InfoContent = () => {
      const[r,x] = useState(false)
      const [first, setfirst] = useState([])
     const searchParams = useSearchParams();
    const item = searchParams.get("item");
    const{data:session,status} = useSession()
    useEffect(() => {
        if(session && item!=null){
    get(session.user?.email,session.user?.name,item)
        }
     }, [session])
    const get = async(a,b,c)=>{
let k = await xc(a,b,c);
setfirst(k);
console.log(k)
    }
    const sho = () => {
        console.log(first)
     x(true);
  };
   const ht = ()=>{
    x(false)
  }
  return (

    <>
      <div > 
        <div className='qd'>
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
      <div className='o2'> 
      {r && <div className='as19'>
        <div onClick={ht} className='do'>X</div>
             <div>
               <Link href='/' className='dp'><div style={{color:'white'}} className='do'>HOME</div></Link></div> 
            <div><Link href='/dash' className='dp'><div style={{color:'white'}} className='do'>DASHWORD</div></Link> </div> 
              <Link href='/eventd' className='dp'><div style={{color:'white'}} className='do'>CREATE EVENT</div></Link>
          </div>   
          }
          </div>
          <div className='h1'  style={{marginTop:'100px' , position:'absolute'} }> 
 {
first.map((item,i)=>{
    return <>
     <div className='g1'> 
    <div style={{color:'wheat' }}>name :  {item.userto}</div>
    <div style={{color:'wheat' }}>response :  {item.res}</div>
    <div style={{color:'wheat' }}>description :  {item.des}</div>
    </div>
     </>
})
 }
 </div>
    </>
  )
}

// export default Page
