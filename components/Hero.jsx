import { useState } from "react";
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
            alt='green leaf'
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        ) : (
          <video
            src="https://firebasestorage.googleapis.com/v0/b/greanleaf-club.appspot.com/o/twc-coming-soon.mp4?alt=media&token=b74cd1bd-d241-494d-858b-c0d62221f9f7"
            alt="cannabis club"
            loop
            autoPlay
            muted
            className="absolute inset-0 object-cover object-center"
            style={{ width: "100%", height: "100%" }}
            onError={handleVideoError}
          />
        )}
        <div className="absolute inset-0 bg-black opacity-60"/>

        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-sans text-center">
          <h3 className="text-lg sm:text-2xl">Coming Soon</h3>
          <h2 className="text-4xl sm:text-6xl p-4 font-bold drop-shadow-md">
            <span style={{ backgroundImage: "linear-gradient(135deg, #8c52ff 10%, #5ce1e6 90%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Greenleaf Club
            </span>
          </h2>
          <div className="p-4">
            <p className="text-xs sm:text-sm">We&apos;re working on an awesome online experience!<br/>Sign up for exclusive offers and early bird access on launch.</p>
          </div>
          
          {/* Form */}
            <form name="contact" method="post" data-netlify="true" className="max-w-370 isolate p-4">
              <input type="hidden" name="form-name" value="contact" />
              <div className="flex justify-center items-center">
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Please enter your email address"
                    className="block w-52 bg-gray-900 px-4 py-1 text-gray-100 placeholder-gray-400 shadow-sm rounded-l-md text-xs border-2 border-gray-400"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    name="submit"
                    className="block rounded-r-md bg-gray-900 px-1 py-1 text-xs text-gray-200 border-2 border-gray-400 font-bold"
                  >
                    Notify Me
                  </button>
                </div>
              </div>
            </form>

        </div>
      </div>
    </main>
  );
};

export default LaunchingSoon;
