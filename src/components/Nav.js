import { motion } from "framer-motion/dist/framer-motion.js";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import burgerBar from "../img/navbar-button.svg";
import { useState } from "react";

const Nav = () => {
  const { pathname } = useLocation();
  const [navActive, SetNavActive] = useState(false);

  return (
    <Navbar>
      <Logo>
        <Link to="/" id="logo">
          <h3> Capture</h3>
        </Link>
      </Logo>
      <Page active={navActive}>
        <ul>
          <li>
            <Link to="/">About Us</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/" ? "50%" : "0%" }}
            />
          </li>
          <li>
            <Link to="/work">Our Work</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/work" ? "50%" : "0%" }}
            />
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
            />
          </li>
        </ul>
        <div id="close" onClick={() => SetNavActive(!navActive)}></div>
      </Page>
      <button>
        <img
          src={burgerBar}
          alt="nav button"
          onClick={() => SetNavActive(!navActive)}
        />
      </button>
    </Navbar>
  );
};

const Navbar = styled.nav`
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  background: #282828;
  padding: 1rem 4rem;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  button {
    z-index: 15;
    display: none;
    border: none;
    padding: 0.5rem;
    img {
      width: 1.5rem;
    }
  }
  @media screen and (max-width: 650px) {
    padding: 1rem 2rem;
    button {
      display: block;
    }
  }
`;
const Logo = styled(motion.div)`
  z-index: 15;
  font-family: "Lobster", cursive;
  font-weight: lighter;
  font-size: 1.5rem;
`;
const Page = styled(motion.div)`
  flex-direction: column;
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding: 0 2rem;
    position: relative;
  }
  @media screen and (max-width: 650px) {
    z-index: 10;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    transform: translateY(-100%);
    transition: all ease 0.75s;
    opacity: 0;
    width: 100%;
    ul {
      background-color: #282828;
      height: 300px;
      padding-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    li {
      width: fit-content;
      padding: 30px;
      text-align: center;
    }
    #close {
      display: block;
      min-height: 100vh;
      background: transparent;
    }
    ${(props) => !props.active} {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;
const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0;
  position: absolute;
  align-items: center;
  margin-top: 0.1rem;
`;

export default Nav;
