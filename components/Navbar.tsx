import Link from "next/link";
import Image from "next/image";
import Btn from "./Btn";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href={"/"} className="flex justify-center items-center">
          <Image
            src="/logocar.png"
            alt="Cars Logo"
            width={140}
            height={18}
            className="object-contain"
          />
        </Link>
        <Btn
          title="Sign In"
          btnType="button"
          conStyles="text-custom-pink rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
