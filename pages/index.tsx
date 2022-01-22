import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-purple-400 flex flex-col justify-center items-center">
      <Head>
        <title>Pineapple Pizza | Not for italians</title>
      </Head>
      <h1 className='text-4xl text-white mb-10'>Yummy Pineapple Pizza</h1>
      <Image
        src="/pineapplepizza.png"
        width={200}
        height={200}
        layout='fixed'
        className='rounded-xl'
      />
      <button className="bg-purple-700 text-white px-6 py-2 rounded-lg mt-10 shadow-lg"
        onClick={() => alert(`We will deliver in ${Math.random()} sec`)}
      >Order Now</button>
    </div>
  )
}
