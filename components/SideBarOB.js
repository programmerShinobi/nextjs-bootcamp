import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon, UsersIcon } from "@heroicons/react/24/solid";
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Groups3Icon from '@mui/icons-material/Groups3';
import PaymentIcon from '@mui/icons-material/Payment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { useRouter } from "next/router";

const SideBarOB = forwardRef(({ showNav }, ref) => {
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
        <Link href="/ob">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/ob"
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
        <Link href="/ob/hotel">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/ob/hotel"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
          >
            <div className="mr-2">
              <LocationCityIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Hotel</p>
            </div>
          </div>
        </Link>


      </div>
    </div>
  );
});

SideBarOB.displayName = "SideBarOB";

export default SideBarOB;


