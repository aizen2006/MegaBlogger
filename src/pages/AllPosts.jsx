import React, { useEffect } from 'react'
import service from '../appwrite/config.js'
import { Container, PostCard } from '../components/index.js'
function AllPosts() {
    const [posts, setPosts] = React.useState([]);
    useEffect(() => {
        service.getPosts([]).then((res) => {
            setPosts(res.documents);
        }).catch((err) => {
            console.log(err);
        });
    }, []);
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard post={post} />
                    </div>
                ))}
            </div>
        </Container>
        <Container />
    </div>
  )
}

export default AllPosts