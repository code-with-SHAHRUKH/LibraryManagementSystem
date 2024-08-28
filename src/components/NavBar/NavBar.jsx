import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../ReduxStore/languageSlice';
import { useTranslation } from 'react-i18next';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const imageUrl = '/icons/blue.png';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Navbar({ children }) {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.language);
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const navigation = [
    { name: t('dashboard'), link: '/', admin: true },
    { name: t('Book Management'), link: '/bookManagement', user: true },
    { name: t('User Management'), link: '/userManagement', admin: true },
  ];
  
  const userNavigation = [
    { name: 'English mode', lang: 'en' },
    { name: 'Urdu Mode', lang: 'ur' },
    { name: 'Log Out', link: '/Logout' },
  ];

  function handleLanguageChange(lang) {
    if (lang === 'ur') {
      dispatch(setLanguage('ur'));
      i18n.changeLanguage('ur');
    } else {
      dispatch(setLanguage('en'));
      i18n.changeLanguage('en');
    }
  }

  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.link}
                          className={classNames(
                            'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none">
                          <img className="h-10 w-10 rounded-full" src={imageUrl} alt="User profile" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <Link
                                  to={item.link}
                                  onClick={item.lang ? () => handleLanguageChange(item.lang) : null}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className={classNames(
                      'block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-700 hover:text-white text-left'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="px-2">
                  <div className="ml-auto">
                    {userNavigation.map((item) => (
                      <Link
                        key={item.name}
                        onClick={item.lang ? () => handleLanguageChange(item.lang) : null}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white text-left"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {/* You can add a title here if needed */}
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}

export default Navbar;
