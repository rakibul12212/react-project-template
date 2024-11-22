import React, { useState } from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import List from "../common/List";
import ListItem from "../common/ListItem";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="py-1 border-white/20 bg-blue-800 fixed w-full top-0 left-0 z-50">
      <Container>
        <Flex className="items-center justify-between relative">
          {/* Logo */}
          <Link to="/">
            <Image className="w-[40%] xl:w-[20%]" src="/logo.png" alt="logo" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setToggle(true)}
            className="p-2 rounded-md border-[1px] border-white/20 block md:hidden"
          >
            <HiMenuAlt3 className="text-2xl text-white" />
          </button>

          {/* Navigation List */}
          {/* Overlay */}
          <div
            className={`fixed inset-0 bg-black/50 z-30 transition-opacity ${
              toggle ? "opacity-100 visible" : "opacity-0 invisible"
            } md:hidden`}
            onClick={() => setToggle(false)}
          ></div>

          <List
            className={`fixed top-0 right-0 h-screen w-[70%] sm:w-[60%] bg-blue-800 flex flex-col items-start justify-start p-5 gap-5 z-40 transition-transform duration-300 ease-in-out transform ${
              toggle ? "translate-x-0" : "translate-x-full"
            } md:static md:h-auto md:w-auto md:flex-row md:translate-x-0 md:bg-transparent`}
          >
            {/* Close Button for Mobile */}
            <button
              className="absolute top-3 right-3 text-white block md:hidden"
              onClick={() => setToggle(false)}
            >
              <FaTimes className="text-2xl" />
            </button>

            <ListItem className="font-sans font-medium text-xl text-white">
              <Link to="/" onClick={() => setToggle(false)}>
                Home
              </Link>
            </ListItem>
            <ListItem className="font-sans font-medium text-xl text-white">
              <Link to="/about" onClick={() => setToggle(false)}>
                About
              </Link>
            </ListItem>
            <ListItem className="font-sans font-medium text-xl text-white">
              <Link to="/contact" onClick={() => setToggle(false)}>
                Contact
              </Link>
            </ListItem>
          </List>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
