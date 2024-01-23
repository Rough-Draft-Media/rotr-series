import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function iconClass(name) {
    return `bx bx-${name} bx-sm mb-1`;
  }

  {/* <button onClick={watchTrailer} className="flex flex-row justify-center items-center text-zinc-900 bg-zinc-100 px-6 h-14 rounded-md mt-10 transform hover:bg-zinc-100/60 transition ease-in-out" href='#about'>
              <i className={iconClass("play")}></i>
              <p>Watch trailer</p>
            </button> */}

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="flex flex-row justify-center items-center text-zinc-900 bg-zinc-100 px-6 h-14 rounded-md mt-10 transform hover:scale-105 hover:bg-zinc-100 transition ease-in-out"
        ><i className={iconClass("play")} />
          Watch trailer
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/95" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex w-min transform overflow-hidden rounded p-0.5 bg-zinc-100/90 align-middle shadow-xl transition-all">
                  <div>
                    <iframe className="mx-auto" title="vimeo-player" src="https://player.vimeo.com/video/27246366?h=75fabdf419" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
