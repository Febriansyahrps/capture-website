import { motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion/dist/framer-motion";
import { useScroll } from "./useScroll";
import { fade } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq variants={fade} animate={controls} initial="hide" ref={element}>
      <h1>
        Any question? <span>FAQ</span>
      </h1>
      <AnimateSharedLayout>
        <Toggle title="How do i start">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              sit atque explicabo nam est repudiandae labore illum iusto tempore
              maiores quisquam optio voluptate quis reprehenderit soluta ea,
              totam aspernatur eum!
            </p>
          </div>
        </Toggle>
        <Toggle title="How do i start">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              sit atque explicabo nam est repudiandae labore illum iusto tempore
              maiores quisquam optio voluptate quis reprehenderit soluta ea,
              totam aspernatur eum!
            </p>
          </div>
        </Toggle>
        <Toggle title="How do i start">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              sit atque explicabo nam est repudiandae labore illum iusto tempore
              maiores quisquam optio voluptate quis reprehenderit soluta ea,
              totam aspernatur eum!
            </p>
          </div>
        </Toggle>
        <Toggle title="How do i start">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              sit atque explicabo nam est repudiandae labore illum iusto tempore
              maiores quisquam optio voluptate quis reprehenderit soluta ea,
              totam aspernatur eum!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

export const Faq = styled(motion.div)`
  min-height: 90vh;
  display: block;
  padding: 5rem 5rem;
  color: white;
  display: block;
  span {
    display: block;
  }
  h1 {
    padding-bottom: 1rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 1rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
  @media screen and (max-width: 900px) {
    padding: 3rem;
  }
  @media screen and (max-width: 650px) {
    padding: 2rem;
    .question {
      padding: 2rem 0;
    }
    .answer {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;
