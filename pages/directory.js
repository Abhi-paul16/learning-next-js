import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
const directory = () => {
  return (
    <div>
      <Head>
      <title> Directory</title>
      
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
    <div>directory see how cool next js is</div>
    <Image
    src="/images/black-mafia.jpg"
    height={150}
    width={150}
    alt="civic mafia"
    />
    <h2>
    <Link href="/">Back to home</Link>
  </h2>
  </div>
  )
}

export default directory