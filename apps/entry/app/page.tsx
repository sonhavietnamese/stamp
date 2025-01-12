'use client'

import Header from '@/components/header'
import { reownModal } from '@/configs/reown'
import { useAppKitAccount } from '@reown/appkit/react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Home() {
  return (
    <main className='w-dvw flex gap-4 flex-col p-4 h-dvh font-satoshi'>
      <Header />

      <section className='h-full w-full overflow-auto relative rounded-[32px] bg-[#D9D9D9]'>
        <figure className='w-full h-full inset-0'>
          <Image
            draggable={false}
            src='https://images.unsplash.com/photo-1591866605101-67aa6d498cce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='background'
            fill
            className='select-none object-cover'
          />
        </figure>
        <div className='gradient-blur bottom-0'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
      <section className='px-1'>
        <h2 className='text-[44px] font-medium font-recoleta text-primary'>Found a Spot!</h2>
        <p className='text-[16px] text-secondary leading-[1.3] mt-2'>
          The largest web design and iOS library for UX/UI inspiration, featuring real-life products and perfectly organized to fuel your creativity
        </p>
      </section>

      <section className='mt-6 flex justify-end'>
        <Explore />
      </section>
    </main>
  )
}

function Explore() {
  const [isClicked, setIsClicked] = useState(false)
  const { isConnected } = useAppKitAccount()

  const handleExplore = () => {
    if (!isConnected) {
      reownModal.open()
    } else {
      setIsClicked(true)
    }
  }

  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        setIsClicked(false)
      }, 3000)
    }
  }, [isClicked])

  return (
    <motion.button
      initial={{ width: 100 }}
      animate={{ width: isClicked ? 120 : 100 }}
      transition={{ duration: 0.2 }}
      className='bg-[#EEF0F6] items-center flex text-primary text-[18px] py-3 px-5 rounded-full'
      onClick={handleExplore}>
      Explore
      <motion.figure className='w-4 h-4 ml-1 '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#000'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='w-full h-full animate-spin'>
          <path d='M21 12a9 9 0 1 1-6.219-8.56' />
        </svg>
      </motion.figure>
    </motion.button>
  )
}
