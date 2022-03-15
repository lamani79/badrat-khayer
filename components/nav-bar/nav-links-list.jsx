import Link from "next/link";
import { useRouter } from "next/router";


const NavLinksList = () => {
      const router = useRouter();
      console.log(router)
  return (
    // links_list class is for add tailwind classes to all link in the ul
    // you can modify the .links_list from the globals.css file
    <ul
      className={`links_list font-normal text-sm flex space-x-8 links_list`}
    >
      <li className={`active_link`}>
            <Link href={`#home`}>home</Link>
      </li>
      <li>
        <Link href={"#events"}>Events</Link>
      </li>
      <li>
        <Link href={"#about"}>About</Link>
      </li>
      <li>
        <Link href={"#contact"}>Contact</Link>
      </li>
    </ul>
  );
};

export default NavLinksList;
