import { useNavigate } from 'react-router-dom'
import { ProfileMenu } from './Menue'
import { Button } from '@material-tailwind/react';
import Cookie from 'cookie-universal'

const Navbar = () => {
  const cookies = Cookie();
  const Navigate = useNavigate();
  return (
    <div className='w-full bg-[#ffffff] shadow-2xl'>
      <div className="container flex justify-between items-center h-[70px]">
          <div onClick={() => Navigate('/')}>
              <img src="https://cdn-icons-png.flaticon.com/512/4922/4922073.png" alt="logo" className=' h-[60px] cursor-pointer' />
          </div>
          {
            cookies.get('token') ?  
          <div className='cursor-pointer'>
            <ProfileMenu />
          </div> :<div className='space-x-3'>
                    <Button variant="outlined" className='px-3 py-2' onClick={() => Navigate('/register')}>register</Button>
                    <Button variant="outlined" className='px-3 py-2' onClick={() => Navigate('/login')}>login</Button>
                  </div>
          }
      </div>
    </div>
  )
}

export default Navbar