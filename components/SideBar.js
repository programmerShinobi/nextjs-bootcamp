import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon, UsersIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 bg-gray-700 shadow-sm h-full overflow-y-auto">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <img
            className="w-32 h-auto"
            src="/assets/logo-shinobi-.png"
            alt="logo"
          />
        </picture>
      </div>

      <div className="flex flex-col">
        <Link href="/admin/dashboard">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/admin/dashboard"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Dashboard</p>
            </div>
          </div>
        </Link>
        <Link href="/admin/master">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/admin/master"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
          >
            <div className="mr-2">
              <UsersIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Master</p>
            </div>
          </div>
        </Link>
        <Link href="/admin/booking">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/admin/booking"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
          >
            <div className="mr-2">
              <UsersIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Booking</p>
            </div>
          </div>
        </Link>
        <Link href="/admin/users">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/admin/users"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
          >
            <div className="mr-2">
              <UsersIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Users</p>
            </div>
          </div>
        </Link>
        <Link href="/admin/hotel">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/admin/hotel"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
          >
            <div className="mr-2">
              <UsersIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Hotel</p>
            </div>
          </div>
        </Link>
        <Link href="/admin/humanResources">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/admin/humanResources"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
          >
            <div className="mr-2">
              <UsersIcon className="h-5 w-5" />
            </div>
            <div>
              <p>HR</p>
            </div>
          </div>
        </Link>
        <Link href="/admin/payment">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/admin/payment"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
          >
            <div className="mr-2">
              <UsersIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Payment</p>
            </div>
          </div>
        </Link>
        <Link href="/admin/purchasing">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/admin/purchasing"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
          >
            <div className="mr-2">
              <UsersIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Purchase</p>
            </div>
          </div>
        </Link>
        <Link href="/admin/resto">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/admin/resto"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
          >
            <div className="mr-2">
              <UsersIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Resto</p>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;


