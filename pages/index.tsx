import Head from 'next/head'
import Layout from '../components/layout';

export default function Home() {
  return (
    <>
    <Head>
      <title>Gondy Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout rows={3} columns={4} />
    </>
  )
}
