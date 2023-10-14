import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Results from '@/components/Results'
import requests from '@/utils/requests'


const inter = Inter({ subsets: ['latin'] })

export default function Home({results}) {
  
  return (
    <>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Clone for Hulu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header/>

      {/* nav */}
      <Nav/>
      <Results results={results}/>

      
    </>
  )
}

export async function getServerSideProps(context){
  const genre = context.query.genre
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      results: request.results
    }
  }
}