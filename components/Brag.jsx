import { GiSouthAfrica } from 'react-icons/gi';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { FaTools } from 'react-icons/fa';


const Brag = () => {
    return (
        <div className="sm:flex justify-between items-center text-white bg-stone-600 p-4 sm:p-8">
            <div className="p-2 pb-4">
                <h3 className="text-yellow-500 text-xl">Doing the right thing,</h3>
                <h3 className="text-xl">at the right time</h3>
            </div>
            <div className="p-2">
                <GiSouthAfrica className='py-2' size={62} />
                <h3 className="sm:text-2xl">9 Provinces</h3>
                <span className="text-xs uppercase text-stone-300">Across all major cities</span>
            </div>
            <div className="p-2">
                <AiFillSafetyCertificate className='py-2' size={52} />
                <h3 className="sm:text-2xl">Certified Installer</h3>
                <span className="text-xs uppercase text-stone-300">Certified parts intaller</span>
            </div>
            <div className="p-2">
                <FaTools className='py-2' size={42} />
                <h3 className="sm:text-2xl">Multi Industry</h3>
                <span className="text-xs uppercase text-stone-300">Servicing all industries</span>
            </div>
        </div>
    )
} 

export default Brag