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
    <div className="flex flex-col justify-between w-full h-screen">
      <Navbar />
      <Footer />
    </div>
  );
}
