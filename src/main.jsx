import './index.css'
import { Provider } from 'react-redux';
import { store } from './ReduxStore/Store.js';
import { I18nextProvider } from 'react-i18next';

import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import i18n from './i18n.js';
import DashBoard from './components/DashBoard/DashBoard.jsx'
import BookManagement from './components/BookManagement/BookManagement.jsx'
import UserManagement from './components/UserManagement/UserManagement.jsx'
import PrintLabel from './components/QrCodes/PrintLabel.jsx';
import AddUser from './components/UserManagement/AddUser.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<DashBoard />} />
      <Route path='bookManagement' element={<BookManagement />} />
      <Route path='addNewUser' element={<AddUser />} />
      <Route path='userManagement' element={<UserManagement />} />
      <Route path='printLabel' element={<PrintLabel/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
</I18nextProvider>
  </React.StrictMode>,
)
