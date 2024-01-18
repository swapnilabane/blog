import PostCard from './PostCard';

const Posts = () => {
  return (
    <div className='flex flex-wrap'>
      <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4'>
        <PostCard />
      </div>
      <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4'>
        <PostCard />
      </div>
      <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4'>
        <PostCard />
      </div>
      <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4'>
        <PostCard />
      </div>
    </div>
  );
};

export default Posts;
