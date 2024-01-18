import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

function PostCard() {
  return (
    <Card
      className='max-w-sm'
      imgAlt='Meaningful alt text for an image that is not purely decorative'
      imgSrc='laptop.jpg'
    >
      <div className='p-6'>
        <Link
          to='/post/:postId'
          className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline hover:text-blue-500'
        >
          Noteworthy technology acquisitions 2021
        </Link>
        <p className='font-normal text-gray-700 dark:text-gray-400'>
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className='mt-4'>
          <p className='text-blue-600 dark:text-blue-400'>React</p>
          <p className='text-green-600 dark:text-green-400'>JavaScript</p>
        </div>
        <hr className='my-4 border-gray-300 dark:border-gray-600' />
        <p className='text-gray-500 dark:text-gray-400'>1 hour ago</p>
      </div>
    </Card>
  );
}

export default PostCard;
