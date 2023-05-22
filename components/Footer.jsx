import Link from 'next/link'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <div className='bg-black text-white px-4 py-8 sm:px-8 sm:py-12'>
                <div className='sm:flex justify-between'>
                    <span className='text-xl font-bold uppercase'>GTC Africa</span>
                    <div className='flex justify-start sm:justify-evenly text-xs sm:text-sm pb-6'>
                        <div className='pt-2 sm:px-4 text-left'>
                            <span className='font-semibold text-left'>Company</span>                        
                            <ul>
                                <li>
                                    <Link href='#about'>About</Link>
                                </li>
                                <li>
                                    <Link href='#testimonials'>Clients</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='pt-2 px-4'>
                            <span className='font-semibold'>Our Work</span>
                            <ul>
                                <li>
                                    <Link href='/services'>Services</Link>
                                </li>
                                <li>
                                    <Link href='/projects'>Projects</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='py-0.5 bg-white' />
                <div className='sm:flex justify-between items-center py-2 pt-4 text-xs sm:text-sm'>
                    <span className='text-left'>GTC Africa 2023: All rights reserved</span>
                    <div className='flex items-center'>
                        <span>Follow us: </span>
                        <FaFacebook className='px-1 text-xl sm:text-2xl'/>
                    </div>
                </div>
            </div>
            <div className='bg-white text-xs px-4 py-0.5 sm:px-8 sm:text-sm text-left'>Website managed by <a href='https://cherrypopmedia.co.za/'>CherryPop</a></div>
        </div>
    )
}

export default Footer