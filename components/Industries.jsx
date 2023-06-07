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
                        <p className='text-stone-700 text-sm'>We prioritize fast and reliable turnaround times to ensure our clients can get back to their work as quickly as possible. Whether you need a drivetrain component repaired or a hydraulic pump rebuilt, you can count on us to provide high-quality workmanship and exceptional customer service every step of the way.</p>
                    </div>
                    
                </div>

                <div className='px-2 py-4 sm:flex justify-evenly items-center'>
                    <div className='max-w-500'>
                        <h4 className='font-semibold pb-1'>Construction Equipment</h4>
                        <p className='text-stone-700 text-sm'>Our technicians are well-trained and have the expertise to provide professional repairs and complete drivetrain rebuilds for all types of construction equipment. Whether you need a simple repair or a complete overhaul, we have the knowledge and expertise to get the job done right the first time.</p>
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