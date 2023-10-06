import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex flex-row w-full justify-between py-5 px-7'>
    <div className='basis-1/3'>LOGO</div>
    <div className='basis-2/3'>
        <ul className='flex justify-evenly'>
            <Link href='test/me'>l1</Link>
            <Link href="">l1</Link>
            <Link href="">l1 demo</Link>
            <Link href="">l1</Link>
        </ul>
        <span>hello</span>
    </div>
    </div>
  )
}
