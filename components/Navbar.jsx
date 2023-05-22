import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white')
  const [navTop, setNavTop] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const handleClick = () => {
    setNav(false);
  }

  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY >= 90) {
        setColor('#000000')
        setTextColor('#ffffff')
        setNavTop(true)
      } else {
        setColor('transparent')
        setTextColor('#ffffff')
        setNavTop(false)
      }
    }
    window.addEventListener('scroll', changeColor)
    return () => {
      window.removeEventListener('scroll', changeColor)
    }
  }, [])

  return (
    <>
      <div className='px-4 bg-black items-center text-right sm:text-center text-white py-1 text-xs sm:text-sm'>
        <span><b>Call us:</b> 081 360 9475</span>
      </div>
      <div style={{backgroundColor: `${color}`}} className='w-full z-10 ease-in duration-300 uppercase fixed top-0 left-0 py-0.5'>
        <div className={`ease-in duration-300 flex justify-between px-4 items-center text-white ${navTop ? "py-0" : "py-8"}`}>
          <Link href='/'>
            <span style={{color: `${textColor}`}} className='text-3xl font-extrabold'>GTC Africa</span>
          </Link>
          <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
            <li className='px-4 py-2 hover:text-stone-300'>
              <Link href='/'>Home</Link>
            </li>
            <li className='px-4 py-2 hover:text-stone-300'>
              <Link href='/services'>Services</Link>
            </li>
            <li className='px-4 py-2 hover:text-stone-300'>
              <Link href='/projects'>Projects</Link>
            </li>
            <li className='px-4 py-2 hover:text-stone-300'>
              <Link href='/contact'>Contact Us</Link>
            </li>
          </ul>


          {/* Mobile Button */}
          <div onClick={handleNav} className="block sm:hidden z-10">
            {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}}/> : <AiOutlineMenu size={20} style={{color: `${textColor}`}}/>}
          </div>
          {/* Mobile Menu */}
          <div className={nav ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300" 
          : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"}>
            <ul className="text-white">
              <li className='p-4 hover:text-stone-300'>
                <Link href='/' onClick={handleClick}>Home</Link>
              </li>
              <li className='p-4 hover:text-stone-300'>
                <Link href='/services' onClick={handleClick}>Services</Link>
              </li>
              <li className='p-4 hover:text-stone-300'>
                <Link href='/projects' onClick={handleClick}>Projects</Link>
              </li>
              <li className='p-4 hover:text-stone-300'>
                <Link href='/contact' onClick={handleClick}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar