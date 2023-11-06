import React, { useState } from 'react'
// Disclosure
import { Disclosure } from '@headlessui/react'
// react-router-dom
import { Link } from 'react-router-dom'
// @mui/material
import IconButton from '@mui/material/IconButton'
// @mui/icons-material
import TranslateIcon from '@mui/icons-material/Translate'

interface NavigationType {
  label: string
  route: string
}

type NavigationDataType = NavigationType[]

const navigation: NavigationDataType = [
  {
    label: 'home',
    route: '/',
  },
  {
    label: 'about',
    route: '/bout',
  },
]

export default function Navbar() {
  const [currentNav, setCurrentNav] = useState<string>('/')
  console.log(setCurrentNav)
  return (
    <div className="w-full">
      <nav className="container flex relative flex-wrap items-center justify-between p-3 mx-auto xl:justify-between xl:px-0">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="">
                <Link to="/">
                  <span
                    style={{ height: '70px' }}
                    className="text-cyan-700 text-2xl font-medium space-x-2"
                  >
                    <img
                      src="/logo/logo-eng.png"
                      alt="N"
                      width="220"
                      height="70"
                    />
                  </span>
                </Link>
                <Disclosure.Button className="px-2 py-1 ml-auto text-gray-500 rounded-md  hover:text-cyan-700 focus:text-cyan-700 focus:bg-indigo-100 focus:outline-none xl:hidden">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="flex flex-wrap w-full my-5 xl:hidden">
                  <>
                    {navigation.map((item, index) => {
                      return (
                        <Link
                          key={index}
                          to={item.route}
                          className={`${
                            item.route === currentNav
                              ? 'text-cyan-700'
                              : 'text-gray-500'
                          } text-center w-full px-4 py-2 -ml- rounded-md hover:text-cyan-700 focus: text-cyan-700 focus:outline-none`}
                        >
                          {item.label}
                        </Link>
                      )
                    })}
                    <div className="text-center w-full px-4 py-2 text-gray-500 rounded-md hover:text-cyan-700 focus:text-cyan-700 focus:outline-none">
                      <IconButton className="text-gray-500">
                        <TranslateIcon />
                      </IconButton>
                    </div>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
        {/* 菜单 */}
        <div className="text-center xl:flex xl:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none xl:pt-0 xl:flex">
            {navigation.map((menu, index) => {
              return (
                <li key={index} className="nav__item">
                  <Link
                    to={menu.route}
                    className={`${
                      menu.route === currentNav
                        ? 'text-cyan-700'
                        : 'text-gray-800'
                    } font-bold inline-block px-4 py-2 text-lg font-normal  no-underline rounded-md   hover:text-cyan-700 focus:text-cyan-700 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800`}
                  >
                    {menu.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="hidden mr-3 space-x-4 xl:flex nav__item">
          <div>
            <IconButton className="text-gray-500">
              <TranslateIcon />
            </IconButton>
            <button>Login</button>
          </div>
        </div>
      </nav>
    </div>
  )
}
