import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slick = () => {
  
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
        <div className='flex justify-around items-center py-8 bg-stone-950'>
            <div className='max-w-300 p-10 sm:max-w-500'>
                <Slider {...settings}>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-0001.jpg?alt=media&token=6d66b5d5-dae3-49e0-a4cb-c40767f678fc'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                            
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-0002.jpg?alt=media&token=62581b9f-53d5-4af6-bac9-fd8998029c15'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-0003.jpg?alt=media&token=a493dda2-be50-44f8-8d3c-1a73db10c1ec'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-0004.jpg?alt=media&token=5796a12c-ec1d-40b1-9032-0a92cb9480c5'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-0005.jpg?alt=media&token=c18fa43a-dd82-4465-b759-6c0563c96430'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-0006.jpg?alt=media&token=41d5888c-5719-45a2-b0c3-732aee6f3af4'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-0007.jpg?alt=media&token=529050a4-5072-419a-a6bf-1587d29ba9c9'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-0008.jpg?alt=media&token=5c25c431-32c5-40bf-a853-1e86b125de36'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-0009.jpg?alt=media&token=233b40b8-9f8f-42b3-9722-8d0233a112db'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-0010.jpg?alt=media&token=0851a7ac-acc8-4ebe-af6b-d2cbaa0c689e'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-0011.jpg?alt=media&token=c0387fdc-b9d0-4eb7-8bd6-9aff9069adaa'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-0012.jpg?alt=media&token=e10ca42c-f15d-4767-8144-968a7ddb2bd0'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-0013.jpg?alt=media&token=2676dd57-06ee-4bfd-8e58-402cd8f30560'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-0014.jpg?alt=media&token=67e982d4-f313-4634-8dbf-53abb3d90f3c'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-0015.jpg?alt=media&token=a1bfc958-112b-42ef-9ede-e4f805ee4d2d'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-0016.jpg?alt=media&token=6e29e1ae-7678-441d-815c-892ae58ba653'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-0017.jpg?alt=media&token=e361e5dd-aedc-4b76-8c57-d450b69c8e30'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-0018.jpg?alt=media&token=4da8bbbe-a983-4980-8443-89a673c63d6f'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-0019.jpg?alt=media&token=4c090974-de96-4db5-ba88-a8c729036f44'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-0020.jpg?alt=media&token=b4372354-0c3f-40a2-ad65-aa908c2b9694'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Slick