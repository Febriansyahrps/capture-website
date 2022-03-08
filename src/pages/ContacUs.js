import { motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";
import { pageAnimation, titleAnim } from "../animation";
import { Hide } from "../styles";

const ContacUs = () => {
  return (
    <Contact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get In Touch</motion.h2>
        </Hide>
      </Title>
      <Hide>
        <div>
          <Social variants={titleAnim}>
            <Circle />
            <h3>Send Us a Message</h3>
          </Social>
        </div>
      </Hide>
      <Hide>
        <div>
          <Social variants={titleAnim}>
            <Circle />
            <h3>Send Us a Message</h3>
          </Social>
        </div>
      </Hide>
      <Hide>
        <div>
          <Social variants={titleAnim}>
            <Circle />
            <h3>Send Us a Message</h3>
          </Social>
        </div>
      </Hide>
    </Contact>
  );
};

const Contact = styled(motion.div)`
  padding: 5rem;
  color: #353535;
  min-height: 90vh;
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;
const Circle = styled.div`
  border-radius: 50px;
  background: #353535;
  width: 2rem;
  height: 2rem;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h3 {
    color: black;
    margin: 2rem;
  }
`;

export default ContacUs;
