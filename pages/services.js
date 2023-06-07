import Image from 'next/image'
import CTA from '@/components/CTA'

const Services = () => {
    return (
        <main>
            {/* Header */}
            <header className="bg-stone-950 py-16 text-white text-center">
                <h1 className="text-5xl py-10">Our Services</h1>
                <div className="bg-yellow-500 h-0.5 mx-auto w-1/2"/>
                <h2 className="text-xl py-10">We offer a wide range of Drivetrain and Hydraulic pump and motor services.</h2>
            </header>

            {/* Gradient */}
            <div className="isolate bg-white">
                    <div
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                    aria-hidden="true">
                    <div
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                        style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}/>
                    </div>
            </div>

            <div className='py-8'>
                <div className='px-2 py-4 sm:flex justify-evenly items-center'>
                    <div> 
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/hydraulic-pump.jpg?alt=media&token=aabc5223-1b24-4ac6-9dfc-a71fc5913428"
                            width={1920}
                            height={1200}
                            alt='Hydraulic pumps for earth movers'
                            className='rounded-sm pb-2 sm:max-w-500'
                            loading="lazy"
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
                            src="https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/torque-converter.jpg?alt=media&token=8d0cbb31-646c-4800-b380-fee957992d4d"
                            width={1920}
                            height={1200}
                            alt='Drivetrain component torque converter'
                            className='rounded-sm pb-2 sm:max-w-500'
                            loading='lazy'
                        />
                    </div>
                </div>
                <div className='px-2 py-4 sm:flex justify-evenly items-center'>
                    <div>
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/gtc-services.jpg?alt=media&token=9213297e-92f7-4f98-92e9-4bc8220c0466"
                            width={1920}
                            height={1200}
                            alt='Drivetrain component torque converter'
                            className='rounded-sm pb-2 sm:max-w-500'
                            loading='lazy'
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
        </main>
    )
}

export default Services