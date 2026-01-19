import Image from "next/image";
import Link from "next/link";
import MobileNavigationMenu from "./mobile-navigation-menu";
import BiggerScreenNavigation from "./bigger-screen-navigation";

export default function Navbar() {
  return (
    <div>
      <MobileNavigationMenu />
      <BiggerScreenNavigation />
    </div>
  );
}
