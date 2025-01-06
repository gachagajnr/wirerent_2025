import { type LoaderFunction, type MetaFunction } from "@remix-run/node";
import {
  FaClock,
  FaHandshake,
  FaInstagram,
  FaLeaf,
  FaTwitterSquare,
} from "react-icons/fa";

import Navbar from "~/components/navbar/navbar";
import Footer from "~/components/footer/footer";
import {
  HiClock,
  HiLightBulb,
  HiLocationMarker,
  HiMail,
  HiPhone,
} from "react-icons/hi";
import ContactForm from "~/components/forms/contact";
import { ActionIcon, Group, Paper } from "@mantine/core";
import { connectToDatabase } from "~/utils/db.server";
import PlanCard, { PlanData } from "~/components/plan/plan-card";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async () => {
  // const user = await authenticator.isAuthenticated(request, {
  //   failureRedirect: "/",
  // });

  const { db } = await connectToDatabase();

  const response = await db.collection("plans").find({}).toArray();

  const plans = JSON.parse(JSON.stringify(response));

  return { plans };
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar className="fixed top-0 left-0 w-full z-50 bg-white" />
      <main className=" ">
        <div className="hero min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50">
          <div className="hero-content text-center px-6">
            <div className="max-w-6xl mx-auto mt-24">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col gap-4 md:w-1/2">
                  <h1 className="text-4xl md:text-4xl font-bold  text-left   mb-6">
                    Transform Your Lawn with
                    <br />
                    <div className="flex flex-row text-green-900 font-light">
                      Around
                      <h1 className="text-green-600 uppercase font-semibold">
                        HS
                      </h1>
                    </div>
                  </h1>

                  <p className="text-lg md:text-xl text-left text-gray-700 leading-relaxed mb-8">
                    Experience the convenience of our tailored lawn care plans.
                    With flexible subscriptions, enjoy a lush, green lawn all
                    year round without the hassle. Let us handle the hard work
                    while you relax.
                  </p>

                  <div className="flex flex-row gap-4 flex-wrap ">
                    <a
                      href="#services"
                      className="btn bg-green-600 hover:bg-green-700 text-white w-52  px-8 py-4 font-semibold shadow-lg transition-all duration-300"
                    >
                      Explore Our Plans
                    </a>
                    <a
                      href="#services"
                      className="btn   w-40  px-8 py-4 font-semibold shadow-lg transition-all duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center items-center">
                  {/* Replace the placeholder with your image */}
                  <img
                    src="/arr.png"
                    alt="Lawn Care"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="partners" className="container mx-auto max-w-4xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center p-6 border-b-2 border-gray-200 hover:border-green-600 transition duration-500">
              <div className="text-green-600 text-5xl mb-4">
                <FaClock />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Save Time
              </h3>
              <p className="text-gray-600">
                Let us handle your lawn care so you can focus on what matters
                most.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border-b-2 border-gray-200 hover:border-green-600 transition duration-500">
              <div className="text-green-600 text-5xl mb-4">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Trusted Professionals
              </h3>
              <p className="text-gray-600">
                Our experienced team ensures your lawn is always in top shape.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border-b-2 border-gray-200 hover:border-green-600 transition duration-500">
              <div className="text-green-600 text-5xl mb-4">
                <FaLeaf />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Eco-Friendly
              </h3>
              <p className="text-gray-600">
                We use environmentally friendly practices to care for your lawn.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="py-8 bg-gray-50">
          <div className="container mx-auto text-center">
            <div className="flex  justify-center gap-16">
              <div className="w-full  max-w-6xl text-left p-6">
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

        <section
          id="get-started"
          className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-8"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl uppercase text-gray-900 text-center mb-12">
              Get Started Quickly
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Section 1 - Professional Team for Regular Maintenance */}
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white">
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
                  Our dedicated teams provide regular mowing and maintenance
                  services within 24 hours of request, ensuring your property is
                  always well-maintained.
                </p>
                <ul className="text-gray-700 list-disc list-inside mb-6 space-y-2">
                  <li>Professional teams arrive within 24 hours of request</li>
                  <li>On-time visits with scheduled appointments</li>
                  <li>
                    Reliable and verified team members for quality service
                  </li>
                </ul>
                <button className="btn btn-outline px-8 py-3 rounded-full font-semibold border-gray-300 text-gray-700 hover:bg-gray-200 transition-all self-start">
                  Schedule Your Service
                </button>
              </div>

              {/* Section 2 - Visit Scheduling & Verification */}
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white">
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
                  We simplify scheduling with easy tools and provide real-time
                  verification of visiting team details for transparency and
                  convenience.
                </p>
                <ul className="text-gray-700 list-disc list-inside mb-6 space-y-2">
                  <li>Simple scheduling system for convenient planning</li>
                  <li>Automatic updates and reminders for your visit</li>
                  <li>Real-time verification of visiting team details</li>
                </ul>
                <button className="btn btn-outline px-8 py-3 rounded-full font-semibold border-gray-300 text-gray-700 hover:bg-gray-200 transition-all self-start">
                  Schedule Now
                </button>
              </div>
            </div>
          </div>
          <div className="mt-16"></div>
        </section>

        <section
          id="onboarding"
          className="container max-w-7xl rounded-3xl mt-12 mb-12 p-6 mx-auto text-center  bg-gradient-to-br from-green-100 via-white to-green-50"
        >
          <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col justify-between text-center items-center gap-16">
            <div className="flex w-full md:w-1/2 p-8 flex-col justify-between items-start space-y-6">
              <div className="flex items-center text-start space-x-6">
                <div className=" rounded-full text-white flex items-center justify-center">
                  <HiClock className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Seamless Onboarding Experience
                </h3>
              </div>
              <p className="text-lg text-gray-700">
                Get started effortlessly with our streamlined onboarding
                process. We offer flexible, subscription-based lawn care
                services to suit your needs, whether it’s monthly, quarterly, or
                yearly plans. Enjoy a hassle-free experience as we take care of
                your lawn, keeping it pristine all year round.
              </p>
            </div>

            {/* Right Section with Points */}
            <div className="w-full md:w-1/2 space-y-6">
              <ul className="text-gray-700 list-none space-y-6">
                <li className="flex items-start text-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 text-white flex items-center justify-center rounded-full">
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
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      Instant Access to Lawn Care Services
                    </h4>
                    <p className="text-sm text-gray-700">
                      Start immediately without waiting. Once you sign up,
                      you’ll be ready for a top-notch lawn care experience
                      that’s tailored to your needs.
                    </p>
                  </div>
                </li>

                {/* Key Point 2 */}
                <li className="flex items-start text-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full">
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
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      Flexible and Customizable Plans
                    </h4>
                    <p className="text-sm text-gray-700">
                      Choose from monthly, quarterly, or yearly plans designed
                      to fit your specific needs and preferences.
                    </p>
                  </div>
                </li>

                {/* Key Point 3 */}
                <li className="flex items-start text-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-600 text-white flex items-center justify-center rounded-full">
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
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      Seamless Experience with Minimal Effort
                    </h4>
                    <p className="text-sm text-gray-700">
                      Enjoy hassle-free lawn care with a quick, intuitive
                      sign-up process that puts everything in your hands.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="subscription" className="py-16 bg-gray-50">
          <div className="container max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Pricing Plans
            </h2>
            <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col justify-center gap-16">
              {data.plans.length === 0 ? (
                <p className="text-gray-500 italic">{`You have added 0 plans`}</p>
              ) : (
                data.plans.map((plan: PlanData) => {
                  return (
                    <div
                      key={plan._id}
                      className="w-full flex md:w-1/2 lg:w-1/3 text-left p-6"
                    >
                      <PlanCard plan={plan} />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </section>

        <section id="services" className="py-16 bg-gray-100 ">
          <div className="container mx-auto w-full py-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col gap-4 p-6 items-center justify-center">
              <div className="flex   gap-4 md:w-1/2">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  Explore Our Comprehensive Lawn Care Services
                </h2>
              </div>
              <div className="flex   md:w-1/2">
                <p className="text-lg   text-gray-700">
                  At AroundHS, we offer a range of lawn care services designed
                  to keep your lawn healthy and vibrant. Our subscription-based
                  model ensures regular maintenance, including mowing,
                  fertilization, and pest control. Choose a plan that fits your
                  needs and enjoy the convenience of expert care.
                </p>
              </div>
            </div>
          </div>
          <div className=" max-w-5xl mx-auto text-center">
            <div className="grid grid-cols-1  lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-8 items-center justify-center">
              {/* Service 1 */}
              <div className=" card bg-white rounded-2xl max-w-sm w-full text-start mx-auto  p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Lawn Service
                </h3>
                <h2 className="font-semibold text-pretty text-success py-2 ">
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
                <h2 className="font-semibold text-pretty text-success py-2 ">
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
                <h2 className="font-semibold text-pretty text-success py-2 ">
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
                <h2 className="font-semibold text-pretty text-success py-2 ">
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
                <h2 className="font-semibold text-pretty text-success py-2 ">
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

        <div className="container max-w-6xl mx-auto mt-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              How Our Booking Process Works
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              Follow these simple steps to confirm and schedule your lawn care
              service with ease.
            </p>
          </div>

          <div className="flex justify-between gap-4 space-x-8 flex-col lg:flex-row md:flex-row sm:flex-col">
            {/* Step 1 */}
            <div className="flex flex-col items-center w-96 text-center">
              <div className="w-16 h-16 bg-green-600 text-white flex items-center justify-center rounded-full mb-4">
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
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.03 20 4 16.97 4 12C4 7.03 7.03 4 12 4C16.97 4 20 7.03 20 12C20 16.97 16.97 20 12 20Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Step 1: Book Your Service
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                Select your preferred date and time, and we’ll reserve your spot
                for the service.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center w-96 text-center">
              <div className="w-16 h-16 bg-blue-600 text-white flex items-center justify-center rounded-full mb-4">
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
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.03 20 4 16.97 4 12C4 7.03 7.03 4 12 4C16.97 4 20 7.03 20 12C20 16.97 16.97 20 12 20Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Step 2: Verify the Team
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                A link will be sent to you for confirming the team that will
                handle your lawn care service.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center w-96 text-center">
              <div className="w-16 h-16 bg-yellow-600 text-white flex items-center justify-center rounded-full mb-4">
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
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.03 20 4 16.97 4 12C4 7.03 7.03 4 12 4C16.97 4 20 7.03 20 12C20 16.97 16.97 20 12 20Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Step 3: Confirm the Scheduling
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                Once verified, confirm the scheduling and get ready for our team
                to deliver expert service at your door.
              </p>
            </div>
          </div>
        </div>

        <section
          id="contact"
          className="container mt-16 mx-auto p-16 bg-base-100 border rounded-3xl max-w-5xl  bg-gradient-to-br from-blue-100 via-white to-blue-50"
        >
          <div className="container mx-auto text-center ">
            <div className="flex flex-col lg:flex-row md:flex-row sm:flex-coljustify-between gap-8 ">
              <div className="flex flex-col text-left items-start gap-2 md:w-1/2">
                <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
                <h6>
                  Leave your email and we will get back to you within 24 hours
                </h6>
                <div className="flex flex-row gap-4 items-center">
                  <HiMail className="h-6 w-6 text-primary" />
                  <div className="flex flex-col  gap-0 text-start">
                    <h2 className="text-sm text-secondary">Email</h2>
                    <p className="text-sm">aroundhomesolutions@gmail.com</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <HiPhone className="h-6 w-6 text-primary" />
                  <div className="flex flex-col  gap-0 text-start">
                    <h2 className="text-sm text-secondary">Phone</h2>
                    <p className="text-sm">0712345678</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <HiLocationMarker className="h-6 w-6 text-primary" />
                  <div className="flex flex-col  gap-0 text-start">
                    <h2 className="text-sm text-secondary">Address</h2>
                    <p className="text-sm">Westlands Commercial</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <HiLightBulb className="h-6 w-6 text-primary" />
                  <div className="flex flex-col  gap-0 text-start">
                    <h2 className="text-sm text-secondary">Working Hours</h2>
                    <p className="text-sm">Mon - Sat 8.00 - 5.00</p>
                  </div>
                </div>
                <Group
                  gap={0}
                  // className={classes.social}
                  justify="flex-end"
                  wrap="nowrap"
                >
                  <ActionIcon size="lg" color="gray" variant="subtle">
                    <FaTwitterSquare size={18} stroke="1" />
                  </ActionIcon>

                  <ActionIcon size="lg" color="gray" variant="subtle">
                    <FaInstagram size={18} stroke="1" />
                  </ActionIcon>
                </Group>
              </div>
              <div className="flex flex-col   gap-2 md:w-1/2">
                <Paper shadow="xs" radius="xl" p="xl">
                  <ContactForm />
                </Paper>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
