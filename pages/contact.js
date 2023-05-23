import Form from '../components/Form';
import { FaMapMarkerAlt, FaClock, FaUser } from 'react-icons/fa';

const Contact = () => {
  return (
    <main>
      {/* Header */}
      <header className="bg-stone-950 pt-16 text-white text-center">
          <h1 className="text-5xl py-10">Get in touch</h1>
          <div className="bg-yellow-500 h-0.5 mx-auto w-1/2"/>
          <h2 className="text-xl py-10">Contact us for an obligation free quote.</h2>
      </header>

      {/* Gradient */}
      <div className="isolate bg-stone-950 py-4 sm:px-56">
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

      {/* Form */}
      <section className="px-8 py-16 bg-stone-950 text-center text-white">
        <h2 className="text-3xl">We will call you back.</h2>
        <h3 className="text-xl py-2">Complete the form below and we will contact you.</h3>
      </section>
      <section>
        <Form/>
      </section>

      {/* Contact Details */}
      <section className="px-4 py-8 text-center">
        <h2 className="text-3xl">Contact forms not your thing?</h2>
        <h3 className="text-xl pt-2">Give us a call or drop us an email.</h3>

        <div className="bg-white py-8 sm:px-16 items-center sm:flex justify-around">
          <div className="py-4 flex flex-col items-center justify-center">
            <FaMapMarkerAlt className="text-4xl mb-2" />
            <h3 className="text-2xl py-1">Our Location:</h3>
            <ul className="px-4">
              <li>Kempton Park, 1620</li>
              <li>Gauteng, South Africa</li>
            </ul>
          </div>

          <div className="py-4 flex flex-col items-center justify-center">
            <FaUser className="text-4xl mb-2" />
            <h3 className="text-2xl py-1">Contact Details:</h3>
            <ul className="px-4">
              <li>081 360 9475</li>
              <li>gtc1africa@gmail.com</li>
            </ul>
          </div>

          <div className="py-4 flex flex-col items-center justify-center">
            <FaClock className="text-4xl mb-2" />
            <h3 className="text-2xl py-1">Business Hours:</h3>
            <ul className="px-4">
              <li>Mon-Fri:</li>
              <li>8:00am to 17:00pm</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;