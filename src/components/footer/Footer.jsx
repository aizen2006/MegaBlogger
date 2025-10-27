import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo.jsx'

function Footer() {
  return (
    <section 
      className="relative overflow-hidden py-12 border-t-2" 
      style={{ 
        backgroundColor: '#B8A9CA', 
        borderColor: '#FA9A91' 
      }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="48px" />
              </div>
              <div>
                <p className="text-sm" style={{ color: '#FDF0DA' }}>
                  &copy; Copyright 2025. All Rights Reserved by Megablogger.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase" style={{ color: '#FADDA3' }}>
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium transition-colors duration-200"
                    style={{ color: '#FDF0DA' }}
                    onMouseEnter={(e) => e.target.style.color = '#FA9A91'}
                    onMouseLeave={(e) => e.target.style.color = '#FDF0DA'}
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium transition-colors duration-200"
                    style={{ color: '#FDF0DA' }}
                    onMouseEnter={(e) => e.target.style.color = '#FA9A91'}
                    onMouseLeave={(e) => e.target.style.color = '#FDF0DA'}
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium transition-colors duration-200"
                    style={{ color: '#FDF0DA' }}
                    onMouseEnter={(e) => e.target.style.color = '#FA9A91'}
                    onMouseLeave={(e) => e.target.style.color = '#FDF0DA'}
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium transition-colors duration-200"
                    style={{ color: '#FDF0DA' }}
                    onMouseEnter={(e) => e.target.style.color = '#FA9A91'}
                    onMouseLeave={(e) => e.target.style.color = '#FDF0DA'}
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase" style={{ color: '#FADDA3' }}>
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium transition-colors duration-200"
                    style={{ color: '#FDF0DA' }}
                    onMouseEnter={(e) => e.target.style.color = '#FA9A91'}
                    onMouseLeave={(e) => e.target.style.color = '#FDF0DA'}
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium transition-colors duration-200"
                    style={{ color: '#FDF0DA' }}
                    onMouseEnter={(e) => e.target.style.color = '#FA9A91'}
                    onMouseLeave={(e) => e.target.style.color = '#FDF0DA'}
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium transition-colors duration-200"
                    style={{ color: '#FDF0DA' }}
                    onMouseEnter={(e) => e.target.style.color = '#FA9A91'}
                    onMouseLeave={(e) => e.target.style.color = '#FDF0DA'}
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium transition-colors duration-200"
                    style={{ color: '#FDF0DA' }}
                    onMouseEnter={(e) => e.target.style.color = '#FA9A91'}
                    onMouseLeave={(e) => e.target.style.color = '#FDF0DA'}
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase" style={{ color: '#FADDA3' }}>
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium transition-colors duration-200"
                    style={{ color: '#FDF0DA' }}
                    onMouseEnter={(e) => e.target.style.color = '#FA9A91'}
                    onMouseLeave={(e) => e.target.style.color = '#FDF0DA'}
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium transition-colors duration-200"
                    style={{ color: '#FDF0DA' }}
                    onMouseEnter={(e) => e.target.style.color = '#FA9A91'}
                    onMouseLeave={(e) => e.target.style.color = '#FDF0DA'}
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium transition-colors duration-200"
                    style={{ color: '#FDF0DA' }}
                    onMouseEnter={(e) => e.target.style.color = '#FA9A91'}
                    onMouseLeave={(e) => e.target.style.color = '#FDF0DA'}
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer