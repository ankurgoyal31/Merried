"use client"
import { signIn } from "next-auth/react";
// import { Player } from '@lottiefiles/react-lottie-player';
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