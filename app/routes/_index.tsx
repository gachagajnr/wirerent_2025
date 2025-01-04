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

        <section id="services" className="py-16 bg-base-200">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://via.placeholder.com/300x200"
                    alt="Plumbing"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">Plumbing</h3>
                  <p>
                    Professional plumbing solutions to keep your home leak-free
                    and efficient.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn More</button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://via.placeholder.com/300x200"
                    alt="Landscaping"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">Landscaping</h3>
                  <p>
                    Subscription-based landscaping for beautiful lawns and
                    gardens.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-secondary">Learn More</button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://via.placeholder.com/300x200"
                    alt="Security Systems"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">Security Systems</h3>
                  <p>
                    Cutting-edge security system installations for peace of
                    mind.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="subscription"
          className="py-16 bg-gradient-to-r from-secondary to-primary text-white"
        >
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Landscaping Subscription
            </h2>
            <p className="text-lg mb-8">
              Hassle-free landscaping services with regular mowing, trimming,
              and maintenance. Choose a plan tailored to your needs.
            </p>
            <a href="#contact" className="btn btn-accent">
              Subscribe Now
            </a>
          </div>
        </section>

        <section className="py-16 bg-base-200">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <p className="italic">
                    &quot;They completely transformed our backyard. The
                    landscaping subscription is a lifesaver!&quot;
                  </p>
                  <h4 className="font-bold mt-4">- Jane Doe</h4>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <p className="italic">
                    &quot;Quick and professional plumbing service. Highly
                    recommend them!&quot;
                  </p>
                  <h4 className="font-bold mt-4">- John Smith</h4>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <p className="italic">
                    &quot;Their security system installation made my home feel
                    so much safer!&quot;
                  </p>
                  <h4 className="font-bold mt-4">- Mary Johnson</h4>
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
