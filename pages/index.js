import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Loader from '../components/Loader'
export default function Home() {

  return (
    <main>
      <div>
        
        <Loader show /> {/* show loader anytime there is no content */}
        <button>toast me</button>

      </div>
    </main>
  )
}
