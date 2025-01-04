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
        <div className="hero min-h-screen bg-gradient-to-br ">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Transform Your Home Today!</h1>
              <p className="py-6">
                Reliable solutions for plumbing, landscaping, and security
                systems. Let&apos;s make your home safer and more beautiful!
              </p>
              <a href="#services" className="btn btn-accent">
                Explore Services
              </a>
            </div>
          </div>
        </div>
        <section id="trusted" className="py-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">
              Trusted by Leading Companies
            </h2>
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
        </section>

        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Our Services
            </h2>
            <div className="flex flex-wrap justify-center gap-16">
              {/* Lawn Management & Mowing Section */}
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
                    Lawn Management & Mowing
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
                <div>
                  <button className="btn btn-outline px-8 py-3 rounded-full font-semibold border-gray-300 text-gray-700 hover:bg-gray-200 transition-all">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Security Systems Section */}
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
                      <path d="M21 21l-6-6M18 7V3c0-.5523-.4477-1-1-1H7c-.5523 0-1 .4477-1 1v4M18 7l3 3M18 7H6c-.5523 0-1 .4477-1 1v11c0 .5523.4477 1 1 1h12c.5523 0 1-.4477 1-1V8c0-.5523-.4477-1-1-1z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 ml-4">
                    Security Systems Installation
                  </h3>
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  Ensure the safety of your property with advanced security
                  system installations. We offer a range of systems designed for
                  both residential and commercial properties.
                </p>
                <ul className="text-gray-700 list-disc list-inside mb-6">
                  <li>24/7 monitoring and alerts</li>
                  <li>Smart home integration</li>
                  <li>Customizable security packages</li>
                </ul>
                <div>
                  <button className="btn btn-outline px-8 py-3 rounded-full font-semibold border-gray-300 text-gray-700 hover:bg-gray-200 transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="subscription" className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Lawn Management & Mowing Subscription Plans
            </h2>
            <p className="text-lg mb-12 text-gray-700">
              Choose a subscription plan that best fits your needs and enjoy
              hassle-free lawn care.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
              {/* Monthly Plan */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    Monthly Plan
                  </h3>
                  <p className="text-xl font-semibold mb-4 text-gray-800">
                    $50/month
                  </p>
                  <p className="text-lg mb-6 text-gray-600">
                    Regular mowing and maintenance to keep your lawn looking
                    great all month long.
                  </p>
                  <button className="btn btn-outline px-8 py-3 rounded-full font-semibold border-gray-300 text-gray-700 hover:bg-gray-200 transition-all">
                    Subscribe Now
                  </button>
                </div>
              </div>
              {/* Quarterly Plan */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    Quarterly Plan
                  </h3>
                  <p className="text-xl font-semibold mb-4 text-gray-800">
                    $135/quarter
                  </p>
                  <p className="text-lg mb-6 text-gray-600">
                    Save more with quarterly services for a well-maintained lawn
                    all season.
                  </p>
                  <button className="btn btn-outline px-8 py-3 rounded-full font-semibold border-gray-300 text-gray-700 hover:bg-gray-200 transition-all">
                    Subscribe Now
                  </button>
                </div>
              </div>
              {/* Yearly Plan */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    Yearly Plan
                  </h3>
                  <p className="text-xl font-semibold mb-4 text-gray-800">
                    $500/year
                  </p>
                  <p className="text-lg mb-6 text-gray-600">
                    Our most cost-effective plan to ensure your lawn is always
                    in top shape year-round.
                  </p>
                  <button className="btn btn-outline px-8 py-3 rounded-full font-semibold border-gray-300 text-gray-700 hover:bg-gray-200 transition-all">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Key Features</h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Feature 1: Professional Team */}
          <div className="bg-white shadow-lg rounded-lg p-8 transition-all transform hover:scale-105 hover:shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 7v10M7 12h10" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional Team</h3>
            <p className="text-gray-700">
              Our professional team is available 24/7 for any service needs, ensuring that we meet your expectations every time.
            </p>
          </div>

          {/* Feature 2: Regular Maintenance */}
          <div className="bg-white shadow-lg rounded-lg p-8 transition-all transform hover:scale-105 hover:shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-green-600 text-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 6v12M6 12h12" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Regular Maintenance</h3>
            <p className="text-gray-700">
              We provide regular lawn maintenance and mowing services, ensuring your property stays pristine year-round.
            </p>
          </div>

          {/* Feature 3: Visit Scheduling */}
          <div className="bg-white shadow-lg rounded-lg p-8 transition-all transform hover:scale-105 hover:shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-yellow-600 text-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Visit Scheduling</h3>
            <p className="text-gray-700">
              Easily schedule visits at your convenience. We provide a flexible booking system for hassle-free service management.
            </p>
          </div>
        </div>

        {/* Feature 4: Team Verification */}
        <div className="mt-12 bg-white p-12 rounded-lg shadow-lg">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2l4-4" />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Team Verification</h3>
          <p className="text-gray-700">
            All of our teams are verified, ensuring that you receive a reliable and trustworthy service every time.
          </p>
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
