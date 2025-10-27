import React from 'react'
import {Container , PostForm} from '../components/index.js'

function AddPost() {
  return (
    <div className='py-8 px-4'>
        <Container>
            <h1 className='text-4xl font-bold mb-8 text-center' style={{ color: '#FA9A91' }}>
                Create New Post
            </h1>
            <div 
                className='rounded-2xl p-8 shadow-lg'
                style={{ 
                    backgroundColor: '#FFFFFF',
                    border: '2px solid #B8A9CA'
                }}
            >
                <PostForm />
            </div>
        </Container>
    </div>
  )
}

export default AddPost