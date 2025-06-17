import { useEffect, useState } from "react";
import { links, navImages } from "../constant";
import { useLang } from "../hook/useLang";

const Navbar = () => {
  const { lang, setLang } = useLang();
  const [isActive, setIsActive] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Cambia a true si se scrollea más de 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`w-full z-10 flex justify-between md:justify-around items-center gap-4 py-4 fixed top-0 ${
        isScrolled
          ? "bg-primary shadow-lg"
          : ""
      }`}
    >
      <div className="flex items-center gap-2">
        <img src="/logo-singularity.webp" alt="logo" className="w-10" />
        <p className="text-2xl font-bold bg-gradient-to-r from-accent-dark to-accent text-transparent bg-clip-text">
          Singularity
        </p>
      </div>
      {/**Desktop */}
      <div className="hidden md:flex gap-4">
        <ul className="flex gap-4">
          {links[lang].map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                className={`${
                  isActive === link.url ? "text-accent" : ""
                } hover:text-accent hover:scale-125 transition-all duration-200`}
                onClick={() => {
                  setIsActive(link.url);
                }}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex justify-center items-center gap-2">
          <li
            className={`cursor-pointer hover:scale-125 hover:filter-none transition-all duration-200 ${
              lang === "es" ? "grayscale" : ""
            }`}
            onClick={() => setLang("en")}
          >
            <img src={navImages.english} alt="" width={20} height={20} />
          </li>
          <li
            className={`cursor-pointer hover:scale-125 hover:filter-none transition-all duration-200 ${
              lang === "en" ? "grayscale" : ""
            }`}
            onClick={() => setLang("es")}
          >
            <img src={navImages.spanish} alt="" width={20} height={20} />
          </li>
        </ul>
      </div>

      {/**Mobile */}
    </nav>
  );
};

export default Navbar;
