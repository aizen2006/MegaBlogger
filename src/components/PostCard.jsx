import React from 'react'
import service from '../appwrite/config.js'
import { Link } from 'react-router-dom'


function PostCard({$id , title , featureImage }) {
  return (
    <Link to={`/post/${$id}`} >
      <div 
        className="w-full bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:scale-105" 
        style={{ 
          borderColor: '#FADDA3',
          backgroundColor: '#FFFFFF'
        }}
      >
        <div className='w-full justify-center mb-4'>
            {featureImage ? (
              <>
                <img 
                  src={service.getFilePreview(featureImage)} 
                  alt={title} 
                  className="w-full h-48 object-cover rounded-xl mb-3" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div 
                  className="w-full h-48 rounded-xl mb-3 flex items-center justify-center"
                  style={{ display: 'none', backgroundColor: '#FDF0DA' }}
                >
                  <span style={{ color: '#4A4A4A' }}>Image not available</span>
                </div>
              </>
            ) : (
              <div 
                className="w-full h-48 rounded-xl mb-3 flex items-center justify-center"
                style={{ backgroundColor: '#FDF0DA' }}
              >
                <span style={{ color: '#4A4A4A' }}>No Image</span>
              </div>
            )}
            <h2 className="text-xl font-semibold" style={{ color: '#4A4A4A' }}>{title}</h2>
        </div>
      </div>
    </Link>
  )
}

export default PostCard