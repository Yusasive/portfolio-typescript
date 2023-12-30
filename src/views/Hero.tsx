import homePageImg from "../assets/home-page.svg";
import homePageIllustation from "../assets/hero.png";
import downloadIcon from "../assets/download-btn-icon.svg";
import { Button } from "../components";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";


  const Hero: React.FC = () => {
    const handleDownload = () => {
      // Use public directory to serve static assets
      const cvFileUrl = process.env.PUBLIC_URL + '/yusuf-abdullahi.pdf'; // Replace with the actual file name
    
      // Trigger the download using JavaScript
      const link = document.createElement('a');
      link.href = cvFileUrl;
      link.download = 'yusuf-abdullahi.pdf'; // Specify the desired file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${homePageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <div
        className="max-w-screen-2xl flex flex-col 
          xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">
        <div className="w-full xl:w-fit">
          <motion.h1
            variants={fadeIn("down")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="w-full xl:w-fit text-center xl:text-start text-4xl sm:text-6xl lg:text-8xl
              font-bolt text-textPrimary uppercase">
            FrontEnd
            <br />
            <span className="text-secondary">
              <Typewriter
                words={["Developer", "Engineer", "Tutor"]}
                cursor
                cursorStyle="_"
                typeSpeed={250}
                deleteSpeed={150}
                loop
              />
            </span>
          </motion.h1>
          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start">
            <a href="https://www.linkedin.com/in/yuusuf-abdullahi-temidayo-yusasive/">
              <Button secondary>Hire me</Button>
            </a>
            <Button icon={downloadIcon} onClick={handleDownload}>
              Download CV
            </Button>
          </motion.div>
        </div>

        <motion.img
          variants={scale()}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          src={homePageIllustation}
          alt="HeroSection "
          className="max-w-full sm:max-w-[401px]"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default Hero;
