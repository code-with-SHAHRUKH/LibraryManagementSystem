import React, { useState, Fragment } from 'react';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { XMarkIcon, FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
export default function Dashboard() {
  
  const { t } = useTranslation();
  const filters = [
    { id: 'data-entry', name: t('Data Entry'), icon: 'fas fa-database' },
    { id: 'book-orders', name: t('Book Orders'), icon: 'fas fa-book' },
    { id: 'qr-codes', name: t('QR Codes'), icon: 'fas fa-qrcode' },
    { id: 'other-details', name: t('Other Details'), icon: 'fas fa-info-circle' },
  ];

  const mockData = {
    totalBooks: 1200,
    recentAdditions: 45,
    issues: 15,
    returns: 30,
  };

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:space-x-3">
        {/* Desktop Filter dialog for side bar */}
        <DesktopFilter filters={filters} />

        {/* Main Content */}
        <div className="flex-1 bg-white rounded-lg shadow-md mt-6 lg:mt-0">
          {/* Mobile filter dialog for side bar  */}
          <MobileFilter
            filters={filters}
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
          />

          <main className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-row-reverse sm:flex-row pl-1 pr-1 gap-0 sm:gap-1 sm:p-5 items-center justify-center sm:justify-between border-b border-gray-300">
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 text-center sm:text-left">
               { t('dashboard')}
              </h1>

              <div className="mt-2 sm:mt-0 sm:ml-4 flex items-center justify-center">
                <button
                  type="button"
                  className="-m-2 mr-0 mb-0 p-2 text-gray-400 hover:text-gray-500 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FunnelIcon className="sm:mt-2 mt-1 sm:h-7 sm:w-7 h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
                {/*  Dashboard Grid Cards */}
            <section aria-labelledby="dashboard-stats" className="pt-6 pb-24">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                <StatCard 
                  title="Total Books" 
                  value={mockData.totalBooks} 
                  iconClass="fas fa-book" 
                  bgColor="bg-blue-500" 
                />
                <StatCard 
                  title="Recent Additions" 
                  value={mockData.recentAdditions} 
                  iconClass="fas fa-plus" 
                  bgColor="bg-green-500" 
                />
                <StatCard 
                  title="Issues" 
                  value={mockData.issues} 
                  iconClass="fas fa-exclamation" 
                  bgColor="bg-red-500" 
                />
                <StatCard 
                  title="Returns" 
                  value={mockData.returns} 
                  iconClass="fas fa-reply" 
                  bgColor="bg-yellow-500" 
                />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

function MobileFilter({ mobileFiltersOpen, setMobileFiltersOpen, filters }) {
  return (
    <Transition.Root show={mobileFiltersOpen} as={Fragment}>
      <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
        <Transition.Child
          as={Fragment}
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
            as={Fragment}
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
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 m-1 border border-gray-100 px-1 py-6 rounded-md bg-gray-50">
                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="">
                    {({ open }) => (
                      <>
                      <h3 className="flow-root">
                <Disclosure.Button className="flex w-full items-center justify-between text-sm hover:border border-gray-200 hover:bg-gray-100 rounded-lg p-3">
                  <span className="font-semibold text-lg text-gray-800 hover:text-gray-600">{section.name}</span>
                </Disclosure.Button>
              </h3>
                 
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}


function DesktopFilter({ filters }) {
  return (
    <form className="hidden lg:block w-[20%] bg-white p-6 rounded-lg shadow-md ">
      {filters.map((section) => (
        <Disclosure as="div" key={section.id} className="mb-4">
          {({ open }) => (
            <>
              <h3 className="flow-root">
                <Disclosure.Button className="flex w-full items-center justify-between text-sm hover:border border-gray-200 hover:bg-gray-100 rounded-lg p-3">
                  <div className="flex items-center">
                    <i className={`${section.icon} text-gray-500 mr-3`} aria-hidden="true"></i>
                    <span className="font-semibold text-lg text-gray-800 hover:text-gray-600">{section.name}</span>
                  </div>
                </Disclosure.Button>
              </h3>
            </>
          )}
        </Disclosure>
      ))}
    </form>
  );
}



function StatCard({ title, value, iconClass, bgColor }) {
  return (
    <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-2xl font-bold text-gray-700">{value}</p>
      </div>
      <div className={`${bgColor} text-white p-3 sm:p-4 rounded-full`}>
        <i className={iconClass}></i>
      </div>
    </div>
  );
}
