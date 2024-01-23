import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function About() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="relative bg-black h-screen w-screen flex flex-col justify-center items-start px-20 pt-16">
          <h1>Welcome to Rough Draft Media</h1>
          <p>Founded in 2024</p>
      </div>
      <Footer />
    </div>
  )
}
