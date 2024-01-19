import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

function Profile() {
  return (
    <div className='settings min-h-screen '>
      <div className='flex justify-center items-center'>
        <div className=' bg-white p-8 rounded-lg shadow-md max-w-md w-full mt-16'>
          <div className=' text-center mb-6'>
            <span className='text-2xl font-semibold text-gray-800'>
              Register
            </span>
          </div>
          <form className='flex max-w-md flex-col gap-4'>
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
            <div className='flex items-center gap-2'>
              <Checkbox id='remember' />
              <Label htmlFor='remember'>Remember me</Label>
            </div>
            <Button gradientDuoTone='purpleToBlue'>Sign Up</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
