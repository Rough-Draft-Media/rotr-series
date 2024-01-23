import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Section from '@/components/section'
import SectionHeader from '@/components/sectionHeader'
import Slide from '@/components/slide'
import Modal from '@/components/modal'

export default function Home() {

  function watchTrailer() {
    // let modal = document.getElementByTag("Modal");
    // modal.open() = true;
    console.log("watch trailer");
  }

  function iconClass(name) {
    return `bx bx-${name} bx-sm mb-1`;
  }

  return (
    <div className="bg-zinc-900">
      <div className="opacity-60 absolute h-screen w-full z-10">
        <video src="./background.mp4" autoPlay="{true}" loop muted className="absolute z-10 min-w-full h-screen object-cover" >
        </video>
      </div>
      <Navbar />
      <div className="z-10 relative mix-blend-lighten">
          <div className="relative bg-transparent h-screen md:w-1/2 w-3/4 mx-auto">
            <Image
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src="/wordmark.svg"
              alt="Rough Draft Media logo"
              width={560}
              height={100}
            />
          </div>
          <div className="absolute flex flex-row justify-center -translate-x-1/2 -translate-y-3/4 top-3/4 left-1/2">
            {/* <button onClick={watchTrailer} className="flex flex-row justify-center items-center text-zinc-900 bg-zinc-100 px-6 h-14 rounded-md mt-10 transform hover:bg-zinc-100/60 transition ease-in-out" href='#about'>
              <i className={iconClass("play")}></i>
              <p>Watch trailer</p>
            </button> */}
            <Modal />
            <Link className="flex justify-center items-center text-zinc-100 bg-transparent px-6 h-14 rounded-md mt-10 transform hover:text-zinc-100/60 transition ease-in-out" href='#about'>
              <p >Learn more</p>
            </Link>
          </div>
      </div>

      <Section>
        <SectionHeader>About</SectionHeader>
        <Slide current="about" next="#a1" bg="/img/background.image.1.jpeg">
          <p>First slide</p>
        </Slide>
        <Slide current="a1" next="#contact" bg="/img/background.image.2.jpeg">
          <p>Second slide</p>
        </Slide>
      </Section>
      <Section>
        <SectionHeader>Contact</SectionHeader>
        <Slide current="contact" next="#s4" bg="/img/background.image.3.jpeg">
          <p>First slide</p>
        </Slide>
        <Slide current="s4" next="" bg="/img/background.image.3.jpeg">
          <p>Second slide</p>
        </Slide>
      </Section>
      <Footer />
    </div>
  )
}
