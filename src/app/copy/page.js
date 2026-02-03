'use client'
import React from 'react'
import { useEffect,useState } from 'react'
import { signOut, useSession } from 'next-auth/react';
import { useSearchParams } from "next/navigation";
import { sd } from '../back/sr';
import { dn } from '../back/sr';
import { gt } from '../back/sr';
import Link from "next/link";
import { km } from '../back/sr';
import { Suspense } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Navbar from '../../../nabar/navb';
// import { signOut } from 'next-auth/react';
export default function Page() {
  return (
    <Suspense fallback={<div style={{ padding: 20 }}>Loading...</div>}>
      <InfoContent />
    </Suspense>
  )
}
  const InfoContent = () => {
  const[t,c] = useState(false)
       const searchParams = useSearchParams();
      const item = searchParams.get("item");
      const yp = item;
      const [first, setfirst] = useState([])
      const {data:session,status} = useSession()
      const[h,u] = useState({})
      const[b,n]= useState(false);
      const[r,x] = useState(false)
      const[p,v] = useState({name:'',res:'',des:''})
      const[load,sload] = useState("")
     useEffect(() => {
        if(session?.user?.email && item !==null){
         get(item,session.user.email)
         }
      }, [session])
     const get = async(y,t)=>{
         sload("loading ....")
try{ 
      let l = await sd(y,t,session.user?.name);
       setfirst(l)
      let m = await gt(session.user?.email,session.user?.name)
       u(m[item]);
        if(l.length>0){
       sload("")
      }
      if(!l.length){
      sload("Not Found..")
      n(true)
    }
    }catch{
          sload("!Oops , please Check Your Network Connection...")
       
    }
     }
     const sho = () => {
     x(true);
  };
  const ht = ()=>{
    x(false)
  }
  const res = async (e,i)=>{
      let l = await sd(item,session.user?.email,session.user?.name);
      // console.log(l[i])
      v({name:l[i].userto})
      c(true)
  }
   const hp = ()=>{
    c(false)
  }
  const hd = (e)=>{
v({...p,[e.target.name]:e.target.value})
  }

  const sub = async()=>{
    console.log(p)
let c = await km(p.name,p.res,p.des,session.user?.name,session.user?.email,item);
  }
     const del  =async(e,i)=>{
      let l = await sd(item,session.user.email,session.user?.name);
      let t = await dn(session.user.email,session.user.name,l[i]._id)
      get(item,session.user.email)
      }    
    //  console.log("f",h)

    const down=async(e,i)=>{
     const card = document.getElementById(`card${i}`)
     console.log(e, card)
     const canvas = await html2canvas(card, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 10, pdfWidth, pdfHeight);
  pdf.save(`event-card-${i}.pdf`);
       }

  return (
      <>

 <Navbar/>

    <div  className='pq1'>
        {/* {b && <h3 style={{color:'white'}}>no cards are created</h3>} */}
      {load!=="" && <><div className='cardmsg'>{load}</div></>}
        {
            first.map((item,i)=>{
               return <> 
            <div  className='u1'>
            {/* <div onClick={(e)=>res(e,i)}>Response</div> */}
                <div onClick={(e)=>del(e,i)}>DELETE</div>
                <div onClick={(e)=>down(e,i)}>Download</div>

 <Link className='ep1' href={`/card/?item=${i}&p=${yp}`}><div><div className='n21'>UPDATE</div></div></Link> 
 <div id={`card${i}`}> 
                 <div    className='f10' style={{background:`${item.color}`}}>
            <img className='er2' src={h.image} alt="" /> 
              <div style={{marginTop:"10px"}}>{h.name}</div>
                <div><h2 style={{marginTop:"20px",color:'wheat'}}>{h.event}</h2></div> 
                <div>Mr/Ms.{item.userto}</div>
                <div><h2>{h.location}</h2></div>
                <div>Time {h.time}</div>
               <div><h4>{h.des}</h4></div>
               <div className='sedate1'><h4>Date : {h.date}</h4></div>
               </div>
                 </div>
                                <div><h4>TRACK THE LOCATION</h4></div>
                  <div>
                 <iframe  className='n9'  width="100%"  height="200"  style={{ border: 0 }}  loading="lazy" allowFullScreen src={`https://www.google.com/maps?q=${encodeURIComponent(h.location)}&output=embed`}></iframe>
        </div>
                 </div>
              </>;
            })
        }  
        </div> 
        {t &&  
          
         <div style={{color:'white', marginTop:'280px', position:'absolute', marginLeft:'90px'}}>
           <div style={{fontSize:'30px', cursor:'pointer'}} onClick={hp}>X</div>
                <div><input onChange={hd} value={p.name} name='name' type="text" placeholder='enter your name ' /></div>
                 <div><input onChange={hd} value={p.res} name='res' type="text" placeholder='enter your response ' /></div>
                 <div><textarea onChange={hd} value={p.des} name='des' id="" placeholder='enter your description'></textarea></div>
                <Link className='ep1' href={`/res/?item=${item}`}> <div onClick={sub} style={{padding:'5px',color:'black', backgroundColor:'white', cursor:'pointer', width:'70px', textAlign:'center',borderRadius:'4px', marginTop:'20px'}}>sumbit</div></Link>
                </div>
                }
     </>
  )
}
 