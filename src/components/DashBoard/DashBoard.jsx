import React, { useState } from 'react';
import { FunnelIcon } from '@heroicons/react/24/outline';
import DesktopSideBar from './DashBoardComponents/DesktopSideBar';
import MobileSideBar from './DashBoardComponents/MobileSideBar';
import { useTranslation } from 'react-i18next';
import StatCard from './DashBoardComponents/StatCard';

export default function Dashboard() {
  const { t } = useTranslation();
  const [mobileSideBarOpen, setMobileSideBarOpen] = useState(false);

  const SideBarItems = [
    { id: 'data-entry', name: t('Data Entry'), link: '/', icon: 'fas fa-database' },
    { id: 'book-orders', name: t('Book Orders'), link: '/', icon: 'fas fa-book' },
    { id: 'qr-codes', name: t('QR Codes'), link: '/printLabel', icon: 'fas fa-qrcode' },
    { id: 'other-details', name: t('Other Details'), link: '/', icon: 'fas fa-info-circle' },
  ];

  const stats = [
    { id: 'total-books', title: t('Total Books'), value: 1200, iconClass: 'fas fa-book', bgColor: 'bg-blue-500' },
    { id: 'recent-additions', title: t('Recent Additions'), value: 45, iconClass: 'fas fa-plus', bgColor: 'bg-green-500' },
    { id: 'issues', title: t('Issues'), value: 15, iconClass: 'fas fa-exclamation', bgColor: 'bg-red-500' },
    { id: 'returns', title: t('Returns'), value: 30, iconClass: 'fas fa-reply', bgColor: 'bg-yellow-500' },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:space-x-3">
        {/* Desktop Sidebar */}
        <DesktopSideBar SideBarItems={SideBarItems} />

        {/* Main Content */}
        <div className="flex-1 bg-white rounded-lg shadow-md mt-6 lg:mt-0">
          {/* Mobile Sidebar */}
          <MobileSideBar
            SideBarItems={SideBarItems}
            mobileSideBarOpen={mobileSideBarOpen}
            setMobileSideBarOpen={setMobileSideBarOpen}
          />

          <main className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-row-reverse sm:flex-row pl-1 pr-1 gap-0 sm:gap-1 sm:p-5 items-center justify-center sm:justify-between border-b border-gray-300">
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 text-center sm:text-left">
                {t('dashboard')}
              </h1>

              <div className="mt-2 sm:mt-0 sm:ml-4 flex items-center justify-center">
                <button
                  type="button"
                  className="-m-2 mr-0 mb-0 p-2 text-gray-400 hover:text-gray-500 lg:hidden"
                  onClick={() => setMobileSideBarOpen(true)}
                >
                  <span className="sr-only">{t('Filters')}</span>
                  <FunnelIcon className="sm:mt-2 mt-1 sm:h-7 sm:w-7 h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Dashboard Grid Cards */}
            <section aria-labelledby="dashboard-stats" className="pt-6 pb-24">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                {stats.map(({ id, title, value, iconClass, bgColor }) => (
                  <StatCard
                    key={id}
                    title={title}
                    value={value}
                    iconClass={iconClass}
                    bgColor={bgColor}
                  />
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
