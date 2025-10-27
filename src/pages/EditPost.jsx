import React, {useEffect, useState} from 'react'
import Container from '../components/container/container.jsx'
import PostForm from '../components/post-form/postForm.jsx'
import service from "../appwrite/config.js";
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8 px-4'>
        <Container>
            <h1 className='text-4xl font-bold mb-8 text-center' style={{ color: '#FA9A91' }}>
                Edit Post
            </h1>
            <div 
                className='rounded-2xl p-8 shadow-lg'
                style={{ 
                    backgroundColor: '#FFFFFF',
                    border: '2px solid #B8A9CA'
                }}
            >
                <PostForm post={post} />
            </div>
        </Container>
    </div>
  ) : null
}

export default EditPost