import Link from "next/link";
import NavLinksList from "./nav-links-list";
import NavLogo from "./nav-logo";
import SignUp from "./sign-up";
const NavBar = () => {
  return (
    //   nav_wraper for the padding of nav items
    <nav
      style={{ height: "97px" }}
      className=""
    >
      <div className="rounded-br-nav-wraper-radius nav_wraper flex flex-row items-center justify-between h-full bg-white drop-shadow-nav-shadow">
        <NavLogo />
        <NavLinksList />
        <SignUp />
      </div>
    </nav>
  );
};

export default NavBar;
