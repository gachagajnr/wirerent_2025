import { Outlet, Link, Form } from "@remix-run/react";
import {  FaBuilding, FaHeadset, FaHome, FaModx, FaSuperpowers, FaTicketAlt } from "react-icons/fa";
import { HiLogout, HiOutlineUserGroup, HiPlay, HiUserGroup } from "react-icons/hi";
import { User } from "~/utils/auth.server";

interface DashboardLayoutProps {
  user: User;
}

export default function DashboardLayout({ user }: DashboardLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="navbar bg-white  sticky top-0 z-40">
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
            <FaHeadset /> Wirerent
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
        <div className="drawer-content  mb-6 mx-6 rounded-xl p-4 flex flex-col">
          <div className="p-4">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side top-auto z-10  ">
          <div
            onClick={() => document.getElementById("my-drawer-2")?.click()}
            className="drawer-overlay"
            aria-hidden="true"
          ></div>

          <ul className=" card menu shadow-lg lg:relative z-[1] mt-3  lg:top-0 sm:absolute sm:top-2  sm:left-0   w-52 border  ml-4 rounded-xl p-4">
            <li>
              <Link to="/app/blocks">
                <FaBuilding />
                Blocks
              </Link>
            </li>
            <li>
              <Link to="/app/units">
                <FaHome />
                Units
              </Link>
            </li>
            <li>
              <Link to="/app/tenants">
                <HiUserGroup />
                Tenants
              </Link>
            </li>
            <li>
              <Link to="/app/admins">
                <FaSuperpowers />
                Admins
              </Link>
            </li>
            <li>
              <Link to="/app/tickets">
                <FaTicketAlt />
                Tickets
              </Link>
            </li>
            <li>
              <Link to="/app/plans">
                <HiPlay />
                Plans
              </Link>
            </li>
            <li>
              <Link to="/app/teams">
                <HiOutlineUserGroup />
                Teams
              </Link>
            </li>
            <li>
              <Link to="/app/services">
                <HiPlay />
                Services
              </Link>
            </li>
            <li>
              <Link to="/app/settings">
                <FaModx />
                Settings
              </Link>
            </li>
           
            <li>
              <Form method="post">
                <button
                  type="submit"
                  name="action"
                  value="logout"
                  className="btn btn-ghost btn-sm text-error"
                >
                  <HiLogout /> Logout
                </button>
              </Form>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
