import { Disclosure } from '@headlessui/react';
import { Link } from 'react-router-dom';

export default function DesktopSideBar({ SideBarItems }) {
  return (
    <form className="hidden lg:block w-[20%] bg-white p-6 rounded-lg shadow-md">
      {SideBarItems.map((section) => (
        <Disclosure as="div" key={section.id} className="mb-4">
          {({ open }) => (
            <>
              <h3 className="flow-root">
                <Link to={section.link} className="flex w-full items-center justify-between text-sm hover:border border-gray-200 hover:bg-gray-100 rounded-lg p-3">
                  <div className="flex items-center">
                    <i className={`${section.icon} text-gray-500 mr-3`} aria-hidden="true"></i>
                    <span className="font-semibold text-lg text-gray-800 hover:text-gray-600">{section.name}</span>
                  </div>
                </Link>
              </h3>
            </>
          )}
        </Disclosure>
      ))}
    </form>
  );
}
