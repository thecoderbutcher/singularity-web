import { heroImages, features, featureText } from "../constant";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useLang } from "../hook/useLang";

const Features = () => {
  const { lang } = useLang();
  return (
    <div className="flex flex-col items-center py-10 gap-4" id="features">
      <div className="flex flex-col items-center gap-1">
        <p className="text-accent text-base font-extrabold">
          {featureText[lang].title}
        </p>
        <p className="text-4xl">
          {featureText[lang].text}
          <span className="font-bold bg-gradient-to-r from-accent-dark via-accent-dark/60 to-accent-dark/40 text-transparent bg-clip-text">
            {featureText[lang].accent}
          </span>
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-20 py-8">
        <div className="lg:w-1/2 order-2">
          <img
            src={heroImages.singularitysample}
            alt="singularity logo"
            width={400}
          />
        </div>
        <div className="flex flex-col justify-center lg:w-1/2">
          <div className="flex flex-col gap-4">
            {features[lang].map((feature) => (
              <div key={feature.id} className="flex flex-col gap-1">
                <p className="text-xl font-bold">{feature.title}</p>
                <p className="text-sm font-extralight">{feature.text1}</p>
                <p className="text-sm font-extralight">{feature.text2}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
