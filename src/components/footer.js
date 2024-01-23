import Image from 'next/image'
import Link from 'next/link'
import SocialLinks from '@/components/socialLinks'
import pages from '@/pages/pages.json'
import resources from '@/pages/resources.json'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Footer() {
  return (
    <>
      <footer className="w-full border-t-2 border-zinc-100/20 bg-zinc-900 z-50">
        <div className="container mx-auto  py-2 text-white flex flex-col items-start space-y-4">
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex flex-row -space-x-2">
              <Image src='./production.glyph.svg' alt='Triple Squirrels logo' width={36} height={36} />
              <Image src='./production.wordmark.svg' alt='Triple Squirrels wordmark' width={150} height={36} />
            </div>
            <div className="">
              <SocialLinks />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}