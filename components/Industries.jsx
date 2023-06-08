import Image from 'next/image'

const Industries = () => {
    return (
        <div className='px-4 py-4 sm:p-8' id='industries'>
            <div className='px-2 sm:px-16'>
                <h3 className='text-2xl text-stone-950'>Serving Diverse Industries</h3>
                <h4 className='text-stone-700 text-sm pt-4'>Unlock the Full Potential of Your Machinery with GTC Africa</h4>
            </div>
            <div className='pt-6'>
                <div className='px-2 py-4 sm:flex justify-evenly items-center'>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/mining.jpg?alt=media&token=ff9a9cf3-ec4d-4ea6-b5a6-2426844cc22f'
                            alt='Mining and earth movers'
                            width={1920}
                            height={1200}
                            className='rounded-sm pb-2 sm:max-w-500'
                            loading="lazy"
                        />
                    </div>
                    <div className='max-w-500'>
                        <h4 className='font-semibold pb-1'>Mining Equipment</h4>
                        <p className='text-stone-700 text-sm'>We prioritize fast and reliable turnaround times to minimize downtime for our clients. Whether you need a drivetrain component repaired or a hydraulic pump rebuilt, we ensure efficient and timely solutions. Our skilled technicians deliver high-quality workmanship and attention to detail, ensuring precision in every repair or rebuild.
                        <br/><br/>
                        Exceptional customer service is at the core of our approach. We strive to exceed expectations by maintaining open communication throughout the process. Our friendly and knowledgeable staff is always available to address your concerns and provide assistance. Choose us for top-notch workmanship and a customer-centric experience that prioritizes your satisfaction.</p>
                    </div>
                    
                </div>

                <div className='px-2 py-4 sm:flex justify-evenly items-center'>
                    <div className='max-w-500'>
                        <h4 className='font-semibold pb-1'>Construction Equipment</h4>
                        <p className='text-stone-700 text-sm'>Our technicians are highly skilled and well-trained in providing professional repairs and drivetrain rebuilds for various construction equipment. With their expertise and experience, we ensure that your equipment receives the utmost care and attention it deserves. From diagnosing and fixing simple repairs to undertaking complete overhauls, our technicians are equipped to handle any challenge that comes their way.
                        <br/><br/>
                        When you entrust your construction equipment to us, you can have confidence in our ability to deliver exceptional results. We take pride in our commitment to getting the job done right the first time, saving you time and minimizing downtime. Whether it is a drivetrain component repair or a comprehensive rebuild of your hydraulic pump, we strive to exceed your expectations with high-quality workmanship and a customer-centric approach. Your satisfaction is our top priority, and we go the extra mile to ensure that your equipment operates at its best performance.</p>
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/construction.jpg?alt=media&token=048cd72c-34a5-4fc0-b72e-c095ac2b45be'
                            width={1920}
                            height={1200}
                            alt='Construction team'
                            className='rounded-sm pb-2 sm:max-w-500'
                            loading="lazy"
                        />
                    </div>
                </div>  
                
            </div>
        </div>
    )
}

export default Industries