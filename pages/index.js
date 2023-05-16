import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import TopCards from '../components/TopCards'
import Charts from '../components/Charts'
import Tasks from '../components/Tasks'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jobit | Track & Manage Job Search</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        
      </Head>
      <main className='bg-gray-100 min-h-screen'>
        <Header /> 
        <TopCards />
        <div className='p-4 grid md:grid-cols-3 grid-cols-2 gap-4'>
          <Charts />
          <Tasks />
        </div>
         
      </main>
    </>
  )
}
