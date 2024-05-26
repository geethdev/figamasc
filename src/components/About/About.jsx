import BannerImg from "../../assets/website/about.png";

const About = () => {
  return (
    <div className="py-16 duration-300 bg-white dark:bg-dark dark:text-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 place-items-center">
          <div data-aos="fade-up">
            <img
              src={BannerImg}
              alt=""
              className="sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
            />
          </div>
          <div>
            <div className="pb-6 space-y-5 sm:p-16">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary/70 text-7xl ">
                  <h1 className="font-bold"></h1>
                </div>
                <div>
                  <p className="text-primary"></p>
                  <h1 className="text-2xl font-bold sm:text-4xl">About us</h1>
                </div>
              </div>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, magnam! Tenetur odio quo et maxime?
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                tempora.
              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
