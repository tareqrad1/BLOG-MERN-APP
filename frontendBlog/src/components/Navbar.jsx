import { NavLink, useNavigate } from 'react-router-dom'
import { ProfileMenu } from './Menue'
const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <div className='w-full bg-[#ffffff] shadow-2xl'>
      <div className="container flex justify-between items-center h-[70px]">
          <div onClick={() => Navigate('/')}>
              <img src="https://cdn-icons-png.flaticon.com/512/4922/4922073.png" alt="logo" className=' h-[60px] cursor-pointer' />
          </div>
          <div className='space-x-3'>
              <NavLink to='/' className='text-[17px] text-black'>Home</NavLink>
              <NavLink to='about' className='text-[17px]'>About</NavLink>
          </div>
          <div className='cursor-pointer'>
              <ProfileMenu />
          </div>
      </div>
    </div>
  )
}

export default Navbar