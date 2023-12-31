"use client"

import Image from "next/image"
import { useState } from "react"
import { useSession, signIn } from "next-auth/react"

const Banner = () => {
  const [closed, setClosed] = useState(false);
  const session = useSession();

  return (
    <div className={"bg-black py-[9px] " + (closed && " hidden")}>
      <div className="container flex items-center justify-center relative">
        <div className="text-white text-sm font-normal sm:text-xs flex gap-1">Sign up and get 20% off to your first order.
          {session?.status === "authenticated" ||
          <button onClick={() => signIn()} className="font-medium underline sm:hidden">Sign Up Now</button>}
        </div>
        <button
          onClick={() => setClosed(prev => !prev)}
          className="border border-black hover:border-dotted duration-200 hover:border-white absolute right-0 sm:hidden">
          <Image
            src="/close-btn.svg"
            width={20}
            height={20}
            alt="close"
          />
        </button>
      </div>
    </div>
  )
}

export default Banner