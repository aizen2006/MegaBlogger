import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth.js'
import { logout as logoutAction } from '../../store/authSlice.js'
    
export default function LogoutBtn() {
  const dispatch = useDispatch()

  const handleLogout = async () => {
    await authService.logout().then(() => {
        dispatch(logoutAction())
      console.log("Logged out from Appwrite")
    }).catch((error) => {
      console.error("Error logging out from Appwrite:", error)
    })

  }

  return (
    <button onClick={handleLogout} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}

