// import Image from "next/image";
import Link from "next/link";
// import Logo from "../../icons/logo.png";

export default function Navbar() {
  return (
    <header className="py-6 md:px-16 px-6 border-b border-zinc-800 z-30 md:mb-28 mb-20">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <h1>
          <Link href="/">
            {/* <Image src={Logo} width={25} height={25} alt="logo" /> */}
            VS Pattern Library
          </Link>
        </h1>
        {/* <ul className="flex items-center gap-x-8">
          <li>
            <Link href="/about" className="hover:text-purple-400 duration-300">
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-purple-400 duration-300"
            >
              Projects
            </Link>
          </li>
        </ul> */}
      </nav>
    </header>
  );
}
