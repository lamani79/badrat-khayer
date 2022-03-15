import Link from "next/link";

const NavLogo = () => {
  return (
    <>
      <Link href="/">
        <a className=" text-2xl font-normal">
          <span className="text-main-green">BADRAT</span>
          <span className="text-black"> KHAYR</span>
        </a>
      </Link>
    </>
  );
};

export default NavLogo;
