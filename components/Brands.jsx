import Image from 'next/image';
import { useRouter } from 'next/router';
import Volvo from '../assets/volvo.png';
import CAT from '../assets/CAT.png';
import Bell from '../assets/bell.png';
import Hitachi from '../assets/hitachi.png';
import Komatsu from '../assets/Komatsu.png';

const Brands = () => {
  const router = useRouter();

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/brands.jpg?alt=media&token=368691ec-bb7f-483d-896f-029bb9d21de4)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className='text-center font-medium' id='brands'>
          <div className='bg-stone-950 p-2'>
            <h3 className='text-white text-xs sm:text-sm'>We work with industry leading brands</h3>
          </div>
          <div className='flex justify-around overflow-hidden items-center'>
            <div className='p-2'>
              <Image
                src={Hitachi}
                alt='Hitachi equipment'
                width={150}
              />
            </div>
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
            <div className='p-2'>
              <Image
                src={Komatsu}
                alt='Komatsu truck repairs'
                width={100}
              />
            </div>
          </div>
          <div className='bg-amber-300 p-2'>
            <h3 className='text-stone-950 text-xs sm:text-sm'>Professional rebuilds, repairs and maintenance</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;