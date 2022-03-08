import home1 from "../img/home1.png";
import { motion } from "framer-motion/dist/framer-motion";
import { fade, photoAnim, titleAnim } from "../animation";
import Wave from "./Wave";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h1 variants={titleAnim}>
              We work to make your <span>dream</span> come true.
            </motion.h1>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skill
        </motion.p>
        <Link to="/contact">
          <ContactButton variants={fade}>Contact Us</ContactButton>
        </Link>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="cameramen" />
      </Image>
      <Wave />
    </About>
  );
};

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 5rem;
  color: white;
  @media screen and (max-width: 900px) {
    padding: 3rem;
  }
  @media screen and (max-width: 650px) {
    flex-direction: column;
    padding: 2rem;
  }
`;
export const Description = styled.div`
  z-index: 2;
  flex: 1;
  padding-right: 4rem;
  h1 {
    font-weight: lighter;
  }
  p {
    padding: 3rem 0;
  }
  @media screen and (max-width: 900px) {
    padding-right: 2rem;
  }
  @media screen and (max-width: 650px) {
    padding-right: 0;
    p {
      padding: 2rem 0;
    }
  }
`;
export const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 550px;
    object-fit: cover;
  }
  @media screen and (max-width: 650px) {
    padding-top: 1rem;
    width: 100%;
    img {
      height: 400px;
    }
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
const ContactButton = styled(motion.button)`
  a {
    text-decoration: none;
    color: white;
  }
`;

export default AboutSection;
