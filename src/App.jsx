import './App.css'
import React , {useState , useEffect} from 'react'
import {useDispatch} from 'react-redux';
import authService from './appwrite/auth.js'
import {Header , Footer} from './components/index.js'
import {Outlet} from 'react-router-dom'
import {login , logout} from './store/authSlice.js'


function App() {
  const [loading , setLoading] = useState(true)
  const [envError, setEnvError] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    // Check if environment variables are properly set
    const appwriteUrl = import.meta.env.VITE_APPWRITE_URL;
    const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
    
    if (!appwriteUrl || !projectId) {
      setEnvError('Missing Appwrite environment variables. Please check your .env file.');
      setLoading(false);
      return;
    }
    // Don't try to get current user on app load - user isn't logged in yet
    // Just set loading to false and let the user navigate to login/signup
    setLoading(false);
  }, [])
  

  if (envError) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='text-center p-8 bg-white rounded-lg shadow-lg'>
          <h2 className='text-2xl font-bold text-red-600 mb-4'>Configuration Error</h2>
          <p className='text-gray-700 mb-4'>{envError}</p>
          <p className='text-sm text-gray-500'>Please create a .env file with your Appwrite credentials.</p>
        </div>
      </div>
    );
  }
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-grey-400 '>
      <div className='w-full block'>
        <Header />
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
          
        </div>
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='text-xl'>Loading...</div>
    </div>
  )
}

export default App
