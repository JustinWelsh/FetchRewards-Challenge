const BackgroundImg = () => (
  <>
    <img
      className="absolute w-full bottom-0"
      src={`${process.env.PUBLIC_URL}/images/background/layered-waves-haikei.svg`}
      alt="background"
    />
    <img
      className="absolute w-full lg:bottom-0"
      src={`${process.env.PUBLIC_URL}/images/background/star-scatter-haikei-yellow.svg`}
      alt="background"
    />
    <img
      className="absolute w-full lg:bottom-0"
      src={`${process.env.PUBLIC_URL}/images/background/star-scatter-haikei-purple.svg`}
      alt="background"
    />
  </>
);
export default BackgroundImg;
