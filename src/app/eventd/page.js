'use client'
import React from 'react'
 import { useSession } from 'next-auth/react'
import { useState,useEffect } from 'react'
import { gt } from '../back/sr'
import { mg } from '../back/sr'
// import { Player } from '@lottiefiles/react-lottie-player';
import Link from 'next/link'
import { useRef } from 'react'
import { useSearchParams } from 'next/navigation'
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
const InfoContent  = () => {
    const router = useRouter();

  const l = useRef()
  const searchParams = useSearchParams();
  const item = searchParams.get("item");
  const{data:session, status} = useSession()
  const [first, setfirst] = useState({name:"",event:"",time:"",image:"",location:"",des:"",date:""})
  const[m,n] = useState("")
  const[r,x] = useState(false)
  const[load,sload] = useState("")
  const hand = (e)=>{
    setfirst({...first,[e.target.name]:e.target.value});
  }
  useEffect(() => {
    if(session?.user?.email && item !==null){
      gp(session.user?.email , session.user?.name)
    }
  }, [session])
  const gp = async(p,s)=>{
let o = await gt(p,s);
console.log(o[item].name)
      setfirst({name:o[item].name,event:o[item].event,time:o[item].time,image:o[item].image,location:o[item].location,des:o[item].des,color:o[item].color})
   n(o[item]._id);  
     }
    const sho = () => {
     x(true);
  };
   const ht = ()=>{
    x(false)
  }
  const cre = async()=>{
    try{
     sload("Your Event Is Creating Please Wait....")
     const x = await mg(session.user?.email,first,session.user?.name,m) 
    sload("");
    alert("Creating Sucessfully")
            router.push("/dash");
    }catch{
      sload("Please Check Your Internet Connection....")
      setTimeout(() => {
        sload("")
      }, 4000);
    }
   }
  return (
    <>
    <Navbar/>  
     <div  className='x1'> 
       {load!=="" && <><div className='loader12'>{load}</div></>}

<div className='formstyle12'> 
<div class="input-group mb-3">
   <input name='name' value={first.name} onChange={hand} type="text" placeholder='ENTER PERSON NAME' class="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3">
  <input name='event' value={first.event} onChange={hand} placeholder='ENTER THE EVENT NAME' type="text" class="form-control" aria-label="Recipient’s username" aria-describedby="basic-addon2"/>
 </div>

<div class="mb-3">
   <div class="input-group">
     <input name='time' value={first.time} onChange={hand} placeholder='ENTER TIME' type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4"/>
  </div>
 </div>

<div class="input-group mb-3">
   <input name='image' value={first.image} onChange={hand} placeholder='UPLOAD AN IMAGE' type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
 </div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Enter Date" aria-label="Enter Date"/>
   <input name='location' value={first.location} onChange={hand} placeholder='ENTER  LOCATION' type="text" class="form-control"  aria-label="Server"/>
</div>
<div class="input-group mb-3">
   <input name='date' value={first.date} onChange={hand} type="text" placeholder='Enter Date' class="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div class="input-group">
   <textarea name='des' value={first.des} onChange={hand} placeholder='ENTER THE DESCRIPTION' class="form-control" aria-label="With textarea"></textarea>
</div>
{session && <div className='p0' onClick={cre}><div style={{textDecoration:'none'}} >CREATE</div> </div>}
{!session &&<div className='p0'><Link style={{textDecoration:"none",color:"black"}} href="/login">SignIn to Create Event</Link></div>}

</div>
 
</div>
<div className='o2'> 
      {r && <div className='as19'>
        <div className='do'>X</div>
              <Link href='/' className='dp'><div style={{color:'white'}} className='do'>HOME</div></Link>
            <Link href='/dash' className='dp'><div style={{color:'white'}} className='do'>DASHWORD</div></Link>
            <Link href='/eventd' className='dp'><div style={{color:'white'}} className='do'>CREATE EVENT</div></Link> 
            </div>
          }
          </div>
     </>
  )
}