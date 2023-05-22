import Image from 'next/image'
import { FaFlag, FaTools, FaTruck } from 'react-icons/fa'

import logo from '../assets/logo.jpg'

const About = () => {
    return (
        <div className='sm:flex justify-center items-center p-4 sm:p-8' id='about'>
            <div>
                <div className='flex items-center max-w-500 py-4'>
                    <FaFlag className='text-6xl p-2'/>
                    <div className='block px-4'>
                        <h4 className='font-semibold'>National Supplier</h4>
                        <p className='text-sm'>We take great pride in providing services to clients across Southern Africa.</p>
                    </div>
                </div>
                <div className='flex items-center max-w-500 py-4'>
                    <FaTools className='text-6xl p-2'/>
                    <div className='block px-4'>
                        <h4 className='font-semibold'>Accredited Mechanics</h4>
                        <p className='text-sm'>Our team of qualified and experienced mechanics are equipped to handle any challenge.</p>
                    </div>
                </div>
                <div className='flex items-center max-w-500 py-4'>
                    <FaTruck className='text-6xl p-2'/>
                    <div className='block px-4'>
                        <h4 className='font-semibold'>Collection & Delivery</h4>
                        <p className='text-sm'>We provide efficient turn around times and offer collection and delivery of components.</p>
                    </div>
                </div>
            </div>
            <div className='p-2'>
                <Image
                    src={logo}
                    alt='About GTC Africa'
                    width={300}
                />
            </div>
            <div className='p-4 max-w-500'>
                <h2 className='text-xl font-semibold'>About GTC Africa</h2>
                <p className='text-sm py-2'>
                    GTC Africa is a leading rebuild center based in Kempton Park, Johannesburg. Founded by owner Georg Nieuwoudt, GTC Africa provides unmatched services to our customers all throughout Southern Africa
                </p>
                <div className='sm:flex text-sm'>
                    <div className='p-2'>
                    Our services include:
                    <li>repairs</li>
                    <li>maintenance</li>
                    <li>complete rebuilds of drivetrain components</li>
                    </div>
                    <div className='p-2'>
                        We also specialise in:
                        <li>repairs</li>
                        <li>overhauling for various brand hydraulic pumps & motors</li>
                    </div>
                </div>
                <p className='text-sm py-2'>Additionally, we offer dyno testing as well as hydraulic pump and motor testing services, complete with certificates to guarantee their reliability.</p>
            </div>
        </div>
    )
}

export default About