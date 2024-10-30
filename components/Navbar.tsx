import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center container mx-auto px-10 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image src="/logo.png" alt="logo" width={118} height={18} />
        </Link>

        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="border rounded-full px-3 py-1 text-white transition duration-300 bg-black text-xs"
        />
      </nav>
    </header>
  );
};

export default Navbar;
