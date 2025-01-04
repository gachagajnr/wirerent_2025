import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/navbar/navbar";
import Footer from "~/components/footer/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar className="fixed top-0 left-0 w-full z-50 bg-white" />
      <main className=" ">
        <div className="hero min-h-screen bg-gradient-to-br">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">
                Lawn Care Made Simple – Your Lawn, Our Priority
              </h1>
              <p className="py-6">
                Transform your lawn into a lush, green oasis with our
                subscription-based lawn mowing services. We offer tailored plans
                for regular maintenance to ensure your lawn stays pristine – all
                year round, hassle-free.
              </p>
              <a href="#services" className="btn btn-accent">
                Explore Our Plans
              </a>
            </div>
          </div>
        </div>

        {/* <section id="trusted" className="py-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">
              Trusted by Leading Companies
            </h2>
            <div className="flex justify-center items-center flex-wrap gap-12">
               <div className="w-36 h-36 flex justify-center items-center bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Company Logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

               <div className="w-36 h-36 flex justify-center items-center bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Company Logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

               <div className="w-36 h-36 flex justify-center items-center bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Company Logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

               <div className="w-36 h-36 flex justify-center items-center bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Company Logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

               <div className="w-36 h-36 flex justify-center items-center bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Company Logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

               <div className="w-36 h-36 flex justify-center items-center bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Company Logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section> */}

        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl uppercase font-semibold mb-8 text-gray-700">
              Get Started Quickly
            </h2>
            <div className="flex  justify-center gap-16">
              {/* Lawn Management & Mowing Section */}
              <div className="w-full  max-w-4xl text-left p-6">
                <div className="mb-6 flex items-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full text-white flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 2H6C5.44772 2 5 2.44772 5 3V17C5 17.5523 5.44772 18 6 18H18C18.5523 18 19 17.5523 19 17V7L16 2Z" />
                    </svg>
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 ml-4">
                    Easy & Simple Onboarding
                  </h3>
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  We offer subscription-based lawn care services to keep your
                  lawn looking pristine. Choose from monthly, quarterly, or
                  yearly plans based on your needs.
                </p>
                <ul className="text-gray-700 list-disc list-inside mb-6">
                  <li>Flexible subscription packages</li>
                  <li>Regular mowing, trimming, and maintenance</li>
                  <li>Expert care for a healthy lawn</li>
                </ul>
                <div className="flex justify-center items-center flex-wrap gap-12">
                  {/* Logo 1 */}
                  <div className="w-36 h-36 flex justify-center items-center bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Company Logo"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Logo 2 */}
                  <div className="w-36 h-36 flex justify-center items-center bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Company Logo"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Logo 3 */}
                  <div className="w-36 h-36 flex justify-center items-center bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Company Logo"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Logo 4 */}
                  <div className="w-36 h-36 flex justify-center items-center bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Company Logo"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Logo 5 */}
                  <div className="w-36 h-36 flex justify-center items-center bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Company Logo"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Logo 6 */}
                  <div className="w-36 h-36 flex justify-center items-center bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Company Logo"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="subscription" className="py-16 bg-gray-50">
          <div className="container max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Pricing Plans
            </h2>
            <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col justify-center gap-16">
              <div className="w-full md:w-1/2 lg:w-1/3 text-left p-6">
                <div className="mb-6 flex items-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full text-white flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 2H6C5.44772 2 5 2.44772 5 3V17C5 17.5523 5.44772 18 6 18H18C18.5523 18 19 17.5523 19 17V7L16 2Z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 ml-4">
                    Monthly Plan
                  </h3>
                </div>
                <p className="text-xl font-semibold mb-4 text-gray-800">
                  $50/month
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Regular mowing and maintenance to keep your lawn looking great
                  all month long.
                </p>
                <ul className="text-gray-700 list-disc list-inside mb-6">
                  <li>Regular mowing</li>
                  <li>Trimming and maintenance</li>
                  <li>Keep your lawn fresh</li>
                </ul>
                <div>
                  <button className="btn btn-outline px-8 py-3 rounded-full font-semibold border-gray-300 text-gray-700 hover:bg-gray-200 transition-all">
                    Subscribe Now
                  </button>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 text-left p-6">
                <div className="mb-6 flex items-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full text-white flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 2H6C5.44772 2 5 2.44772 5 3V17C5 17.5523 5.44772 18 6 18H18C18.5523 18 19 17.5523 19 17V7L16 2Z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 ml-4">
                    Quarterly Plan
                  </h3>
                </div>
                <p className="text-xl font-semibold mb-4 text-gray-800">
                  $135/quarter
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Save more with quarterly services for a well-maintained lawn
                  all season.
                </p>
                <ul className="text-gray-700 list-disc list-inside mb-6">
                  <li>Quarterly maintenance</li>
                  <li>Seasonal trimming</li>
                  <li>Comprehensive lawn care</li>
                </ul>
                <div>
                  <button className="btn btn-outline px-8 py-3 rounded-full font-semibold border-gray-300 text-gray-700 hover:bg-gray-200 transition-all">
                    Subscribe Now
                  </button>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 text-left p-6">
                <div className="mb-6 flex items-center">
                  <div className="w-16 h-16 bg-yellow-600 rounded-full text-white flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 2H6C5.44772 2 5 2.44772 5 3V17C5 17.5523 5.44772 18 6 18H18C18.5523 18 19 17.5523 19 17V7L16 2Z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 ml-4">
                    Yearly Plan
                  </h3>
                </div>
                <p className="text-xl font-semibold mb-4 text-gray-800">
                  $500/year
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Our most cost-effective plan to ensure your lawn is always in
                  top shape year-round.
                </p>
                <ul className="text-gray-700 list-disc list-inside mb-6">
                  <li>Annual mowing</li>
                  <li>Year-round lawn care</li>
                  <li>All-season trimming</li>
                </ul>
                <div>
                  <button className="btn btn-outline px-8 py-3 rounded-full font-semibold border-gray-300 text-gray-700 hover:bg-gray-200 transition-all">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 bg-gray-100">
          <div className=" max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Our Lawn Care Services
            </h2>
            <p className="text-lg mb-12 py-6 text-gray-700">
              Choose the lawn care service that best suits your needs and enjoy
              a well-maintained, beautiful lawn all year round.
            </p>
            <div className="grid grid-cols-1  lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-8 items-center justify-center">
              {/* Service 1 */}
              <div className=" card bg-white rounded-2xl max-w-sm w-full text-start mx-auto  p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Lawn Service
                </h3>
                <h2 className="font-semibold text-pretty text-secondary py-2 ">
                  Easy Set Up. You Control Your Schedule and Service from Your
                  Smart Phone.
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Regular mowing and lawn maintenance to keep your yard neat and
                  healthy.
                </p>
                <button className=" py-3 border border-gray-300 rounded-full w-32 font-semibold text-gray-700 hover:bg-gray-200 transition-all">
                  Get Quote
                </button>
              </div>

              {/* Service 2 */}
              <div className=" card bg-white rounded-2xl max-w-sm w-full text-start mx-auto  p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Bush & Hedge Trimming
                </h3>
                <h2 className="font-semibold text-pretty text-secondary py-2 ">
                  Easy Set Up. You Control Your Schedule and Service from Your
                  Smart Phone.
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Custom trimming for bushes and hedges to enhance your
                  landscapes beauty.
                </p>
                <button className=" py-3 border border-gray-300 rounded-full w-32 font-semibold text-gray-700 hover:bg-gray-200 transition-all">
                  Get Quote
                </button>
              </div>

              {/* Service 3 */}
              <div className=" card bg-white rounded-2xl max-w-sm w-full text-start mx-auto  p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Bed Weeding
                </h3>
                <h2 className="font-semibold text-pretty text-secondary py-2 ">
                  Easy Set Up. You Control Your Schedule and Service from Your
                  Smart Phone.
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Expert weeding to keep your garden beds clean and free of
                  unwanted plants.
                </p>
                <button className=" py-3 border border-gray-300 rounded-full w-32 font-semibold text-gray-700 hover:bg-gray-200 transition-all">
                  Get Quote
                </button>
              </div>

              {/* Service 4 */}
              <div className=" card bg-white rounded-2xl max-w-sm w-full text-start mx-auto  p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Mulch Service
                </h3>
                <h2 className="font-semibold text-pretty text-secondary py-2 ">
                  Easy Set Up. You Control Your Schedule and Service from Your
                  Smart Phone.
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Professional mulch delivery and installation to keep your
                  garden healthy and vibrant.
                </p>
                <button className=" py-3 border border-gray-300 rounded-full w-32 font-semibold text-gray-700 hover:bg-gray-200 transition-all">
                  Get Quote
                </button>
              </div>

              {/* Service 5 */}
              <div className=" card bg-white rounded-2xl max-w-sm w-full text-start mx-auto  p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Fertilization & Weed Control
                </h3>
                <h2 className="font-semibold text-pretty text-secondary py-2 ">
                  Easy Set Up. You Control Your Schedule and Service from Your
                  Smart Phone.
                </h2>
                <p className=" text-gray-700 mb-4">
                  Customized fertilization and weed control to ensure your lawn
                  stays healthy and lush.
                </p>
                <button className=" py-3 border border-gray-300 rounded-full w-32 font-semibold text-gray-700 hover:bg-gray-200 transition-all">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="maintenance" className="py-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Professional Team & Regular Maintenance
            </h2>
            <div className="flex flex-wrap justify-center gap-16">
              {/* Service Explanation Section */}
              <div className="w-full md:w-2/3 text-left p-6">
                <div className="mb-6 flex items-center">
                  <div className="w-16 h-16 bg-yellow-600 rounded-full text-white flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3V21M12 3L6 9M12 3L18 9M6 15H18" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 ml-4">
                    Professional Team for Regular Maintenance
                  </h3>
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  We understand the importance of keeping your lawn
                  well-maintained. Our dedicated professional teams provide
                  regular mowing and maintenance services within 24 hours of
                  request, ensuring your property is always looking its best.
                </p>
                <ul className="text-gray-700 list-disc list-inside mb-6">
                  <li>Professional teams arrive within 24 hours of request</li>
                  <li>On-time visits with scheduled appointments</li>
                  <li>
                    Reliable and verified team members for quality service
                  </li>
                </ul>
                <p className="text-lg text-gray-700 mb-6">
                  We guarantee timely services with proper verification of our
                  team members. You will receive updates on your scheduled
                  visit, including team member details and an estimated time of
                  arrival.
                </p>
                <div>
                  <button className="btn btn-outline px-8 py-3 rounded-full font-semibold border-gray-300 text-gray-700 hover:bg-gray-200 transition-all">
                    Schedule Your Service
                  </button>
                </div>
              </div>

              {/* Scheduling & Verification Process Section */}
              <div className="w-full md:w-1/3 text-left p-6 bg-gray-100 rounded-lg shadow-lg">
                <div className="mb-6 flex items-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full text-white flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 7v10M7 12h10" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 ml-4">
                    Visit Scheduling & Verification
                  </h3>
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  We take the hassle out of scheduling by offering easy-to-use
                  scheduling tools. Once scheduled, we verify our visiting
                  team’s details, including name, contact information, and their
                  estimated arrival time.
                </p>
                <ul className="text-gray-700 list-disc list-inside mb-6">
                  <li>Simple scheduling system for convenient planning</li>
                  <li>Automatic updates and reminders for your visit</li>
                  <li>Real-time verification of visiting team details</li>
                </ul>
                <p className="text-lg text-gray-700 mb-6">
                  With our robust verification system, you can rest assured that
                  our team members are both qualified and reliable, offering
                  complete transparency with your service.
                </p>
                <div>
                  <button className="btn btn-outline px-8 py-3 rounded-full font-semibold border-gray-300 text-gray-700 hover:bg-gray-200 transition-all">
                    Schedule Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="card bg-white shadow-lg rounded-lg">
                <div className="card-body p-6">
                  <p className="italic text-gray-700">
                    "Their lawn care service has completely transformed our
                    yard. Highly recommend!"
                  </p>
                  <h4 className="font-bold mt-4 text-gray-900">- Sarah Lee</h4>
                </div>
              </div>
              <div className="card bg-white shadow-lg rounded-lg">
                <div className="card-body p-6">
                  <p className="italic text-gray-700">
                    "The security system installation was quick and seamless. I
                    feel so much safer now!"
                  </p>
                  <h4 className="font-bold mt-4 text-gray-900">
                    - David Smith
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-base-100">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
            <form className="max-w-lg mx-auto">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button className="btn btn-primary w-full">Submit</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
