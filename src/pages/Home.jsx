import React, {useEffect, useState} from 'react'
import service from "../appwrite/config.js";
import Container from '../components/container/container.jsx'
import PostCard from '../components/PostCard.jsx'

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts && posts.documents) {
                setPosts(posts.documents)
            }
        }).catch((error) => {
            console.error('Error fetching posts:', error);
        }).finally(() => {
            setLoading(false);
        })
    }, [])
    if (loading) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex justify-center">
                        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #FADDA3' }}>
                            <h1 className="text-3xl font-bold" style={{ color: '#FA9A91' }}>
                                Loading...
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex justify-center">
                        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid #B8A9CA' }}>
                            <h1 className="text-3xl font-bold mb-4" style={{ color: '#FA9A91' }}>
                                Welcome to MegaBlogger
                            </h1>
                            <p style={{ color: '#4A4A4A' }}>Login to read and create amazing posts</p>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8 px-4'>
            <Container>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {posts.map((post) => (
                        <div key={post.$id}>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home