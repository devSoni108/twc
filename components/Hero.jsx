import { useState } from 'react';
import Image from "next/image";

const LaunchingSoon = () => {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <main>
      <div className="relative h-screen">
        {videoError ? (
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/greanleaf-club.appspot.com/o/33.jpg?alt=media&token=2f32c129-68eb-49fd-be7f-9fca1508af0a"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        ) : (
          <video
            src="https://firebasestorage.googleapis.com/v0/b/greanleaf-club.appspot.com/o/twc-coming-soon.mp4?alt=media&token=b74cd1bd-d241-494d-858b-c0d62221f9f7"
            loop
            autoPlay
            muted
            className="absolute inset-0 object-cover object-center"
            style={{ width: '100%', height: '100%' }}
            onError={handleVideoError}
          />
        )}
        <div className="absolute inset-0 bg-black opacity-50"/>

        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-sans text-center">
          <h2 className="text-6xl font-mono p-4">
            <span style={{ backgroundImage: 'linear-gradient(135deg, #8c52ff 10%, #5ce1e6 90%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Coming Soon
            </span>
          </h2>
          <div className="p-4">
            <p>We're working on an awesome online experience!<br/>Sign up for exclusive offers and early bird access on launch.</p>
          </div>
          
          {/* Form */}
          <div className="max-w-370 isolate p-4">
            <form name='contact' method="post" data-netlify='true' className="mx-auto">
              <input type="hidden" name="form-name" value="contact" />
              <div className="flex justify-center items-center">
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Please enter your email address"
                    className="block w-52 bg-gray-900 px-4 py-1 text-gray-100 placeholder-gray-600 shadow-sm rounded-l-md text-xs"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    name="submit"
                    className="block rounded-r-md bg-gray-100 px-1 py-1 text-center text-xs text-gray-900 shadow-sm"
                  >
                    Notify Me
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
};

export default LaunchingSoon;
