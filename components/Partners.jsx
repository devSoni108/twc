import Image from 'next/image'

import Volvo from '../assets/volvo.png'
import CAT from '../assets/CAT.png'
import Bell from '../assets/bell.png'
import Komatsu from '../assets/Komatsu.png'

const Partners = () => {
    return (
        <div className='p-4 sm:px-24 sm:py-8'>
            <h3 className="text-xl pb-4">Partners & Brands</h3>
            <div className='flex justify-between overflow-hidden items-center'>
                <div className='p-2'>
                    <Image
                        src={CAT}
                        alt='CAT repairs'
                        width={150}
                    />
                </div>
                <div className='p-2'>
                    <Image
                        src={Bell}
                        alt='Bell repairs'
                        width={150}
                    />
                </div>
                <div className='p-2'>
                    <Image
                        src={Volvo}
                        alt='Volvo repairs'
                        width={100}
                    />
                </div>
                <div>
                    <Image
                        src={Komatsu}
                        alt='Komatsu truck repairs'
                        width={100}
                    />
                </div>
            </div>
        </div>
    )
}

export default Partners