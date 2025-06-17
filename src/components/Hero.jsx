import { heroImages, heroText } from "../constant";
import { TiSocialGithub } from "react-icons/ti";
import { useLang } from "../hook/useLang";
const Hero = () => {
  const { lang } = useLang();
  console.log(heroText[lang]);
  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-center h-full mt-4 lg:mt-10 py-10 gap-8"
      id="home"
    >
      <div className="flex flex-col gap-4">
        <h2 className="flex flex-col gap-2 text-4xl uppercase font-extrabold">
          <span className="text-accent">{heroText[lang].title1}</span>
          <span> {heroText[lang].title2}</span>
        </h2>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">{heroText[lang].text1}</p>
          <p className="text-lg font-light">{heroText[lang].text2}</p>
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <img src={heroImages.linux} alt="linux" width={32} height={32} />
              <p className="text-lg font-bold">Linux</p>
            </div>
            <div className="px-4 space-y-1">
              <p>Linux Debian package (installer)</p>
              <p>Linux RPM package (installer)</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <img src={heroImages.window} alt="linux" width={32} height={32} />
              <p className="text-lg font-bold">Windows</p>
            </div>
            <div className="px-4 space-y-1">
              <p>Windows (installer)</p>
              <p>Install from Microsoft Store </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <a
              href="https://github.com/thecoderbutcher/singularity"
              target="_blank"
              className="bg-accent-dark text-secondary font-bold px-4 py-2 rounded-md "
            >
              {heroText[lang].btn}
            </a>
            <div className="flex items-center text-secondary-dark cursor-default animate-pulse">
              <p className="text-sm font-light">{heroText[lang].msg}</p>
              <TiSocialGithub className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <img
          src={heroImages.singularityhero}
          alt="singularity"
          className="rounded-2xl shadow-accent/20 shadow-xl"
          width={600}
        />
      </div>
    </section>
  );
};

export default Hero;
