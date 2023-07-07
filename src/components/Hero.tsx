import HeaderSocialIcons from "./HeaderSocialIcons";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row mt-[10vh] items-center gap-14">
      <div className="w-1/2 md:w-1/3 md:m-4">
        <img src="/images/hari.jpeg" className="rounded-full" />
      </div>
      <div className="text-center md:text-left md:w-full">
        <h1 className="font-bold text-4xl">{"👋 Hello, I'm Hari Acharya"}</h1>
        <p>
          I'm passionate about creating beautiful and functional websites. Let's
          work together to create something very awasome!
        </p>
        <HeaderSocialIcons />
      </div>
    </div>
  );
}

export default Hero;
