'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import profileImage from '../../public/profile.jpg'

export default function ProfileArticle() {
    const router = useRouter();
  return (
    <>
    <div className='flex flex-col items-center'>
      <Image className="rounded-full" src={profileImage} alt='profile' width={250} height={250}></Image>
    </div>
    <div className='flex flex-col items-center'>
      <p>ssoyaXD</p>
      <button className="rounded-full bg-[#78b1d4] text-white px-4 mt-4" onClick={() => router.push('/contact')}>Contact Me!</button>
    </div>
    </>
  )
}
