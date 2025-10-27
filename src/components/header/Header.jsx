import React from 'react'
import Container from '../container/container.jsx'
import Logo from '../Logo.jsx'
import LogoutBtn from './LogoutBtn.jsx'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', slug: '/' ,active : true },
    { name: 'Login', slug: '/login' ,active : !authStatus },
    { name: 'Signup', slug: '/signup' ,active : !authStatus },
    { name: 'All Posts', slug: '/all-posts' ,active : authStatus },
    { name: 'Add Posts', slug: '/add-posts' ,active : authStatus },
  ];

  return (
    <header 
      className='py-4 shadow-lg fixed top-0 left-0 right-0 z-50 backdrop-blur-sm' 
      style={{ 
        background: 'linear-gradient(135deg, #FA9A91 0%, #B8A9CA 100%)',
        boxShadow: '0 4px 6px -1px rgba(250, 154, 145, 0.2)'
      }}
    >
      <Container>
        <nav className='flex items-center'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='48px' />
            </Link>
          </div>
          <ul className='flex ml-auto items-center gap-2'>
            {navItems.map((item) => 
              item.active ? (
               <li key={item.name}>
                <button 
                  onClick={() => navigate(item.slug)}
                  className='inline-block px-6 py-2 duration-200 rounded-full font-medium text-white hover:scale-105 transition-all'
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#FADDA3'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                >
                  {item.name}
                </button>
               </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header