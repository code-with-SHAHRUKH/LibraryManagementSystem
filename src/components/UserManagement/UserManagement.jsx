import React, { useState } from 'react';
import { FunnelIcon, EyeIcon, PencilSquareIcon, } from '@heroicons/react/24/outline';
import {TrashIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function UserManagement() {
  const { t } = useTranslation();

  const Users = [
    { "ManageLibrary": t('UserManagement.ManageLibrary.Civil Department'), "Name": t('UserManagement.Name.Shazain'), "Role": t('UserManagement.Role.Admin'), "id": 1 },
    { "ManageLibrary": t('UserManagement.ManageLibrary.Electrical Department'), "Name": t('UserManagement.Name.Hassan'), "Role": t('UserManagement.Role.Librarian'), "id": 2 },
    { "ManageLibrary": t('UserManagement.ManageLibrary.Mechanical Department'), "Name": t('UserManagement.Name.Ali'), "Role": t('UserManagement.Role.Operator'), "id": 3 },
    { "ManageLibrary": t('UserManagement.ManageLibrary.Computer Science'), "Name": t('UserManagement.Name.Ahmed'), "Role": t('UserManagement.Role.Librarian'), "id": 4 },
    { "ManageLibrary": t('UserManagement.ManageLibrary.Chemical Engineering'), "Name": t('UserManagement.Name.Fahad'), "Role": t('UserManagement.Role.Admin'), "id": 5 }
  ];
  const heading=['user', 'name', 'manageLibrary', 'roleAssign', 'actions'];


  function edditUser(e, user) {
 console.log("User to edit:", user);
  }
  function DeleteUser(e, user) {
    console.log("User to delete:", user);
     }
  function HandleStatus(e, user) {
console.log("User clicked:", user);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:space-x-3">
        <div className="flex-1 bg-white rounded-lg shadow-md mb-10 lg:mt-0">
          <main className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row pl-1 pr-1 gap-2 sm:gap-4 items-center justify-between border-b border-gray-300">
              <h1 className="text-xl sm:text-2xl mb-6 md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 text-center sm:text-left">
                {t('UserManagement.title')}
              </h1>
       
            </div>

            {/* Users List start */}
            <div id="pol">
              <Link
                to='/addNewUser'
                className="flex items-center justify-start rounded-md bg-green-600 text-sm sm:text-lg font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 px-4 py-2 sm:px-6 sm:py-2 mt-4 sm:mt-6 mb-4 sm:mb-6 w-40 sm:w-52"
              >
              {t('userForm.title')}
              </Link>
              <div className="overflow-x-auto mx-0" id='kl'>
                <div className="bg-gray-100 font-sans overflow-hidden">
                  <div className="w-full">
                    <div className="bg-white shadow-md rounded mx-0">
                      <table className="w-full">
                      <thead>
                   <tr className="bg-gray-200 text-gray-600 uppercase text-xs sm:text-sm md:text-base leading-normal">
             {heading.map((field) => (
               <th key={field} className="py-2 px-2 sm:py-3 sm:px-3 text-center">
                  {t(`userForm.${field}`)}
                      </th>
                    ))}
                            </tr>
                      </thead>
                        <tbody className="text-gray-600 text-xs sm:text-sm md:text-base font-light">
                          {
                            Users.map(user => (
                              <tr key={user.id} className="border-b border-gray-200">
                                <td className="py-2 px-2 sm:py-3 sm:px-3 text-center whitespace-nowrap">
                                  <div className="flex items-center justify-center">
                                    <span className="font-medium border-b">{user.id}</span>
                                  </div>
                                </td>
                                <td className="py-2 px-2 sm:py-3 sm:px-3 text-center">
                                  <div className="flex items-center justify-center">
                                    <span className="font-bold">{user.Name}</span>
                                  </div>
                                </td>
                                <td className="py-2 px-2 sm:py-3 sm:px-3 text-center">
                                  <span className="font-medium">{user.ManageLibrary}</span>
                                </td>
                                <td className="py-2 px-2 sm:py-3 sm:px-3 text-center">
                                  <select
                                    className="text-xs sm:text-sm md:text-base"
                                    onChange={(e) => HandleStatus(e, user)}
                                    value={user.Role}
                                  >
                                    <option value="Admin">Admin</option>
                                    <option value="Librarian">Librarian</option>
                                    <option value="Operator">Operator</option>
                                  </select>
                                </td>
                                <td className="py-2 px-2 sm:py-3 sm:px-3 text-center">
                                  <div className="flex item-center justify-center md:flex-row gap-1 flex-col">
                                    <Link to={`/admin/user-detail/${user.id}`}>
                                      <EyeIcon className="w-3 h-3 sm:w-6 sm:h-6 md:w-6 md:h-6 hover:text-purple-500 hover:scale-110 transform" />
                                    </Link>
                                    <PencilSquareIcon
                                      className="w-3 h-3 sm:w-6 sm:h-6 md:w-6 md:h-6 hover:text-purple-500 hover:scale-110 transform"
                                      onClick={(e) => edditUser(e, user)}
                                    />
                                    <TrashIcon
                                    className="w-3 h-3 sm:w-6 sm:h-6 md:w-6 md:h-6 hover:text-purple-500 hover:scale-110 transform"
                                      onClick={(e) => DeleteUser(e, user)}
                                    />
                                  </div>
                                </td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Users List end */}
          </main>
        </div>
      </div>
    </div>
  );
}
