import CTA from '@/components/cta'
import Header from '@/components/header'
import { cn } from '@/libs/utils'
import Image from 'next/image'

export default function Page() {
  return (
    <main className='h-dvh font-satoshi w-dvw'>
      <Header />

      <section className='flex overflow-hidden flex-col w-full h-dvh items-center justify-center relative'>
        <div className='absolute z-10 flex flex-col items-center justify-center mb-20'>
          <h1 className='lg:text-[100px] md:text-[60px] text-[40px] select-none font-medium font-recoleta flex flex-col items-center text-primary'>
            <span className='text-primary'>Solana for here</span>
            <span className='text-primary'>There & everywhere</span>
          </h1>
          <p className='md:text-[18px] text-[14px] text-center md:mt-10 mt-5 text-[#525769] leading-[1.3]'>
            The largest web design and iOS library for UX/UI inspiration, featuring real-life
            <br /> products and perfectly organized to fuel your creativity
          </p>
        </div>
        <div
          className={cn(
            'w-full h-auto',
            'before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-b from-[#fff] to-transparent before:z-20 before:w-full before:h-[20%]',
            'after:content-[""] after:absolute after:bottom-0 after:bg-gradient-to-t from-[#fff] to-transparent after:z-20 after:w-full after:h-[40%]',
          )}>
          <figure className='w-full h-full object-cover'>
            <Image src={'/banner.png'} alt='ctamp logo' fill className='object-cover' />
          </figure>

          <svg
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-full'
            width='1397'
            height='1351'
            viewBox='0 0 1397 1351'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <g filter='url(#filter0_f_19_647)'>
              <ellipse cx='698.5' cy='675.5' rx='446.5' ry='423.5' fill='white' fillOpacity='0.69' />
            </g>
            <defs>
              <filter
                id='filter0_f_19_647'
                x='0.446808'
                y='0.446808'
                width='1396.11'
                height='1350.11'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'>
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='125.777' result='effect1_foregroundBlur_19_647' />
              </filter>
            </defs>
          </svg>
        </div>
        <CTA />
      </section>
    </main>
  )
}
