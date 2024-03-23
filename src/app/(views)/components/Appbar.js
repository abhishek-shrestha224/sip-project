import { GoHomeFill } from "react-icons/go";
import { BsFire } from "react-icons/bs";
import { FaPalette } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

const Appbar = () => {
  return (
    <nav className="Navbar">
      <Link href="/" className="NavLink Home">
        <GoHomeFill />
      </Link>
      <Link href="/trending" className="NavLink Trending">
        <BsFire />
      </Link>
      <Link href="/artists" className="NavLink Artists">
        <FaPalette />
      </Link>
      <Link href="/about" className="NavLink About">
        <BsInfoCircleFill />
      </Link>
    </nav>
  );
};

export default Appbar;
