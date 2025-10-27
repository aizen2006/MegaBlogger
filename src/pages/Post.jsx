import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import { Btn, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) { 
            service.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deleteFile(post.featureImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8 px-4">
            <Container>
                <div 
                    className="w-full flex justify-center mb-6 relative rounded-2xl p-4 border-2"
                    style={{ borderColor: '#FADDA3', backgroundColor: '#FFFFFF' }}
                >
                    <img
                        src={service.getFilePreview(post.featureImage)}
                        alt={post.title}
                        className="rounded-xl max-w-full"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                    <div 
                        className="w-full h-64 rounded-xl flex items-center justify-center"
                        style={{ display: 'none', backgroundColor: '#FDF0DA' }}
                    >
                        <span style={{ color: '#4A4A4A' }}>Image not available</span>
                    </div>

                    {isAuthor && (
                        <div className="absolute right-6 top-6 flex gap-2">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Btn bgColor="#B3E0C6" className="mr-3">
                                    Edit
                                </Btn>
                            </Link>
                            <Btn bgColor="#FF6B6B" onClick={deletePost}>
                                Delete
                            </Btn>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-4xl font-bold" style={{ color: '#FA9A91' }}>{post.title}</h1>
                </div>
                <div 
                    className="browser-css prose max-w-none p-6 rounded-2xl"
                    style={{ 
                        backgroundColor: '#FFFFFF',
                        border: '2px solid #B8A9CA',
                        color: '#4A4A4A'
                    }}
                >
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : (
        <div className="py-8">
            <Container>
                <div className="text-center">
                    <div className="p-8 rounded-2xl inline-block" style={{ backgroundColor: '#FFFFFF', border: '2px solid #FADDA3' }}>
                        <h1 className="text-3xl font-bold" style={{ color: '#FA9A91' }}>Loading...</h1>
                    </div>
                </div>
            </Container>
        </div>
    );
}