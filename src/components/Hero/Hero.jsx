import BannerImg from "../../assets/website/hero.jpg";

const BgStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Hero = () => {
  return (
    <div
      style={BgStyle}
      className="duration-300 dark:bg-black dark:text-white "
    >
      <div className="duration-300 bg-white/70 dark:bg-black/80 ">
        <div className="container min-h-[620px] flex items-center">
          <div className="w-full md:w-[550px] mx-auto text-center space-y-5">
            {/* <p data-aos="fade-up" className="text-2xl text-primary">
              Lorem ipsum adipisicing elit. Sit, a.
            </p> */}
            <h1 className="text-5xl font-bold md:text-8xl">FiGaMaSc</h1>
            <p>Say yes to your adventure... </p>
            <button className="primary-btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
