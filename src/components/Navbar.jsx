import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex flex-row w-full justify-between py-5 px-7'>
    <div className='w-[50%]'>LOGO</div>
    <div className='w-[50%] items-end'>
        <ul className='flex justify-evenly'>
            <Link href='about'>About Us</Link>
            <Link href="courses">Buy Courses</Link>
            <Link href="contact">Contact</Link>
            <Link href="login">Log In</Link>
        </ul>
    </div> 
    </div>
  )
}
