import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

const SinglePost = () => {
  return (
    <div className=''>
      <div className='card space-y-5 mt-2 h-screen flex-col '>
        <div className='image'>
          <img
            src='laptop.jpg'
            alt='img'
            className='w-full h-64 object-cover'
          />
        </div>
        <div className='above p-4'>
          <div className='space-y-2'>
            <h1 className='text-2xl md:text-4xl font-bold'>
              Noteworthy Technology Acquisitions 2021
            </h1>
            <div className='flex items-center space-x-4'>
              <span className='text-gray-500'>Author: John Doe</span>
              <span className='text-gray-500'>1 hour ago</span>
            </div>
            <div className='flex items-center space-x-4'>
              <AiFillDelete className='text-red-500 cursor-pointer hover:scale-125' />
              <AiFillEdit className='text-blue-500 cursor-pointer hover:scale-125' />
            </div>
          </div>
        </div>
        <div className='p-4'>
          <p className='text-gray-700'>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
