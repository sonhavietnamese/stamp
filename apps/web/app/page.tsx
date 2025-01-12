import Image from 'next/image'

export default function Page() {
  return (
    <main className='w-dvw h-dvh font-satoshi'>
      <figure className='w-full h-auto relative'>
        <Image src='/banner.webp' alt='web' sizes='100vw' width={0} height={0} className='w-full object-cover' />
      </figure>
    </main>
  )
}
