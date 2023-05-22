import Image from 'next/image'
import CTA from '@/components/CTA'

import Service from '../assets/services.jpg'
import Component from '../assets/torque-converter.jpg'
import Hydraulic from '../assets/hydraulic-pump.jpg'
import GTC from '../assets/gtc-services.jpg'

const Services = () => {
    return (
        <div>
            <div style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    src={Service}
                    alt='Heavy vehicle services'
                    style={{ width: '100%', height: '350px', objectFit: 'cover', objectPosition: 'center'}}
                    className=''
                />
                {/* Overlay */}
                    <div
                        style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        zIndex: 0
                        }}
                    />
                <div style={{
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    zIndex: 1,
                    width: '100%',
                    textAlign: 'left',
                    color: 'white',
                }}>
                    <div className='py-16 text-white text-center'>
                        <h1 className="text-5xl py-10">Transforming your equipment</h1>
                        <div className="bg-yellow-500 h-0.5 mx-auto w-1/2"/>
                        <h2 className="text-xl py-10">Expert Services for Reliable Equipment Performance.</h2>
                    </div>
                </div>
            </div>
            <div className='py-8'>
                <div className='px-2 py-4 sm:flex justify-evenly items-center'>
                    <div> 
                        <Image
                            src={Hydraulic}
                            alt='Hydraulic pumps for earth movers'
                            className='rounded-sm pb-2 sm:max-w-500'
                        />
                    </div>
                    <div className='max-w-500'>
                        <h4 className='font-semibold pb-1'>Overhauling Hydraulic Pumps & Motors</h4>
                        <p className='text-stone-700 text-sm'>Overhauling hydraulic pumps and motors is a crucial aspect of maintaining the performance and reliability of earth moving equipment. This service involves a thorough inspection of the hydraulic components, followed by the replacement of any worn or damaged parts. Our skilled technicians disassemble the pump or motor, inspect each component, and replace any parts that are beyond their service limits. Once reassembled, the hydraulic pump or motor is tested to ensure optimal performance and efficiency, allowing your equipment to operate at its maximum potential.</p>
                    </div>
                </div>
                <div className='px-2 py-4 sm:flex justify-evenly items-center'>
                    <div className='max-w-500 py-4'>
                        <h4 className='font-semibold pb-1'>Complete Rebuilds of Drivetrain Components</h4>
                        <p className='text-stone-700 text-sm'>Complete rebuilds of drivetrain components are a comprehensive solution to ensure your earth moving equipment is operating at peak performance. Our team of experienced technicians will fully disassemble and inspect each component, replace any worn or damaged parts, and reassemble the component to exact manufacturer specifications. This process can significantly extend the lifespan of your equipment and improve its overall efficiency and reliability. Trust us to provide high-quality rebuilds that will keep your equipment running smoothly for years to come.</p>
                    </div>
                    <div>
                        <Image
                            src={Component}
                            alt='Drivetrain component torque converter'
                            className='rounded-sm pb-2 sm:max-w-500'
                        />
                    </div>
                </div>
                <div className='px-2 py-4 sm:flex justify-evenly items-center'>
                    <div>
                        <Image
                            src={GTC}
                            alt='Drivetrain component torque converter'
                            className='rounded-sm pb-2 sm:max-w-500'
                        />
                    </div>
                    <div className='max-w-500'>
                        <h4 className='font-semibold pb-1'>We offer comprehensive solutions</h4>
                        <div className='sm:flex text-sm'>
                            <div className='p-2'>
                                <h4>Our services include:</h4>
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
                    </div>
                </div> 
            </div>
            <CTA />
        </div>
    )
}

export default Services