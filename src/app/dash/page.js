'use client'

import { useSession, signOut } from 'next-auth/react'
import { Player } from '@lottiefiles/react-lottie-player'
import React, { useEffect, useState } from 'react'
import { gt, de } from '../back/sr'
import Link from 'next/link'
import Navbar from '../../../nabar/navb'
const Page = () => {
const { data: session } = useSession()
  const [first, setfirst] = useState([])
  const [s, set] = useState(false)
  const [e, p] = useState(false)
const[load,sload] = useState("")
  useEffect(() => {
    if (session?.user?.email) {
      get()
    }
  }, [session])

  const get = async () => {
    sload("loading ....")
    try{
    const y = await gt(session.user?.email, session.user?.name)
     if(!y.length){
      sload("Not Found..")
     }
     if(y.length>0){
     console.log('this ->', y)
    setfirst(y)
    sload("");
     }
  }catch{
    sload("!Oops , please Check Your Network Connection...")
  }
  }

  const sho = () => {
    p(true)
  }

  const ht = () => {
    p(false)
  }

  const ca = (e, i) => {
    console.log(first[i].event)
  }

  const del = async (e, i) => {
    console.log(first[i]._id)
    await de(session.user?.email, session.user?.name, first[i]._id, i)
    get()
  }

  return (
    <>
<Navbar/>

<div className="hero">
  <video autoPlay loop muted playsInline className="abn">
    <source src="/video/back.mp4" type="video/mp4" />
  </video>

 {session && <div className="as10">
    <Link href="/eventd" className="d0">
      <div className="o1" style={{ color: 'white' }}>
        create your event
      </div>
    </Link>
  </div>}
  {!session && <div className="as10">
    <Link href="/login" className="d0">
      <div className="o1" style={{ color: 'white', fontSize:"12px" }}>
         SignIn to Create Event
      </div>
    </Link>
  </div>}
</div>

      <div className="b1">
        <h1>YOUR EVENTS</h1>
      </div>

      <div className="rt">
        {load!="" && <><div className='loader'>{load}</div></>}
        {s && <h2 style={{ color: 'white' }}>no event are presant</h2>}

        {first.map((item, i) => (
          <div className="f9" key={i}>
            <img className="ey1" src={item.image} alt="" />

            <div className="f3">
              <h1 className="n5">{item.event}</h1>
            </div>
            <div className="n1">{item.name}</div>
            <div className="n1">{item.time}</div>
            <div className="n1">{item.location}</div>
            <div className="n1">{item.des}</div>

            <Link className="ep1" href={`/card/?item=${i}`}>
              <div className="n2" onClick={(e) => ca(e, i)}>
                create the cards
              </div>
            </Link>

            <Link className="ep1" href={`/copy/?item=${i}`}>
              <div className="n2" onClick={(e) => ca(e, i)}>
                go to the cards ------
              </div>
            </Link>

            <Link className="ep1" href={`/eventd/?item=${i}`}>
              <div className="n2" onClick={(e) => ca(e, i)}>
                UPDATE
              </div>
            </Link>

            <div className="n2" onClick={(e) => del(e, i)}>
              DELETE
            </div>

            <Link className="ep1" href={`/res/?item=${i}`}>
              <div className="n2" onClick={(e) => ca(e, i)}>
                RESPONSE
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default Page
