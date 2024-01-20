import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import PostCard from '../components/PostCard';

const IndividualPosts = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const username = queryParams.get('user');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/v1/post?user=${username}`);
        setPosts(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div className='container mx-auto py-8'>
      <h2 className='text-3xl font-semibold mb-6'>
        Posts by {username || 'User'}
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {posts.map((post) => (
          <PostCard key={post._id} items={post} />
        ))}
      </div>
    </div>
  );
};

export default IndividualPosts;
