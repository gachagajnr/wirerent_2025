import { Outlet, Link, Form } from "@remix-run/react";
import { FaBuilding, FaHeadset, FaHome, FaSuperpowers } from "react-icons/fa";
import { User } from "~/utils/auth.server";

interface DashboardLayoutProps {
  user: User;
}

export default function DashboardLayout({ user }: DashboardLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="navbar bg-white  sticky top-0 z-10">
        <div className="flex-none lg:hidden">
          {/* Drawer toggle for small screens */}

          <div
            onClick={() => document.getElementById("my-drawer-2")?.click()}
            className="drawer-overlay"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl normal-case">
           <FaHeadset/> Wirerent
          </Link>
        </div>
        <div className="flex-none hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="" className="text-xs">
                {user.email}
              </Link>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link to="">Link 1</Link>
                  </li>
                  <li>
                    <Link to="">Link 2</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      {/* Drawer and Content */}
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content border p-4 flex flex-col">
         
         
          <div className="p-4">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <div
            onClick={() => document.getElementById("my-drawer-2")?.click()}
            className="drawer-overlay"
            aria-hidden="true"
          ></div>

          <ul className="menu min-h-full w-60 bg-white p-4">
            <li>
              {/* <div className="flex flex-row justify-between"> */}
              <Link to="/app/blocks">
                <FaBuilding />
                Blocks
              </Link>
              {/* <Link to="/app/blocks/new" className="btn btn-primary btn-xs">
               + New
              </Link> */}
              {/* </div> */}
            </li>
            <li>
              <Link to="/app/units">
                <FaHome />
                Units
              </Link>
            </li>
            <li>
              <Link to="/app/admins">
              <FaSuperpowers/>
              Admins</Link>
            </li>

            <Form method="post">
              <button
                type="submit"
                name="action"
                value="logout"
                className="btn btn-error btn-sm text-white"
              >
                Logout
              </button>
            </Form>
          </ul>
        </div>
      </div>
    </div>
  );
}
