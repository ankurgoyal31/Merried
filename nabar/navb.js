'use client'
import React, { useCallback } from 'react'
import { signOut, useSession } from 'next-auth/react';
import Link from "next/link"; 
  const Navbar = () => {
    const{data:session} = useSession();
  return (
      <>

{/* <nav class="navbar navbar-expand-lg navbar-dark bg-gradient shadow-sm">
  <div class="container-fluid">
      {!session && <><div className='email'><Link className='deco1' href={"/login"}>SignIn</Link> </div></>}
     <a class="navbar-brand fw-bold" href="/">
      EVENTIFY
    </a>
 {session && <><div className='email'>{session?.user?.email}</div></>}
 
     <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainNavbar"
      aria-controls="mainNavbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
     <div class="collapse navbar-collapse" id="mainNavbar">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">
            Home
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/eventd">
            Events
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/dash">
            Dashboard
          </a>
        </li>
 {session &&<li class="nav-item"><button class="nav-link disabled" className="btn" onClick={()=>signOut("/")}>SignOut</button></li>}

      </ul>
    </div>
  </div>
</nav> */}



<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
  <div class="container-fluid px-4">

    <a class="navbar-brand fw-bold" href="/">EVENTIFY</a>

    {session && <div className="email">{session.user.email}</div>}
    {!session &&<li class="nav-item "><Link href="/login/" ><button className="btn4566">SignIn</button></Link></li>}
    {/* {!session && <Link href="/login/" className='w9'><div className='w3'>LOGIN</div></Link>} */}

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="mainNavbar">
      <ul class="navbar-nav ms-auto gap-lg-3">
        <li class="nav-item23"><Link className="nav-link" href="/">🏠 Home</Link></li>
        <li class="nav-item23"><Link className="nav-link" href="/eventd">🌃 Events</Link></li>
        <li class="nav-item23"><Link className="nav-link" href="/dash">🔮 Dashboard</Link></li>
        {session &&<li class="nav-item23"><button class="nav-link disabled" className="btn4566" onClick={()=>signOut({ callbackUrl: "/" })}>SignOut</button></li>}
      </ul>
    </div>

  </div>
</nav>
     </>
  )
}
export default Navbar