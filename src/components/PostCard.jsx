import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'


function PostCard({$id , title , featuredImage }) {
  return (
    <Link to={`/post/${$id}`} >
      <div className="w-full bg-grey-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-200">
        <div className='w-full justify-center mb-4'>
            <img src={service.getFilePreview(featuredImage)} alt={title} className="w-full h-48 object-cover rounded-md mb-2" />
            <h2 className="text-xl font-semibold">{title}</h2>

        </div>
      </div>
    </Link>
  )
}

export default PostCard