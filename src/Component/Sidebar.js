import React, { useState } from "react";
import { Box, VStack, Flex, IconButton, Spacer } from "@chakra-ui/react";
import { FiFileText, FiUsers, FiEdit, FiBarChart2 } from "react-icons/fi";
import { RiAppsFill } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import SidebarButton from "./common/SidebarButton";
import { LiaSignOutAltSolid } from "react-icons/lia";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [activeTab, setActiveTab] = useState("Home");
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarItems = [
    { label: "Home", icon: <IoMdHome size={24} /> },
    { label: "Content", icon: <FiFileText size={24} /> },
    { label: "People", icon: <FiUsers size={24} /> },
    { label: "Design", icon: <FiEdit size={24} /> },
    { label: "Analytics", icon: <FiBarChart2 size={24} /> },
  ];

  return (
    <Box
      w={{ base: "40px", md: isOpen ? "250px" : "64px" }}
      bg="brand.800"
      h={"100vh"}
      boxShadow="md"
      position="fixed"
      top="0"
      left="0"
      zIndex="1000"
      transition="width 0.3s"
    >
      <Flex direction="column" h={"100%"}>
        <Flex align="center" h={16} mt="6px" mb="6px" justifyContent={"center"}>
          <IconButton
            bg="brand.800"
            color="brand.500"
            size="sm"
            icon={<RiAppsFill size="large" />}
            aria-label="Open Menu"
            sx={{ _hover: { bgColor: "gray.700" } }}
            // onClick={toggleSidebar}
          />
        </Flex>
        <VStack align="start" spacing="3" flex="1">
          {sidebarItems.map((item) => (
            <SidebarButton
              key={item.label}
              icon={item.icon}
              label={item.label}
              isOpen={isOpen}
              isActive={activeTab === item.label}
              onClick={() => setActiveTab(item.label)}
            />
          ))}
        </VStack>
        <Spacer />
        <SidebarButton
          icon={<LiaSignOutAltSolid size={24} />}
          label={"Sign Out"}
          isOpen={isOpen}
          isActive={activeTab === "Sign Out"}
          onClick={() => setActiveTab("Sign Out")}
        />
      </Flex>
    </Box>
  );
};

export default Sidebar;
