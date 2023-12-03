import { motion } from "framer-motion";
import { ILLUSTRATION_ERROR } from "../assets";
import { Button } from "../components/atoms/Button";
import { Link } from "react-router-dom";

function ErrorPage() {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  const imageTransition = {
    duration: 0.5,
    ease: "easeInOut",
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  const buttonTransition = {
    duration: 0.5,
    delay: 0.2,
    ease: "easeInOut",
  };

  return (
    <div className="flex items-center min-h-screen p-16 bg-white">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <motion.img
          src={ILLUSTRATION_ERROR}
          alt=""
          className="w-[400px]"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={imageTransition}
        />
        <div className="max-w-lg text-center mt-6">
          <motion.p
            className="text-2xl font-semibold md:text-3xl"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={imageTransition}
          >
            Sorry, we couldn't find this page.
          </motion.p>
          <motion.p
            className="mt-4 mb-8"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={imageTransition}
          >
            But dont worry, you can find plenty of other things on our homepage.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            transition={buttonTransition}
          >
            <Link to="/">
              <Button
                type="submit"
                className="px-5 inline py-3 text-xs font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-full focus:outline-none bg-primary hover:bg-[#2A0815]"
              >
                Back to Homepage
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
