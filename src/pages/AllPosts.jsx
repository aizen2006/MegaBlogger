import React, { useEffect } from 'react'
import service from '../appwrite/config.js'
import { Container, PostCard } from '../components/index.js'
function AllPosts() {
    const [posts, setPosts] = React.useState([]);
    useEffect(() => {
        // Don't pass an empty array, let it use the default query
        service.getPosts().then((res) => {
            if (res && res.documents) {
                setPosts(res.documents);
            }
        }).catch((err) => {
            console.log(err);
        });
    }, []);
  return (
    <div className='w-full py-8 px-4'>
        <Container>
            <h1 className='text-4xl font-bold mb-8 text-center' style={{ color: '#FA9A91' }}>
                All Posts
            </h1>
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

export default AllPosts