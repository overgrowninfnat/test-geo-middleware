import Head from 'next/head'
import Image from 'next/image'

export default function NotLegalPage() {
    return(
        <div className="w-screen h-screen bg-purple-400 flex flex-col justify-center items-center">
      <Head>
        <title>Not legal in Italy</title>
      </Head>
      <h1 className='text-4xl text-white mb-10'>NOT LEGAL IN ITALY</h1>
      <Image
        src="/notpineapplepizza.png"
        width={400}
        height={400}
        layout='fixed'
        className='rounded-xl'
      />
    </div>
    )
}