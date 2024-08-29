import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

export default function MobileSideBar({ mobileSideBarOpen, setMobileSideBarOpen, SideBarItems }) {
  return (
    <Transition.Root show={mobileSideBarOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileSideBarOpen}>
        <Transition.Child
          as={React.Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={React.Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Side Bar</h2>
                <button
                  type="button"
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                  onClick={() => setMobileSideBarOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Side Bar Items */}
              <div className="mt-4 m-1 border border-gray-100 px-1 py-6 rounded-md bg-gray-50">
                {SideBarItems.map((section) => (
                  <Link 
                    key={section.id}
                    to={section.link} 
                    className="block w-full text-left text-sm hover:border border-gray-200 hover:bg-gray-100 rounded-lg p-3"
                  >
                    <span className="font-semibold text-lg text-gray-800 hover:text-gray-600">{section.name}</span>
                  </Link>
                ))}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
