import { useEffect, useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get('/api/v1/post/' + path);
        setPost(res.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    getPost();
  }, [path]);

  return (
    <div className=''>
      <div className='card space-y-5 mt-2 h-screen flex-col '>
        <div className='image'>
          <img
            src={`/${post.photo}`}
            alt='img'
            className='w-full h-64 object-cover'
          />
        </div>
        <div className='above p-4'>
          <div className='space-y-2'>
            <h1 className='text-2xl md:text-4xl font-bold'>{post.title}</h1>
            <div className='flex items-center space-x-4'>
              <Link
                to={`/individual-posts?user=${post.username}`}
                className='text-blue-500 hover:underline'
              >
                {post.username}
              </Link>
              <span className='text-gray-500'>
                {new Date(post.createdAt).toDateString()}
              </span>
            </div>
            <div className='flex items-center space-x-4'>
              <AiFillDelete className='text-red-500 cursor-pointer hover:scale-125' />
              <AiFillEdit className='text-blue-500 cursor-pointer hover:scale-125' />
            </div>
          </div>
        </div>
        <div className='p-4'>
          <p className='text-gray-700'>{post.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
