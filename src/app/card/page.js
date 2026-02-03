'use client'
import { useSession } from 'next-auth/react'
import React from 'react'
import { useState ,useEffect } from 'react'
import { py } from '../back/sr'
import { useSearchParams } from "next/navigation";
import { chg } from '../back/sr'
// import { Player } from '@lottiefiles/react-lottie-player';
import Link from 'next/link'
import { Suspense } from 'react'
import Navbar from '../../../nabar/navb'
 import { useRouter } from "next/navigation";
 export default function Page() {
  return (
    <Suspense fallback={<div style={{ padding: 20 }}>Loading...</div>}>
      <InfoContent />
    </Suspense>
  )
}
 const InfoContent= () => {
  const[r,t] = useState(false)
  const Router = useRouter();
  const[load,sload] = useState("")
  const searchParams = useSearchParams();
  const item = searchParams.get("item");
    const it= searchParams.get("p");
console.log(it)
console.log(item)
  const { data: session, status } = useSession()
    const [first, setfirst] = useState({name:"",color:""});
    const[d,c] = useState("")
    useEffect(() => {
     if(session?.user?.email && item!==null){
      go(session.user?.email,session.user?.name,item,it);
     }
    }, [session])
    const go = async(g,h,j,k)=>{
let x = await chg(g,h,j,k);
console.log(x)
setfirst({name:x[item].userto,color:x[item].color})
c(x[item]._id);
    }
    const hand = (e)=>{
setfirst({...first,[e.target.name]:e.target.value});
    }
    const hn = async()=>{
      sload("Your card is creating....")
      try{
     let y = await py(session.user.email,first.name,first.color,item,session.user?.name,d);
      }catch(err){
        sload("please check your internet connection....")
        
      }
     }
    const sho = ()=>{
      t(true)
    }
    const ht = ()=>{
      t(false)
    }
  return (
    <>
     <Navbar/>
     <div style={{color:"white"}} className="mb-378"> 
    {load!=="" && <><div className='loader12'>Loading ....</div></>}
<form>
 
  <div className="mb-3">
    
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp" 
       name='name' value={first.name} onChange={hand}  placeholder='ENTER INVITE NAME' 
    />
     
  </div>

  <div className="mb-3">
     
    <input
      type="text"
      className="form-control"
      id="exampleInputPassword1"
      name='color' value={first.color} onChange={hand} placeholder='ENTER CARD COLOR'
    />
  </div>

  <div className="mb-3 form-check">
     {it!=null && <div className='dp2' onClick={hn}><Link href={`/copy/?item=${it}`} className='dp'><div style={{color:'white'}}><button type="submit" className="btn btn-primary w-100">
    Submit
  </button></div></Link></div> }
     {it===null && <div className='dp2' onClick={hn}><Link href={`/copy/?item=${item}`} className='dp'><div style={{color:'white'}}><button type="submit" className="btn btn-primary w-100">
    Submit
  </button></div></Link></div> }

  </div>

   
</form>
</div>
     </>
  )
 }