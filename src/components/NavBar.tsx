import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} paddingRight={2}>
      <Image src={logo} boxSize={50}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
