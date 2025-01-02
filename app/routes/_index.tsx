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
      <Navbar className="fixed top-0 left-0 w-full z-50" />
      <main className="flex-grow mt-[60px] overflow-auto">Content</main>
      <Footer />
    </div>
  );
}
