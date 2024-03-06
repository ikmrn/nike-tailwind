import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute left-1/2 -translate-x-1/2 mx-auto z-10 w-full max-container">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg leading-normal text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className=" flex text-coral-red leading-normal font-montserrat font  gap-2 text-lg max-lg:hidden items-center">
          <a href="/" className=" hover:text-red-700">Sign in</a>
          <span>/</span>
          <a href="/" className=" hover:text-red-700">Explore</a>
        </div>

        <div className="lg:hidden max-ld:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
