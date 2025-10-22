import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'


function PostCard({$id , title , featureImage }) {
  return (
    <Link to={`/post/${$id}`} >
      <div className="w-full bg-grey-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-200">
        <div className='w-full justify-center mb-4'>
            {featureImage ? (
              <>
                <img 
                  src={service.getFilePreview(featureImage)} 
                  alt={title} 
                  className="w-full h-48 object-cover rounded-md mb-2" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div 
                  className="w-full h-48 bg-gray-200 rounded-md mb-2 flex items-center justify-center"
                  style={{ display: 'none' }}
                >
                  <span className="text-gray-500">Image not available</span>
                </div>
              </>
            ) : (
              <div 
                className="w-full h-48 bg-gray-200 rounded-md mb-2 flex items-center justify-center"
              >
                <span className="text-gray-500">No Image</span>
              </div>
            )}
            <h2 className="text-xl font-semibold">{title}</h2>
        </div>
      </div>
    </Link>
  )
}

export default PostCard