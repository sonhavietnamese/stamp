'use client'

import Header from '@/components/header'

export default function Home() {
  return (
    <main className='w-dvw flex gap-4 flex-col p-4 h-dvh font-satoshi'>
      <Header />

      <section className='h-full w-full rounded-[32px] bg-[#D9D9D9]'></section>
      <section className=''>
        <h2 className='text-[44px] font-medium font-recoleta text-primary'>Found a Spot!</h2>
        <p className='text-[16px] text-secondary leading-[1.3] mt-2'>
          The largest web design and iOS library for UX/UI inspiration, featuring real-life products and perfectly organized to fuel your creativity
        </p>
      </section>

      <section className='mt-6 flex justify-end'>
        <button className='bg-[#EEF0F6] text-primary text-[18px] py-3 px-5 rounded-full'>Explore</button>
      </section>
    </main>
  )
}
