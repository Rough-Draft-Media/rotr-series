import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import SocialLinks from '@/components/socialLinks'
import pages from '@/pages/pages.json'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  function iconClass(name) {
    return `bx bx-${name} bx-sm h-11 w-11 flex justify-center items-center rounded-md`
}

  return (
    <Disclosure as="nav" className="cursor-pointer bg-transparent w-full fixed top-0 z-40">
      {({ open }) => (
        <>
          <Script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></Script>
          <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative text-zinc-100 hover:bg-zinc-100/30 rounded-md">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <i className={iconClass("x") + " bg-zinc-100/30"}></i>
                  ) : (
                    <i className={iconClass("menu")}></i>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center hidden">
                  <Link href='/'>
                    <Image
                      src="./wordmark.white.svg"
                      alt="Rough Draft Media logo"
                      width={150}
                      height={36}
                    />
                  </Link>
                </div>
              </div>
              <div className='block'>
                <SocialLinks />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
            <div className="space-y-1 py-3 w-48 rounded-md bg-zinc-100/20">
              {pages.map((item) => (
                <Disclosure.Button
                  key={item.title}
                  as="a"
                  href={item.href}
                  className={classNames('text-zinc-100 hover:bg-zinc-100/30 font-light block px-4 py-2 text-base mx-2 rounded'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.title}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
