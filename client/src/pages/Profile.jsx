import { CgProfile } from 'react-icons/cg';
import { Button, Label, TextInput } from 'flowbite-react';

function Profile() {
  return (
    <div className='settings min-h-screen bg-gray-100 relative bg-gradient-to-br from-gray-900 to-gray-800 '>
      <button
        className='absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600'
        type='button'
      >
        Delete Account
      </button>
      <div className='flex justify-center items-center'>
        <div className='settingsWrapper bg-white p-8 rounded-lg shadow-md max-w-md w-full mt-16'>
          <div className='settingsTitle text-center mb-6'>
            <span className='text-2xl font-semibold text-gray-800'>
              Account Settings
            </span>
          </div>
          <form className='flex max-w-md flex-col gap-4'>
            <div className='mb-4'>
              <label
                htmlFor='fileInput'
                className='text-sm font-medium text-gray-700 block mb-1'
              >
                Profile Picture
              </label>
              <div className='settingsPP flex items-center space-x-4'>
                <img
                  src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                  alt=''
                  className='w-12 h-12 rounded-full object-cover'
                />
                <label
                  htmlFor='fileInput'
                  className='cursor-pointer text-blue-500'
                >
                  <CgProfile className='text-2xl' />
                </label>
                <input
                  id='fileInput'
                  type='file'
                  style={{ display: 'none' }}
                  className='settingsPPInput'
                />
              </div>
            </div>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='email1' value='Your email' />
              </div>
              <TextInput
                id='username'
                type='text'
                name='name'
                placeholder='username'
                required
              />
            </div>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='email1' value='Your email' />
              </div>
              <TextInput
                id='email1'
                type='email'
                name='email'
                placeholder='Email'
                required
              />
            </div>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='password1' value='Your password' />
              </div>
              <TextInput
                id='password1'
                type='password'
                name='password'
                placeholder='Password'
                required
              />
            </div>

            <Button gradientMonochrome='success'>Update</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
